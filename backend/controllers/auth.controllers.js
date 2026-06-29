import {
  UsersModels,
  ProfileModels,
  CategoryModels,
  ProjectModels,
  ProjectStackModels,
  TechStackModels,
  DatabaseModels,
  RefreshTokenModels,
} from "../models/inisiasi.models.js";
import { error, success } from "../utils/response.utils.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import { Op } from "sequelize";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/token.utils.js";
import {
  usernameRegex,
  emailRegex,
  passwordRegex,
} from "../utils/regexp.utils.js";
import crypto from "crypto";
import { UAParser } from "ua-parser-js";
import geoip from "geoip-lite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import db from "../config/database.js";

dotenv.config();

export const template = (code) => {
  return `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
  <h2 style="color: #f97316;">
    Verifikasi Akun MorphyLabs
  </h2>

  <p>Halo,</p>

  <p>
    Terima kasih telah mendaftar di MorphyLabs.
    Gunakan kode berikut untuk memverifikasi akun Anda:
  </p>

  <div
    style="
      background:#f5f5f5;
      padding:20px;
      text-align:center;
      font-size:32px;
      font-weight:bold;
      letter-spacing:5px;
      border-radius:8px;
    "
  >
    ${code}
  </div>

  <p>
    Kode ini berlaku selama <b>10 menit</b>.
  </p>

  <p>
    Jika Anda tidak melakukan pendaftaran, abaikan email ini.
  </p>

  <hr />

  <small>
    MorphyLabs<br/>
    Portfolio & Web Development Platform
  </small>
</div>`;
};

export const Login = async (req, res) => {
  try {
    const users = req?.user?.uuid;
    const { UsersOrEmail, password, remember = false } = req.body;

    if (users) return error(res, 401, "Anda sudah login!");
    if (!UsersOrEmail)
      return error(res, 400, "Alamat Email atau Username tidak boleh kosong!");
    if (!password) return error(res, 400, "Kata Sandi tidak boleh kosong!");

    const existingUsers = await UsersModels.findOne({
      where: {
        [Op.or]: [{ username: UsersOrEmail }, { email: UsersOrEmail }],
      },
    });

    if (!existingUsers)
      return error(res, 400, "Alamat Email atau Username anda salah!");

    const match = await argon2.verify(existingUsers?.password, password);

    if (!match) return error(res, 400, "Kata Sandi yang anda masukkan salah!");

    if (existingUsers.verifications !== "verified")
      return error(
        res,
        400,
        "Alamat Email belum terverifikasi, Silahkan cek kode verifikasi di akub email kamu!",
      );

    const parser = new UAParser(req.headers["user-agent"]);
    const result = parser.getResult();
    const deviceType = `${result.browser.name} ${result.browser.version} - ${result.os.name}`;
    const ipAddress =
      req.headers["x-fowarded-for"]?.split(",")[0] ||
      req.ip ||
      req.socket.remoteAddress;
    const geo = geoip.lookup(ipAddress);
    const expiredAt = new Date(
      Date.now() +
        (remember ? 30 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000),
    );

    const deviceId =
      req.headers["x-device-id"] ||
      req.body.device_id ||
      req.ip + "-" + req.headers["user-agent"];

    const payload = { uuid: existingUsers?.uuid };

    const AccessToken = generateAccessToken(payload);
    const RefreshToken = generateRefreshToken(payload, remember);

    const existToken = await RefreshTokenModels.findOne({
      where: {
        users_id: existingUsers?.uuid,
      },
    });

    const tokenHash = crypto
      .createHash("sha256")
      .update(RefreshToken)
      .digest("hex");

    await UsersModels.update(
      {
        status: "active",
      },
      { where: { uuid: existingUsers?.uuid } },
    );

    /*   await RefreshTokenModels.create({
        token_hash: tokenHash,
        users_id: existingUsers?.uuid,
        browser: result?.browser?.name,
        browser_version: result?.browser?.version,
        os: result?.os?.name,
        os_version: result?.os?.version,
        device_type: deviceType,
        ip_address: ipAddress,
        is_active: true,
        country: geo?.country || null,
        city: geo?.city || null,
        last_used_at: new Date(),
        expires_at: expiredAt
    });*/

    const activeDevices = await RefreshTokenModels.findAll({
      where: {
        users_id: existingUsers?.uuid,
        revoked_at: null,
        expires_at: { [Op.gt]: new Date() },
      },
    });

    const existDevices = activeDevices.find(
      (item) => item.device_type === deviceId,
    );

    if (!existDevices && activeDevices.length >= 3) {
      return success(
        res,
        200,
        "Device limit reached, Please verify 2FA first",
        {
          success: true,
          code: "DEVICE_LIMIT_REACHED",
          requires_2fa: true,
        },
      );
    }

    await RefreshTokenModels.create({
      token_hash: tokenHash,
      users_id: existingUsers?.uuid,
      device_type: deviceId,
      ip_address: req.ip,
      is_active: true,
      last_used_at: new Date(),
      expires_at: expiredAt,
    });

    res.cookie("AccessToken", AccessToken, {
      httpOnly: true,
      secure: "auto",
      sameSite: "lax",
      maxAge: 1 * 60 * 60 * 1000,
    });
    res.cookie("RefreshToken", RefreshToken, {
      httpOnly: true,
      secure: "auto",
      sameSite: "lax",
      maxAge: expiredAt,
    });

    success(res, 200, "Anda berhasil login", {
      AccessToken,
      RefreshToken,
    });
  } catch (err) {
    error(res, 500, err.message, err);
  }
};

