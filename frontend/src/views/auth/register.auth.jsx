import { GiCheckedShield } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { MdFlashOn, MdOutlineCheckCircleOutline } from "react-icons/md";
import { RiEyeLine, RiEyeCloseLine, RiCloseCircleFill } from "react-icons/ri";
import { BsCheck2Circle } from "react-icons/bs";
import { useState } from "react";
import { toast } from "sonner";
import {
  PasswordMinLength,
  PasswordOneNumber,
  PasswordOneChar,
  PasswordOneUpper,
} from "@/utils/regexp.utils.js";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [code, setCode] = useState("");
  const [usernameError, setUsernameError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [confPasswordError, setConfPasswordError] = useState(true);
  const [codeError, setCodeError] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const passwordCheck = [
    PasswordMinLength.test(password),
    PasswordOneNumber.test(password),
    PasswordOneUpper.test(password),
    PasswordOneChar.test(password),
  ];

  const passwordScore = passwordCheck.filter(Boolean).length;
  const isPasswordComplete = passwordScore === passwordCheck.length;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username && !email && !password && !confPassword && !code) {
      toast.error("Semua bidang input tidak boleh kosong!");
      if (!username) setUsernameError(!!username);
      if (!email) setEmailError(!!email);
      if (!password) setPasswordError(!!password);
      if (!confPassword) setConfPasswordError(!!confPassword);
      if (!code) setCodeError(!!code);
      return;
    }

    if (!username) {
      toast.error("Username tidak boleh kosong!");
      setUsernameError(!!username);
    }
    if (!email) {
      toast.error("Alamat Email tidak boleh kosong!");
      setEmailError(!!email);
    }
    if (!code) {
      toast.error("Kode verifikasi Alamat Email tidak boleh kosong!");
      setCodeError(!!code);
    }
    if (!password) {
      toast.error("Password tidak boleh kosong!");
      setPasswordError(!!password);
    }
    if (!confPassword) {
      toast.error("Konfirmasi Password tidak boleh kosong!");
      setConfPasswordError(!!confPassword);
    }

    if (!Number(code)) {
      toast.error("Kode harus berupa angka!");
      setCodeError(false);
    }
  };

  return (
    <main className="w-full flex items-center justify-center p-10">
      <section className="grid grid-cols-2 overflow-hidden rounded-2xl">
        <section className="flex flex-col relative bg-linear-to-tr from-secondary-900/20 to-secondary-700/20 p-10">
          <h1 className="text-4xl font-bold text-primary-200">
            Join the Elite.
          </h1>
          <p className="font-medium text-lg text-primary-200/80 mt-5">
            Experience a premium, technically robust environment designed for
            professional precision. Obsidian indigo offers the tools you need to
            excel
          </p>

          <div className="flex flex-col absolute bottom-10 gap-y-5">
            <div className="flex items-center gap-5">
              <span className="p-3 bg-primary/20 flex rounded-lg border border-primary items-center justify-center">
                <GiCheckedShield className="text-xl" />
              </span>
              <span className="flex flex-col">
                <h1>Secure Infrastructure</h1>
                <span>Military-grade encryption for all data.</span>
              </span>
            </div>
            <div className="flex items-center gap-5">
              <span className="p-3 bg-primary/20 flex rounded-lg border border-primary items-center justify-center">
                <MdFlashOn className="text-xl" />
              </span>

              <span className="flex flex-col">
                <h1>High Performance</h1>
                <span>Low-latency workflows optimized for speed.</span>
              </span>
            </div>
          </div>
        </section>
        <section className="flex flex-col bg-neutral-900/20 p-10">
          <h1 className="text-4xl font-bold">Register</h1>
          <p className="text-md font-medium mt-5">
            Start your journey with us today.
          </p>
          <form className="flex flex-col mt-5 gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <label htmlFor="username" className="text-md text-primary-200">
                Username
              </label>
              <input
                type="text"
                className={`bg-bg-color outline rounded-lg h-10 px-5 w-full ${usernameError ? "outline-neutral-900" : "outline-red-500"}`}
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError(true);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-md text-primary-200">
                Email Address
              </label>
              <input
                type="email"
                className={`bg-bg-color outline rounded-lg h-10 px-5 w-full ${emailError ? "outline-neutral-900" : "outline-red-500"}`}
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(true);
                }}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="email-code" className="text-md text-primary-200">
                Email Verification Code
              </label>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  className={`bg-bg-color outline rounded-lg h-10 px-5 w-1/2 ${codeError ? "outline-neutral-900" : "outline-red-500"}`}
                  id="email-code"
                  maxLength={6}
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setCodeError(true);
                  }}
                />
                <button
                  type="button"
                  className="h-10 bg-primary-600 text-neutral-100 rounded-lg px-4 text-sm active:scale-102 cursor-pointer hover:bg-primary-700 transition-all duration-300"
                >
                  Send Code
                </button>
              </div>
              <div className="flex flex-col gap-3 relative">
                <label htmlFor="password" className="text-md text-primary-200">
                  Password
                </label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className={`bg-bg-color outline rounded-lg h-10 px-5 w-full ${passwordError ? "outline-neutral-900" : "outline-red-500"}`}
                  id="password"
                  value={password}
                  onChange={(e) => {
                    const value = e.target.value;
                    setPassword(value);
                    setPasswordError(true);
                  }}
                />
                <button
                  type="button"
                  className="absolute cursor-pointer top-4 right-5"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                </button>
              </div>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="confirm-password"
                  className="text-md text-primary-200"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  className={`bg-bg-color outline rounded-lg h-10 px-5 w-full ${confPasswordError ? "outline-neutral-900" : "outline-red-500"}`}
                  id="confirm-password"
                  value={confPassword}
                  onChange={(e) => {
                    setConfPassword(e.target.value);
                    setConfPasswordError(true);
                  }}
                />
              </div>
            </div>
            <div className="w-full p-5 bg-neutral-900/20 flex flex-col gap-5">
              <div className="grid grid-cols-3 gap-2">
                <div className="w-full bg-neutral-700">
                  <div
                    className={`${password.length > 0 ? "w-full" : "w-0"} rounded-full h-1 bg-red-500 transition-all duration-300`}
                  ></div>
                </div>
                <div className="w-full bg-neutral-700">
                  <div
                    className={`${passwordScore >= 1 ? "w-full" : "w-0"} rounded-full h-1 bg-orange-500 transition-all duration-300`}
                  ></div>
                </div>
                <div className="w-full bg-neutral-700">
                  <div
                    className={`${isPasswordComplete ? "w-full" : "w-0"} rounded-full h-1 bg-green-500 transition-all duration-300`}
                  ></div>
                </div>
              </div>
              <span
                className={`flex items-center gap-2 ${PasswordMinLength.test(password) ? "text-green-500/80" : "text-red-400/80"}`}
              >
                {PasswordMinLength.test(password) ? (
                  <BsCheck2Circle className="text-xl" />
                ) : (
                  <RiCloseCircleFill className="text-xl" />
                )}
                <span>Be at least 8 characters long</span>
              </span>
              <span
                className={`flex items-center gap-2 ${PasswordOneUpper.test(password) ? "text-green-500/80" : "text-red-400/80"}`}
              >
                {PasswordOneUpper.test(password) ? (
                  <BsCheck2Circle className="text-xl" />
                ) : (
                  <RiCloseCircleFill className="text-xl" />
                )}
                <span>at least one uppercase</span>
              </span>
              <span
                className={`flex items-center gap-2 ${PasswordOneNumber.test(password) ? "text-green-500/80" : "text-red-400/80"}`}
              >
                {PasswordOneNumber.test(password) ? (
                  <BsCheck2Circle className="text-xl" />
                ) : (
                  <RiCloseCircleFill className="text-xl" />
                )}
                <span>at least one number</span>
              </span>
              <span
                className={`flex items-center gap-2 ${PasswordOneChar.test(password) ? "text-green-500/80" : "text-red-400/80"}`}
              >
                {PasswordOneChar.test(password) ? (
                  <BsCheck2Circle className="text-xl" />
                ) : (
                  <RiCloseCircleFill className="text-xl" />
                )}
                <span>at least one special characters</span>
              </span>
            </div>
            <button
              type="submit"
              className="w-full h-10 px-5 bg-primary-600 text-white font-medium font-headline text-lg rounded-lg mt-5 active:scale-102 cursor-pointer hover:bg-primary-700 transition-all duration-300"
            >
              Create Account
            </button>
            <NavLink
              to={"/auth/login"}
              className="text-sm text-center font-ligth text-neutral-400 hover:underline"
            >
              Already have an account?Login
            </NavLink>
          </form>
        </section>
      </section>
    </main>
  );
}
