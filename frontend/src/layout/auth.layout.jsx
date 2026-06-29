import { NavLink } from "react-router-dom";
import Navbar from "@/components/navbar.components";
import { RiArrowLeftLongLine } from "react-icons/ri";
import { useState } from "react";

export default function AuthLayout({ children }) {
  const [title, setTitle] = useState(
    () => localStorage.getItem("navbar-title") || "Log In To Account",
  );
  return (
    <main className="bg-bg-color">
      <Navbar>
        <section className="flex items-center gap-5">
          <RiArrowLeftLongLine className="text-xl" />
          <h1 className="font-headline text-lg font-bold">{title}</h1>
        </section>
        <section className="flex items-center gap-5">
          <NavLink
            to={"/auth/register"}
            onClick={() => {
              setTitle("Create Account");
              localStorage.setItem("navbar-title", "Create Account");
            }}
            className={({ isActive }) =>
              isActive
                ? `bg-primary-600 p-2 px-5 rounded-lg transition-all! text-neutral-100 active:scale-110 text-sm`
                : ` p-2 px-5 rounded-lg transition-all! text-neutral-100 active:scale-110 text-sm`
            }
          >
            Register
          </NavLink>
          <NavLink
            to={"/auth/login"}
            onClick={() => {
              setTitle("Log In To Account");
              localStorage.setItem("navbar-title", "Log In To Account");
            }}
            className={({ isActive }) =>
              isActive
                ? `bg-primary-600 p-2 px-5 rounded-lg transition-all! text-neutral-100 active:scale-110 text-sm`
                : `p-2 px-5 rounded-lg transition-all! text-neutral-100 text-sm active:scale-110`
            }
          >
            Login
          </NavLink>
        </section>
      </Navbar>
      <section className="w-full md:pt-18">{children}</section>
    </main>
  );
}