export const Register = async (req, res) => {
  try {
    const users = req?.user?.uuid;
    const { username, email, password, confPassword } = req.body;

    if (users) return error(res, 401, "Anda sudah login!");

    if (!username) return error(res, 400, "Username wajib diisi!");
    if (!email) return error(res, 400, "Alamat Email wajib diisi!");
    if (!password) return error(res, 400, "Kata Sandi wajib diisi!");
    if (!confPassword)
      return error(res, 400, "Konfirmasi Kata Sandi wajib diisi!");

    const AllUsers = await UsersModels.findAndCountAll();

    const role = AllUsers.count === 0 ? "admin" : "users";

    const existUsers = await UsersModels.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
    });

    if (existUsers)
      return error(res, 400, "Alamat Email atau Username telah digunakan!");

    if (password !== confPassword)
      return error(
        res,
        400,
        "Kata Sandi dan Konfirmasi Kata Sandi tidak sama!",
      );

    if (!usernameRegex.test(username))
      return error(
        res,
        400,
        "Username harus memiliki 5 karakter, 1 huruf besar, 1 angka, dan mempunyai 1 karakter khusus",
      );

    if (!emailRegex.test(email))
      return error(res, 400, "Alamat Email tidak valid");

    if (!passwordRegex.test(password))
      return error(
        res,
        400,
        "Password harus memiliki 8 karakter atau lebih, 1 huruf besar, 1 angka, dan mempunyai karakter khusus!",
      );

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Kode Verifikasi Akun",
      html: template(code),
    });

    const hash = await argon2.hash(password);

    await UsersModels.create({
      username,
      email,
      password: hash,
      role,
      email_verification_code: code,
      email_verification_expired_at: new Date(Date.now() + 10 * 60 * 1000),
    });

    success(res, 201, "Anda berhasil membuat akun baru!");
  } catch (err) {
    error(res, 500, err.message, err);
  }
};

export const Me = async (req, res) => {
  try {
    const uuid = req?.user?.uuid;
    const existUsers = await UsersModels.findByPk(uuid, {
      attributes: { exclude: ["password"] },
    });

    if (!existUsers) return error(res, 401, "Anda belum login!");

    success(res, 200, "Data Anda berhasil didapatkan!", existUsers);
  } catch (err) {
    error(res, 500, err.message, err);
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { email, code } = req.body;

    const users = await UsersModels.findOne({
      where: {
        email,
      },
    });

    if (!users) return error(res, 404, "Alamat Email tidak terdaftar!");

    if (code?.length > 6)
      return error(res, 400, "Kode yang anda masukkan harus 6 digit!");

    if (users?.verifications === "verified")
      return error(res, 400, "Alamat Email sudah terverifikasi!");

    if (users?.email_verification_code !== code)
      return error(res, 400, "Kode yang anda masukkan salah!");

    if (new Date() > users.email_verification_expired_at)
      return error(res, 400, "Kode sudah kedaluarsa!");

    const now = new Date();

    if (
      users.email_verify_locked_until &&
      now < users.email_verify_locked_until
    )
      return error(
        res,
        429,
        "Terlalu banyak percobaan, Silahkan coba lagi nanti!",
      );

    if (users.email_verification_code !== code) {
      const attempts = users.email_verify_attempts + 1;

      await users.update(
        {
          email_verify_attempts: attempts,
          email_verify_locked_until:
            attempts >= 5 ? new Date(Date.now + 10 * 60 * 1000) : null,
        },
        {
          where: {
            uudi: users.uuid,
          },
        },
      );

      return error(
        res,
        400,
        attempts >= 5
          ? "Kode salah dalam 5x percobaan, Coba lagi 10 menit."
          : "Kode yang anda masukkan salah!",
      );
    }

    await UsersModels.update(
      {
        verifications: "verified",
        email_verification_code: null,
        email_verification_expired_at: null,
        email_verify_locked_until: null,
        email_verify_attempts: 0,
        email_verify_last_sent_at: null,
        email_verify_resend_count: 0,
      },
      {
        where: {
          uuid: users.uuid,
        },
      },
    );

    success(res, 200, "Alamat Email telah terverifikasi!");
  } catch (err) {
    error(res, 500, err.message, err);
  }
};

