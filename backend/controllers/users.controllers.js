import {
  UsersModels,
  ProfileModels,
  CategoryModels,
  ProjectModels,
  ProjectStackModels,
  TechStackModels,
  DatabaseModels,
} from "../models/inisiasi.models.js";
import { success, error } from "../utils/response.utils.js";
import { Op } from "sequelize";

export const getUsers = async (req, res) => {
  try {
    const { filter, search, sort } = req.query;
    const whereClauses = {};
    const orderClauses = ["username", "DESC"];

    if (search) {
      whereClauses[Op.or] = [
        { username: { [Op.like]: `%${search}%` } },
        { email: { [Op.like]: `%${search}%` } },
      ];
    }

    if (filter) {
      const filters = JSON.parse(filter);

      if (filters === "role") {
        whereClauses.role = filters.role;
      } else if (filters === "status") {
        whereClauses.status = filters.status;
      } else if (filters === "verifications") {
        whereClauses.verifications = filters.verifications;
      }
    }

    if (sort) {
      if (sort === "asc") {
        orderClauses[("username", "ASC")];
      } else if (sort === "desc") {
        orderClauses[("username", "DESC")];
      }
    }

    const users = await UsersModels.findAll({
      where: whereClauses,
      order: orderClauses,
      include: {
        model: ProfileModels,
        as: "profiles",
        required: false,
      },
      attributes: { exclude: ["password"] },
    });

    if (search && users?.length === 0)
      return success(res, 200, `Pencarian ${search} tidak ditemukan!`);

    if (filter && users?.length === 0)
      return success(
        res,
        200,
        `Pencarian filter tidak ditemukan, coba ubah dengan spesifik!`,
      );

    if (!users?.length === 0)
      return success(res, 200, "Data Users Masih kosong!");

    success(res, 200, "Data Users berhasil ditemukan!", users);
  } catch (err) {
    error(res, 500, err.message);
  }
};

export const getSingleUsers = async (req, res) => {
  try {
    const { uuid } = req.params;

    const users = await UsersModels.findByPk(uuid, {
      include: {
        model: ProfileModels,
        as: "profiles",
        required: false,
      },
      attributes: { exclude: ["password"] },
    });

    if (!users) return error(res, 404, "Users tidak dapat ditemukan!");

    success(res, 200, "Users berhasil ditemukan!", users);
  } catch (err) {
    error(ree, 500, err.message);
  }
};

export const updateStatusUsers = async (req, res) => {
  try {
    const { uuid } = req.params;
    const { status } = req.body;

    const users = await UsersModels.findByPk(uuid, {
      include: {
        model: ProfileModels,
        as: "profiles",
        required: false,
      },
      attributes: { exclude: ["password"] },
    });

    if (!users) return error(res, 404, "Users tidak dapat ditemukan!");

    if (users?.role === "admin")
      return error(res, 400, "Admin tidak dapat diubah!");

    await UsersModels.update(
      {
        status,
      },
      {
        where: { uuid },
      },
    );

    success(res, 200, "Status Users berhasil diupdate!");
  } catch (err) {
    error(res, 500, err.message);
  }
};
