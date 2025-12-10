import { Search, GithubIcon, ArrowUpRight } from 'lucide-react'
import MinimalBackground from '../component/background'
import project1 from '../assets/project/project1.webp'
import project2 from '../assets/project/project2.webp'
import project3 from '../assets/project/project3.webp'
import project4 from '../assets/project/project4.webp'
import project5 from '../assets/project/project5.webp'
import { NavLink } from 'react-router-dom'

export default function Project() {
  return (
    <>
      <MinimalBackground>
        <div className="max-w-5xl mx-auto px-6 pt-32 pb-10">
          <div className="flex items-center justify-center">
            <form className="flex w-full items-center justify-center relative lg:px-0 md:px-0 px-5">
              <input
                autoComplete="off"
                type="search"
                className="peer w-[350px] h-11 px-2.5 text-slate-950 font-medium text-md border-b-[3px] border-b-slate-400 outline-0 focus:border-b-slate-950 not-placeholder-shown:border-b-slate-950"
                placeholder=" "
                name="search"
                id="search"
              />
              <label
                className="absolute left-2.5 text-md text-slate-500 font-medium translate-y-0 px-1 peer-focus:text-slate-950 peer-not-placeholder-shown:text-slate-950 peer-focus:translate-y-[-23px] peer-not-placeholder-shown:translate-y-[-23px] peer-focus:bg-slate-50 peer-not-placeholder-shown:bg-slate-50 peer-focus:left-2 peer-not-placeholder-shown:left-2 peer-focus:text-sm peer-not-placeholder-shown:text-sm"
                htmlFor="search"
              >
                Search
              </label>
              <button className="flex items-center justify-center absolute right-5 cursor-pointer">
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col w-full lg:px-20 md:px-20 px-10 pb-10">
          <div className="flex flex-wrap items-start justify-between gap-5 lg:p-5 md:p-5 p-0">
            <div className="flex flex-col lg:w-[250px] md:w-[250px] w-full relative bg-slate-200 p-2 rounded-4xl">
              <img
                src={project1}
                alt="Project 1"
                className="w-full h-[200px] object-cover rounded-3xl"
              />
              <div className="px-2.5">
                <h1 className="text-lg font-bold mt-2.5">E-commerce</h1>
                <div className="flex flex-col">
                  <h5 className="text-[14px] text-slate-800 font-medium mt-2.5">
                    This E-Commerce project was developed using ReactJS as the frontend, ExpressJS &
                    NodeJS as backend, MySQL as database, and TailwindCSS for UI display. This
                    application is designed to provide an online shopping experience which is fast,
                    responsive, and user-friendly with product management features, cart shopping,
                    authentication systems, and transactions.
                  </h5>
                </div>
                <div className="flex items-center gap-2.5 pb-5  ">
                  <NavLink className="p-2.5 bg-blue-600 text-slate-50 rounded-lg mt-2.5 flex items-center gap-2">
                    <span>Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>
                  <NavLink className="p-2.5 bg-slate-950 text-slate-50 rounded-lg mt-2.5 flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>Github</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-[250px] md:w-[250px] w-full relative bg-slate-200 p-2 rounded-4xl">
              <img
                src={project2}
                alt="Project 1"
                className="w-full h-[200px] object-cover rounded-3xl"
              />
              <div className="px-2.5">
                <h1 className="text-lg font-bold mt-2.5">Admin Dashboard</h1>
                <div className="flex flex-col">
                  <h5 className="text-[14px] text-slate-800 font-medium mt-2.5">
                    This Admin Dashboard was developed using ReactJS as the frontend, CodeIgniter as
                    the backend, and TailwindCSS for interface design. The application functions as
                    a responsive and intuitive data management hub, with user management, dynamic
                    data and information visualization features.
                  </h5>
                </div>
                <div className="flex items-center gap-2.5 pb-5  ">
                  <NavLink className="p-2.5 bg-blue-600 text-slate-50 rounded-lg mt-2.5 flex items-center gap-2">
                    <span>Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>
                  <NavLink className="p-2.5 bg-slate-950 text-slate-50 rounded-lg mt-2.5 flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>Github</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-[250px] md:w-[250px] w-full relative bg-slate-200 p-2 rounded-4xl">
              <img
                src={project3}
                alt="Project 1"
                className="w-full h-[200px] object-cover rounded-3xl"
              />
              <div className="px-2.5">
                <h1 className="text-lg font-bold mt-2.5">Company Profile</h1>
                <div className="flex flex-col">
                  <h5 className="text-[14px] text-slate-800 font-medium mt-2.5">
                    This Company Profile website was developed using CodeIgniter as the backend,
                    TailwindCSS for interface design, and MySQL as the database. This application is
                    designed to display company information in a professional manner, quickly
                    accessed, and easy to manage through a simple content management system.
                  </h5>
                </div>
                <div className="flex items-center gap-2.5 pb-5  ">
                  <NavLink className="p-2.5 bg-blue-600 text-slate-50 rounded-lg mt-2.5 flex items-center gap-2">
                    <span>Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>
                  <NavLink className="p-2.5 bg-slate-950 text-slate-50 rounded-lg mt-2.5 flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>Github</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-[250px] md:w-[250px] w-full relative bg-slate-200 p-2 rounded-4xl">
              <img
                src={project4}
                alt="Project 1"
                className="w-full h-[200px] object-cover rounded-3xl"
              />
              <div className="px-2.5">
                <h1 className="text-lg font-bold mt-2.5">Anime</h1>
                <div className="flex flex-col">
                  <h5 className="text-[14px] text-slate-800 font-medium mt-2.5">
                    This anime website was created using ReactJS, Firebase, and TailwindCSS to
                    provide a fast, modern, and responsive anime browsing experience with a
                    real-time data system.
                  </h5>
                </div>
                <div className="flex items-center gap-2.5 pb-5  ">
                  <NavLink className="p-2.5 bg-blue-600 text-slate-50 rounded-lg mt-2.5 flex items-center gap-2">
                    <span>Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>
                  <NavLink className="p-2.5 bg-slate-950 text-slate-50 rounded-lg mt-2.5 flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>Github</span>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:w-[250px] md:w-[250px] w-full relative bg-slate-200 p-2 rounded-4xl">
              <img
                src={project5}
                alt="Project 1"
                className="w-full h-[200px] rounded-3xl object-cover"
              />
              <div className="px-2.5">
                <h1 className="text-lg font-bold mt-2.5">Admin Dashboard</h1>
                <div className="flex flex-col">
                  <h5 className="text-[14px] text-slate-800 font-medium mt-2.5">
                    This E-Wallet application was built using the MERN Stack with MySQL as the
                    database and TailwindCSS as the UI framework. This system allows users to carry
                    out digital transactions quickly, safely and in real time.
                  </h5>
                </div>
                <div className="flex items-center gap-2.5 pb-5  ">
                  <NavLink className="p-2.5 bg-blue-600 text-slate-50 rounded-lg mt-2.5 flex items-center gap-2">
                    <span>Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </NavLink>
                  <NavLink className="p-2.5 bg-slate-950 text-slate-50 rounded-lg mt-2.5 flex items-center gap-2">
                    <GithubIcon className="w-4 h-4" />
                    <span>Github</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MinimalBackground>
    </>
  )
}