export const resendEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const users = await UsersModels.findOne({
      where: {
        email,
      },
    });

    if (!users) return error(res, 404, "Alamat Email tidak terdaftar!");

    if (
      users.email_verify_last_sent_at &&
      Date.now - new Date(users.email_verify_last_sent_at).getTime() < 60 * 1000
    )
      return error(res, 429, "Tunggu 60 detik sebelum kirim ulang kode.");

    if (users.email_verify_resend_count >= 5)
      return error(
        res,
        429,
        "Terlau sering kirim ulang kode. Coba lagi dalam 30 menit!",
      );

    const newCode = Math.floor(100000 + Math.random() * 900000).toString();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Kode Verifikasi Akun",
      html: template(newCode),
    });

    await users.update({
      email_verification_code: newCode,
      email_verification_expired_at: new Date(Date.now() + 10 * 60 * 1000),
      email_verify_resend_count: users.email_verify_resend_count + 1,
      email_verify_last_sent_at: new Date(),
      email_verify_attempts: 0,
    });

    success(res, 201, "Kode verifikasi ulang berhasil dikirim!");
  } catch (err) {
    error(res, 500, err.message, err);
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const uuid = req.user.uuid;

    const users = await UsersModels.findByPk(uuid, {
      include: {
        model: ProfileModels,
        as: "profile",
        required: false,
      },
    });

    if (users?.role === "admin")
      return error(res, 400, "Admin tidak dapat dihapus!");

    if (!users) return error(res, 404, "Users tidak dapat ditemukan!");

    await UsersModels.update(
      {
        status: "delete",
      },
      {
        where: { uuid },
      },
    );

    success(res, 200, "Anda berhasil menghapus akun!");
  } catch (err) {
    error(res, 500, err.message);
  }
};

export const updateUsers = async (req, res) => {
  let transaction;
  try {
    const uuid = req.user.uuid;

    const {
      username,
      email,
      phone,
      gender,
      birthday,
      province,
      city,
      country,
      address,
      postal_code,
      avatar,
    } = req.body;

    if (
      !username ||
      !email ||
      !phone ||
      !birthday ||
      !province ||
      !city ||
      !country ||
      !address ||
      !postal_code
    )
      return error(res, 409, "Semua bidang input wajib diisi!");

    if (!username) return error(res, 409, "Username tidak boleh kosong!");
    if (!email) return error(res, 409, "Alamat Email tidak boleh kosong!");
    if (!phone) return error(res, 409, "Nomor Telepon tidak boleh kosong!");
    if (!province) return error(res, 409, "Provinsi tidak boleh kosong!");
    if (!birthday) return error(res, 409, "Tanggal Lahir tidak boleh kosong!");
    if (!city) return error(res, 409, "KOta tinggal tidak boleh kosong!");
    if (!country) return error(res, 409, "Negara tinggal tidak boleh kosong!");
    if (!address)
      return error(res, 409, "Alamat Tempat Tinggal tidak boleh kosong!");
    if (!postal_code) return error(res, 409, "Kode POS tidak boleh kosong!");

    transaction = await db.transaction();

    const users = await UsersModels.findByPk(uuid, {
      include: {
        model: ProfileModels,
        as: "profiles",
        required: false,
      },
    });

    if (!users) return error(res, 404, "Users tidak dapat ditemukan!");

    if (users) {
      await users.update(
        {
          username: username || users?.username,
          email: email || users?.email,
          avatar: avatar || "default.png",
        },
        {
          where: { uuid },
          transaction,
        },
      );

      await ProfileModels.update(
        {
          phone: phone || "",
          gender: gender || "male",
          address: address || "",
          postal_code: postal_code || "",
          country: country || "",
          city: city || "",
          province: province || "",
          birthday: birthday || null,
        },
        {
          where: { uuid },
          transaction,
        },
      );
    }

    await transaction.commit();

    success(res, 200, "Anda berhasil mengupdate profil!");
  } catch (err) {
    error(res, 500, err.message);
  }
};
