import { useContext } from 'react'
import { PortfolioContext } from '../context/PortfolioContext'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const { profile } = useContext(PortfolioContext)
  const [toggle, setToggle] = useState(false)

  if (!profile) return null

  return (
    <>
      <nav className="flex items-center justify-center fixed top-0 lg:py-10 md:py-10 py-2.5 lg:px-0 md:px-0 px-8 left-0 w-full lg:h-24 md:h-24 h-16 z-50 lg:bg-transparent md:bg-transparent bg-slate-50/90">
        <div className="lg:flex md:flex hidden lg:w-w-auto md:w-auto w-full items-center justify-center gap-5 bg-blue-600 p-2.5 rounded-full">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-slate-50 bg-slate-950 p-2.5 rounded-full font-medium text-sm lg:text-lg md:text-lg'
                : 'text-slate-50 hover:bg-slate-50/20 p-2.5 rounded-full font-medium text-sm lg:text-lg md:text-lg'
            }
            to={'/'}
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-slate-50 bg-slate-950 p-2.5 rounded-full font-medium text-sm lg:text-lg md:text-lg'
                : 'text-slate-50 hover:bg-slate-50/20 p-2.5 rounded-full font-medium text-sm lg:text-lg md:text-lg'
            }
            to={'/Project'}
          >
            <span>Project</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-slate-50 bg-slate-950 p-2.5 rounded-full font-medium text-sm lg:text-lg md:text-lg'
                : 'text-slate-50 hover:bg-slate-50/20 p-2.5 rounded-full font-medium text-sm lg:text-lg md:text-lg'
            }
            to={'/Services'}
          >
            <span>Services</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-slate-50 bg-slate-950 p-2.5 rounded-full font-medium text-sm lg:text-lg md:text-lg'
                : 'text-slate-50 hover:bg-slate-50/20 p-2.5 rounded-full font-medium text-sm lg:text-lg md:text-lg'
            }
            to={'/About'}
          >
            <span>About</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-slate-50 bg-slate-950 p-2.5 rounded-full font-medium text-sm lg:text-lg md:text-lg'
                : 'text-slate-50 hover:bg-slate-50/20 p-2.5 rounded-full font-medium text-sm lg:text-lg md:text-lg'
            }
            to={'/Contact'}
          >
            <span>Contact</span>
          </NavLink>
        </div>
        <div
          className="lg:hidden md:hidden flex overflow-hidden items-center justify-center relative w-[30px] h-[30px]"
          onClick={() => setToggle(!toggle)}
        >
          <span
            className={`bg-slate-950 w-full h-1 absolute rounded-full ${toggle ? 'translate-y-0 rotate-45' : 'translate-y-[7px] rotate-0'}`}
          ></span>
          <span
            className={`bg-slate-950 w-full h-1 absolute rounded-full ${toggle ? 'translate-x-[800px] ' : 'translate-x-0'}`}
          ></span>
          <span
            className={`bg-slate-950 w-full h-1 absolute rounded-full ${toggle ? 'translate-y-0 rotate-[-220deg]' : 'translate-y-[-7px] rotate-0'}`}
          ></span>
        </div>
      </nav>

      {toggle && (
        <aside className="lg:hidden p-5 md:hidden flex flex-col fixed top-20 left-0 w-full bg-blue-600 z-50 text-slate-50">
          <div className="flex flex-wrap items-center justify-center gap-5">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'bg-slate-950 p-5 rounded-full'
                  : 'rounded-full text-slate-50 hover:bg-slate-50 p-5'
              }
              to={'/'}
              onClick={() => setToggle(!toggle)}
            >
              <span>Home</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'bg-slate-950 p-5 rounded-full'
                  : ' rounded-full text-slate-50 hover:bg-slate-50 p-5'
              }
              to={'/Project'}
              onClick={() => setToggle(!toggle)}
            >
              <span>Project</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'bg-slate-950 p-5 rounded-full'
                  : ' rounded-full text-slate-50 hover:bg-slate-50 p-5'
              }
              to={'/Services'}
              onClick={() => setToggle(!toggle)}
            >
              <span>Services</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'bg-slate-950 p-5 rounded-full'
                  : ' rounded-full text-slate-50 hover:bg-slate-50 p-5'
              }
              to={'/About'}
              onClick={() => setToggle(!toggle)}
            >
              <span>About</span>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'bg-slate-950 p-5 rounded-full'
                  : ' rounded-full text-slate-50 hover:bg-slate-50 p-5'
              }
              to={'/Contact'}
              onClick={() => setToggle(!toggle)}
            >
              <span>Contact</span>
            </NavLink>
          </div>
        </aside>
      )}
    </>
  )
}
