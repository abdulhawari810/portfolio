import { useContext, useEffect, useState } from 'react'
import { PortfolioContext } from '../context/PortfolioContext'
import defaultProfile from '../assets/profile.png'
import { Facebook, Github, Instagram, Twitter, Send, GithubIcon, ArrowUpRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import reactjs from '../assets/reactjs.svg'
import codeigniter from '../assets/codeigniter.svg'
import tailwindcss from '../assets/tailwindcss.svg'
import mysql from '../assets/mysql.svg'
import expressjs from '../assets/expressjs.webp'
import github from '../assets/github.png'
import firebase from '../assets/firebase.png'
import project1 from '../assets/project/project1.webp'
import project2 from '../assets/project/project2.webp'
import project3 from '../assets/project/project3.webp'
import project4 from '../assets/project/project4.webp'
import project5 from '../assets/project/project5.webp'
import discussion from '../assets/discussion.svg'
import development from '../assets/development.svg'
import testing from '../assets/testing.svg'
import delivery from '../assets/delivery.svg'
import planning from '../assets/planning.svg'

export default function About() {
  const { profile } = useContext(PortfolioContext)
  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    const generated = Array.from({ length: 50 }).map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      size: Math.random() * 15 + 8,
    }))

    setBubbles(generated)
  }, [])
  return (
    <>
      <div className="relative lg:min-h-screen md:min-h-screen h-auto bg-slate-50 overflow-hidden">
        <div className="w-full overflow-hidden relative lg:h-[500px] md:h-[500px] h-[850px]">
          <div className="flex flex-col z-10 absolute bg-slate-50/80 lg:bg-slate-50/50 md:bg-slate-50/50 items-center justify-center w-full h-full lg:px-20 md:px-20 px-5 pt-20 pb-5">
            <div className="flex items-center justify-around lg:flex-row md:flex-row flex-col-reverse relative">
              <div className="flex flex-col lg:mt-0 md:mt-0 mt-2.5">
                <h1 className="font-black text-2xl text-blue-600">Hello, i'm {profile?.name}</h1>
                <span className="text-md font-medium text-slate-950 mt-2.5">
                  Fullstack Developer
                </span>
                <p className="text-md text-slate-800 my-5 w-[70%]">
                  I'm a full-stack web developer specializing in building modern, fast, and scalable
                  web applications. I am comfortable working both independently and as part of a
                  team, and am ready to help and collaborate with you in realizing the digital
                  solutions you need.
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
              <div className="rounded-blob relative overflow-hidden flex items-end justify-end bg-blue-600 lg:w-full md:w-full lg:h-[350px] md:h-[350px] w-[250px] h-[250px]">
                <img
                  src={defaultProfile}
                  className="lg:w-[250px] md:w-[250px] w-[200px] lg:h-[350px] md:h-[350px] h-[300px] absolute -bottom-5  object-cover rounded-full"
                  alt="profile"
                />
              </div>
            </div>
          </div>
          {Array.isArray(bubbles) &&
            bubbles.map((bubble, i) => (
              <span
                key={i}
                className="absolute bg-blue-600 rounded-full animate-ping"
                style={{
                  top: bubble.top,
                  left: bubble.left,
                  width: bubble.size,
                  height: bubble.size,
                  animationDelay: bubble.delay,
                }}
              />
            ))}
        </div>
      </div>
      <div className="flex flex-col w-full bg-slate-100 py-10 lg:px-20 md:px-20 px-5">
        <h1 className="font-black text-2xl text-slate-950 lg:mb-0 md:mb-0 my-10">About Me</h1>
        <p className="text-lg text-slate-800 font-medium">
          I learned web development by building real projects and continuing to improve my skills
          through hands-on practice and exploring the latest technologies. I am ready to work
          independently or collaborate in a team to help clients realize the best digital solutions.
        </p>
      </div>
      <div className="flex flex-col w-full bg-slate-100 py-10 lg:px-20 md:px-20 px-5">
        <h1 className="font-black text-2xl text-slate-950">My Tech Stack</h1>
        <div className="grid grid-cols-1">
          <div className="flex flex-col my-5">
            <h4 className="text-xl font-medium mb-5">Frontend:</h4>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex flex-col items-center rounded-2xl justify-start bg-slate-200 p-5">
                <img src={reactjs} className="w-16 h-16" />
                <h3 className="lg:text-2xl md:text-2xl text-lg font-bold my-2.5">Reactjs</h3>
                <p className="lg:text-md md:text-md text-sm font-medium text-slate-800">
                  I am a Frontend Developer with 2 years of experience using ReactJS in building
                  modern, responsive and optimized web interfaces. Accustomed to developing
                  component-based applications, managing state, and implementing UI designs that are
                  efficient and easy to use.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl justify-start bg-slate-200 p-5">
                <img src={tailwindcss} className="w-16 h-16" />
                <h3 className="lg:text-2xl md:text-2xl text-lg  font-bold my-2.5">Tailwindcss</h3>
                <p className="lg:text-md md:text-md text-sm font-medium text-slate-800">
                  UI Developer with over 2 years of experience working with TailwindCSS to build
                  modern, responsive, and maintainable interfaces.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-5">
            <h4 className="text-xl font-medium mb-5">Backend:</h4>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex flex-col items-center rounded-2xl justify-start bg-slate-200 p-5">
                <img src={codeigniter} className="w-16 h-16" />
                <h3 className="lg:text-2xl md:text-2xl text-lg  font-bold my-2.5">CodeIgniter</h3>
                <p className="lg:text-md md:text-md text-sm font-medium text-slate-800">
                  1 year experience using Codeigniter and ability to create stable, modern and
                  scalable applications.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl justify-start bg-slate-200 p-5">
                <img src={expressjs} className="w-16 h-16" />
                <h3 className="lg:text-2xl md:text-2xl text-lg  font-bold my-2.5">Express js</h3>
                <p className="lg:text-md md:text-md text-sm font-medium text-slate-800">
                  I have more than 1 year of experience in backend development using Express.js, and
                  am familiar with building REST APIs for various web application needs.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-5">
            <h4 className="text-xl font-medium mb-5">Database:</h4>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex flex-col items-center rounded-2xl justify-start bg-slate-200 p-5">
                <img src={mysql} className="w-16 h-16" />
                <h3 className="lg:text-2xl md:text-2xl text-lg  font-bold my-2.5">MySQL</h3>
                <p className="lg:text-md md:text-md text-sm font-medium text-slate-800">
                  I have more than 2 years of experience working with MySQL, designing efficient and
                  well-structured database tables, and optimizing queries using indexing.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-5">
            <h4 className="text-xl font-medium mb-5">Tools:</h4>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="flex flex-col items-center rounded-2xl justify-start bg-slate-200 p-5">
                <img src={github} className="w-16 h-16" />
                <h3 className="lg:text-2xl md:text-2xl text-lg  font-bold my-2.5">Github</h3>
                <p className="lg:text-md md:text-md text-sm font-medium text-slate-800">
                  I have experience using GitHub to manage code, collaborate with teams, and
                  maintain an organized development workflow.
                </p>
              </div>
              <div className="flex flex-col items-center rounded-2xl justify-start bg-slate-200 p-5">
                <img src={firebase} className="w-16 h-16" />
                <h3 className="lg:text-2xl md:text-2xl text-lg  font-bold my-2.5">Firebase</h3>
                <p className="lg:text-md md:text-md text-sm font-medium text-slate-800">
                  I have experience working with Firebase and integrating it with React.js to build
                  web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full bg-slate-100 py-10 lg:px-20 md:px-20 px-5">
        <h1 className="font-black text-2xl text-slate-950 mb-10">Project Experience</h1>
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="flex flex-col lg:w-[250px] md:w-[250px] w-fu relative bg-slate-200 p-2 rounded-4xl">
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
          <div className="flex flex-col lg:w-[250px] md:w-[250px] w-fu relative bg-slate-200 p-2 rounded-4xl">
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
          <div className="flex flex-col lg:w-[250px] md:w-[250px] w-fu relative bg-slate-200 p-2 rounded-4xl">
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
          <div className="flex flex-col lg:w-[250px] md:w-[250px] w-fu relative bg-slate-200 p-2 rounded-4xl">
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
          <div className="flex flex-col lg:w-[250px] md:w-[250px] w-fu relative bg-slate-200 p-2 rounded-4xl">
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
      <div className="flex flex-col w-full bg-slate-100 py-10 lg:px-20 md:px-20 px-5">
        <h1 className="font-black text-2xl text-slate-950 mb-10 lg:mb-0 md:mb-0">Working Style</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-2.5 lg:p-10 md:p-10">
          <div className="flex flex-col items-center justify-center bg-slate-200 p-5 rounded-2xl">
            <img className="w-[150px] h-[150px]" src={discussion} alt="Discussion" />
            <div className="flex flex-col">
              <h5 className="lg:text-lg md:text-lg text-md font-bold text-slate-950 mb-2.5">
                Discussion
              </h5>
              <p className="lg:text-md md:text-md text-sm text-slate-800">
                Open discussions to understand the client's needs in detail before starting
                development so that the solution created is truly appropriate.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-slate-200 p-5 rounded-2xl">
            <img className="w-[150px] h-[150px]" src={planning} alt="Planning" />
            <div className="flex flex-col">
              <h5 className="lg:text-lg md:text-lg lg:text-md md:text-md text-sm font-bold text-slate-950 mb-2.5">
                Planning
              </h5>
              <p className="lg:text-md md:text-md text-sm text-slate-800">
                Develop technical planning and application structure so that development runs
                directed and efficient.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-slate-200 p-5 rounded-2xl">
            <img className="w-[150px] h-[150px]" src={development} alt="Development" />
            <div className="flex flex-col">
              <h5 className="lg:text-lg md:text-lg lg:text-md md:text-md text-sm font-bold text-slate-950 mb-2.5">
                Development
              </h5>
              <p className="lg:text-md md:text-md text-sm text-slate-800">
                Develop applications with a focus on performance, code cleanliness, and system
                scalability.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-slate-200 p-5 rounded-2xl">
            <img className="w-[150px] h-[150px]" src={testing} alt="Testing" />
            <div className="flex flex-col">
              <h5 className="lg:text-lg md:text-lg lg:text-md md:text-md text-sm font-bold text-slate-950 mb-2.5">
                Testing
              </h5>
              <p className="text-md text-slate-800">
                Carry out testing to ensure the application runs well, has minimal bugs, and meets
                client needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-slate-200 p-5 rounded-2xl">
            <img className="w-[150px] h-[150px]" src={delivery} alt="Delivery" />
            <div className="flex flex-col">
              <h5 className="lg:text-lg md:text-lg text-md font-bold text-slate-950 mb-2.5">
                Delivery
              </h5>
              <p className="text-md text-slate-800">
                Deliver project results on time with clear documentation and ready for use or
                further development.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-20 md:px-20 px-5 py-24 w-full flex flex-col">
        <h2 className="font-bold text-3xl text-center mb-10">
          ready to start your project? contact us immediately
        </h2>
        <div className="flex justify-center items-center gap-5">
          <NavLink className="p-5 lg:text-lg md:text-lg text-md font-medium rounded-xl bg-slate-950 text-slate-50">
            <span>WhatsApp</span>
          </NavLink>
          <NavLink className="p-5 text-lg font-medium rounded-xl bg-blue-600 text-slate-50">
            <span>Contact Me</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}
