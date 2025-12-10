import { useContext, useEffect, useState } from 'react'
import { PortfolioContext } from '../context/PortfolioContext'
import defaultProfile from '../assets/default.png'
import axios from 'axios'
import useSWR from 'swr'
import { Facebook, Github, Instagram, Twitter, Send, ArrowUpRight, GithubIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import reactjs from '../assets/reactjs.svg'
import codeigniter from '../assets/codeigniter.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import mysql from '../assets/mysql.svg'
import expressjs from '../assets/expressjs.webp'
import project1 from '../assets/project/project1.webp'
import project2 from '../assets/project/project2.webp'
import project3 from '../assets/project/project3.webp'
import project4 from '../assets/project/project4.webp'
import project5 from '../assets/project/project5.webp'

export default function Home() {
  const { profile } = useContext(PortfolioContext)

  const fetch = async (url) => {
    const res = await axios.get(url)

    return res.data
  }

  const { data } = useSWR(`https://api.github.com/users/abdulhawari810`, fetch)

  console.log(profile)

  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 1}s`,
      size: Math.random() * 15 + 8,
    }))

    setBubbles(generated)
  }, [])

  return (
    <>
      <div className="relative min-h-screen bg-slate-50 overflow-hidden pt-5">
        {/* BUBBLES */}
        {Array.isArray(bubbles) &&
          bubbles.map((bubble, i) => (
            <span
              key={i}
              className="absolute bg-blue-500 rounded-full animate-ping"
              style={{
                top: bubble.top,
                left: bubble.left,
                width: bubble.size,
                height: bubble.size,
                animationDelay: bubble.delay,
              }}
            />
          ))}

        {/* CONTENT */}
        <div className="flex flex-col z-10 relative items-center justify-center w-full lg:px-20 md:px-20 px-5 pt-20">
          <div className="flex items-center justify-around flex-col lg:flex-row-reverse md:flex-row-reverse gap-5">
            <img
              src={defaultProfile}
              className="lg:w-h-[350px] h-[250px] md:h-[350px] lg:w-[250px] md:w-[250px] w-[200px] object-cover rounded-full"
              alt="profile"
            />
            <div className="flex flex-col">
              <h1 className="font-black text-2xl text-blue-600">Hello, i'm {profile?.name}</h1>
              <span className="text-md font-medium text-slate-950 mt-2.5">Fullstack Developer</span>
              <p className="text-md text-slate-700 my-5 w-[70%]">{profile?.desc}</p>
              <div className="w-full flex items-center gap-2.5">
                <NavLink className="flex items-center justify-center rounded-lg bg-blue-600 text-slate-50 hover:bg-slate-950 hover:text-slate-50 p-2.5">
                  Hire Me
                </NavLink>
                <NavLink className="flex items-center justify-center rounded-lg bg-slate-950/10 text-slate-950 hover:bg-blue-700 hover:text-slate-50 p-2.5">
                  Download CV
                </NavLink>
              </div>
              <div className="flex flex-col">
                <h3 className=" my-5 font-black text-2xl">My Social Media</h3>
                <div className="flex flex-wrap items-center gap-5">
                  <button className="p-2.5 rounded-lg flex items-center justify-center bg-slate-950 text-slate-50">
                    <Github className="w-5 h-5" />
                  </button>
                  <NavLink
                    className="p-2.5 rounded-lg flex items-center justify-center bg-blue-600 text-slate-50"
                    to={'https://www.facebook.com/WebDevFullStackPHP?locale=id_ID'}
                    target={'_blank'}
                  >
                    <Facebook className="w-5 h-5" />
                  </NavLink>
                  <NavLink className="p-2.5 rounded-lg flex items-center justify-center bg-sky-500 text-slate-50">
                    <Twitter className="w-5 h-5" />
                  </NavLink>
                  <NavLink className="p-2.5 rounded-lg flex items-center justify-center bg-linear-to-b from-red-500 to-pink-600 text-slate-50">
                    <Instagram className="w-5 h-5" />
                  </NavLink>
                  <NavLink className="p-2.5 rounded-lg flex items-center justify-center bg-sky-500 text-slate-50">
                    <Send className="w-5 h-5" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-slate-100 my-10 lg:px-20 md:px-20 px-5 py-10">
        <h1 className="font-black text-2xl text-slate-950">My Tech Stack</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col my-5">
            <h4 className="text-xl font-medium">Frontend:</h4>
            <ul className="w-full flex items-center py-2.5 gap-2.5">
              {Array.isArray(profile?.frontend) &&
                profile?.frontend.map((item, i) => {
                  return (
                    <li
                      className="flex flex-col items-center justify-center bg-blue-600/5 text-blue-600 rounded-lg gap-2.5 p-2.5"
                      key={i}
                    >
                      <img
                        src={
                          item === 'Reactjs' ? reactjs : item === 'Tailwindcss' ? tailwindcss : ''
                        }
                        className="w-10 h-10"
                      />
                      <span>{item}</span>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div className="flex flex-col my-5">
            <h4 className="text-xl font-medium">Backend:</h4>
            <ul className="w-full flex items-center py-2.5 gap-2.5">
              {Array.isArray(profile?.backend) &&
                profile?.backend.map((item, i) => {
                  return (
                    <li
                      className="flex flex-col items-center justify-center bg-blue-600/5 text-blue-600 rounded-lg gap-2.5 p-2.5"
                      key={i}
                    >
                      <img
                        src={
                          item === 'CodeIgniter'
                            ? codeigniter
                            : item === 'Express js'
                              ? expressjs
                              : ''
                        }
                        className="w-10 h-10"
                      />
                      <span>{item}</span>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div className="flex flex-col my-5">
            <h4 className="text-xl font-medium">Database:</h4>
            <ul className="w-full flex items-center py-2.5 gap-2.5">
              {Array.isArray(profile?.database) &&
                profile?.database.map((item, i) => {
                  return (
                    <li
                      className="flex flex-col items-center justify-center bg-blue-600/5 text-blue-600 rounded-lg gap-2.5 p-2.5"
                      key={i}
                    >
                      <img src={item === 'MySQL' ? mysql : ''} className="w-10 h-10" />
                      <span>{item}</span>
                    </li>
                  )
                })}
            </ul>
          </div>
          <div className="flex flex-col my-5">
            <h4 className="text-xl font-medium">Tools:</h4>
            <ul className="w-full flex items-center py-2.5 gap-2.5">
              {Array.isArray(profile?.tools) &&
                profile?.tools.map((item, i) => {
                  return (
                    <li
                      className="flex flex-col items-center justify-center bg-blue-600/5 text-blue-600 rounded-lg gap-2.5 p-2.5"
                      key={i}
                    >
                      <Github className="w-8 h-8" />
                      <span>{item}</span>
                    </li>
                  )
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-slate-100 py-10 lg:px-20 md:px-20 px-5">
        <h1 className="font-black text-2xl text-slate-950">Project Experience</h1>
        <div className="flex flex-wrap items-start justify-between gap-10 lg:p-5 md:p-5 p-0">
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
                  the backend, and TailwindCSS for interface design. The application functions as a
                  responsive and intuitive data management hub, with user management, dynamic data
                  and information visualization features.
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
                  This anime website was created using ReactJS, Firebase, and TailwindCSS to provide
                  a fast, modern, and responsive anime browsing experience with a real-time data
                  system.
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
    </>
  )
}
