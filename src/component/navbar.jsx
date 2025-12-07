import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const { profile } = useContext(PortfolioContext);

  if (!profile) return null;

  return (
    <>
      <nav className="flex items-center justify-center fixed top-0 py-10 left-0 w-full h-24 z-50 bg-slate-50/70">
        <div className="flex items-center justify-center gap-5 bg-blue-600 p-2.5 rounded-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-slate-50 bg-slate-950 p-2.5 rounded-full font-medium text-lg"
                : "text-slate-50 hover:bg-slate-50/20 p-2.5 rounded-full font-medium text-lg"
            }
            to={"/"}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-slate-50 bg-slate-950 p-2.5 rounded-full font-medium text-lg"
                : "text-slate-50 hover:bg-slate-50/20 p-2.5 rounded-full font-medium text-lg"
            }
            to={"/Project"}
          >
            <span>Project</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-slate-50 bg-slate-950 p-2.5 rounded-full font-medium text-lg"
                : "text-slate-50 hover:bg-slate-50/20 p-2.5 rounded-full font-medium text-lg"
            }
            to={"/Services"}
          >
            <span>Services</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-slate-50 bg-slate-950 p-2.5 rounded-full font-medium text-lg"
                : "text-slate-50 hover:bg-slate-50/20 p-2.5 rounded-full font-medium text-lg"
            }
            to={"/About"}
          >
            <span>About</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-slate-50 bg-slate-950 p-2.5 rounded-full font-medium text-lg"
                : "text-slate-50 hover:bg-slate-50/20 p-2.5 rounded-full font-medium text-lg"
            }
            to={"/Contact"}
          >
            <span>Contact</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
