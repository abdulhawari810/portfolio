import { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import defaultProfile from "../assets/default.png";
import axios from "axios";
import useSWR from "swr";
import { Facebook, Github, Instagram, Twitter, Send } from "lucide-react";
import { NavLink } from "react-router-dom";
import reactjs from "../assets/reactjs.svg";
import codeigniter from "../assets/codeigniter.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import mysql from "../assets/mysql.svg";
import expressjs from "../assets/expressjs.webp";
import project1 from "../assets/project/project1.png";

export default function Home() {
  const { profile } = useContext(PortfolioContext);

  const fetch = async (url) => {
    const res = await axios.get(url);

    return res.data;
  };

  const { data } = useSWR(`https://api.github.com/users/abdulhawari810`, fetch);

  console.log(profile);

  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 1}s`,
      size: Math.random() * 15 + 8,
    }));

    setBubbles(generated);
  }, []);

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
        <div className="flex flex-col z-10 relative items-center justify-center w-full px-20 pt-20">
          <div className="flex items-center justify-around flex-row">
            <div className="flex flex-col">
              <h1 className="font-black text-2xl text-blue-600">
                Hello, i'm {profile?.name}
              </h1>
              <span className="text-md font-medium text-slate-950 mt-2.5">
                Fullstack Developer
              </span>
              <p className="text-md text-slate-700 my-5 w-[70%]">
                {profile?.desc}
              </p>
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
                    to={
                      "https://www.facebook.com/WebDevFullStackPHP?locale=id_ID"
                    }
                    target={"_blank"}
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

            <img
              src={defaultProfile}
              className="w-[250px] h-[350px] object-cover rounded-full"
              alt="profile"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-slate-100 my-10 px-20 py-10">
        <h1 className="font-black text-2xl text-slate-950">My Tech Stack</h1>
        <div className="grid grid-cols-2">
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
                          item === "Reactjs"
                            ? reactjs
                            : item === "Tailwindcss"
                              ? tailwindcss
                              : ""
                        }
                        className="w-10 h-10"
                      />
                      <span>{item}</span>
                    </li>
                  );
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
                          item === "CodeIgniter"
                            ? codeigniter
                            : item === "Express js"
                              ? expressjs
                              : ""
                        }
                        className="w-10 h-10"
                      />
                      <span>{item}</span>
                    </li>
                  );
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
                      <img
                        src={item === "MySQL" ? mysql : ""}
                        className="w-10 h-10"
                      />
                      <span>{item}</span>
                    </li>
                  );
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
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col  bg-slate-50 px-20 py-10">
        <h1 className="text-2xl text-slate-950 font-black my-10 ">
          My Project
        </h1>
        <div className="flex items-start justify-between gap-5 py-5">
          <div className="w-[250px] flex flex-col">
            <img
              src={project1}
              alt="Project 1"
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-black my-5">
                Pandanime
              </h1>
              <p className="text-md text-slate-700">
                A fullstack anime website built with React, Tailwind CSS,
                Express, and MySQL to deliver a fast, interactive, and
                responsive user experience.
              </p>
              <div className="flex items-center justify-between gap-5 my-2.5">
                <NavLink className="bg-blue-600 text-slate-50 hover:bg-slate-950 hover:text-slate-50 rounded-lg p-2.5">
                  Preview
                </NavLink>
                <NavLink className="bg-slate-950/10 text-slate-950 hover:bg-blue-700 hover:text-slate-50 rounded-lg p-2.5">
                  Repository
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
