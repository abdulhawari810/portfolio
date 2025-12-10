import { NavLink } from 'react-router-dom'
import discussion from '../assets/discussion.svg'
import development from '../assets/development.svg'
import testing from '../assets/testing.svg'
import launching from '../assets/launching.svg'
import design from '../assets/design.svg'
import api from '../assets/restapi.svg'
import maintenance from '../assets/maintenance.svg'
import web_development from '../assets/web_development.svg'
import design_tools from '../assets/design_tools.svg'
import application from '../assets/application.svg'
import clean_code from '../assets/clean_code.svg'
import supportafterlaunch from '../assets/supportafterlaunch.svg'
import responsive from '../assets/responsive.svg'
import search_engine_optimization from '../assets/search_engine_optimization.svg'
import { ArrowRight } from 'lucide-react'

export default function Services() {
  return (
    <>
      <div className="w-full flex items-center justify-center relative">
        <svg
          preserveAspectRatio="xMidYMid slice"
          viewBox="10 10 80 80"
<<<<<<< HEAD
          className="w-full h-[500px]"
=======
          className="w-full h-[400px]"
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
        >
          <path
            fill="#9b5de5"
            class="out-top"
            d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z"
          />
          <path
            fill="#f15bb5"
            class="in-top"
            d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z"
          />

          <path
            fill="#00bbf9"
            class="out-bottom"
            d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z"
          />
          <path
            fill="#00f5d4"
            class="in-bottom"
            d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z"
          />
        </svg>
<<<<<<< HEAD
        <div className="flex w-full h-full absolute items-center justify-center bg-slate-50/50 z-10 flex-col lg:pt-20 md:pt-20 pt-28 lg:px-0 md:px-0 px-5">
=======
        <div className="flex w-full h-full absolute items-center justify-center bg-slate-50/50 z-10 flex-col pt-20">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
          <h1 className="text-4xl font-bold text-center">
            build a modern web that is fast and scalable.
          </h1>
          <h2 className="text-[20px] font-bold text-center text-slate-900">
            Services For Professional Website Development Modern web solutions for business and
            personal brands.
          </h2>
<<<<<<< HEAD
          <NavLink className="w-[150px] h-16 flex items-center justify-center bg-blue-600 text-slate-50 font-bold text-xl rounded-full lg:my-10 md:my-10 my-5">
=======
          <NavLink className="w-[150px] h-16 flex items-center justify-center bg-blue-600 text-slate-50 font-bold text-xl rounded-full my-10">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
            <span>Hire Me</span>
          </NavLink>
        </div>
      </div>
<<<<<<< HEAD
      <div className="lg:px-20 md:px-20 px-5 py-10 w-full flex flex-col">
        <h2 className="font-bold text-2xl mb-5">Services List</h2>
        <div className="lg:flex md:flex lg:flex-wrap md:flex-wrap grid grid-cols-2 w-full gap-5">
=======
      <div className="px-20 py-24 w-full flex flex-col">
        <h2 className="font-bold text-2xl mb-5">Services List</h2>
        <div className="flex flex-wrap w-full gap-5">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
          <div className="flex flex-col text-slate-950 p-5">
            <img src={web_development} alt="Web Development" className="w-[150px] h-[150px]" />
            <h2 className="font-medium text-lg">Web Development</h2>
            <ul className="px-5 text-slate-800">
              <li className="list-disc">Company Profile</li>
              <li className="list-disc">Portfolio</li>
              <li className="list-disc">Landing Pages</li>
            </ul>
          </div>
          <div className="flex flex-col text-slate-950 p-5">
            <img src={application} alt="Web Application" className="w-[150px] h-[150px]" />
            <h2 className="font-medium text-lg">Web Application</h2>
            <ul className="px-5 text-slate-800">
              <li className="list-disc">Admin Panel</li>
              <li className="list-disc">Dashboard</li>
              <li className="list-disc">Login System</li>
              <li className="list-disc">CRUD</li>
            </ul>
          </div>
          <div className="flex flex-col text-slate-950 p-5">
            <img src={design_tools} alt="UI Implementation" className="w-[150px] h-[150px]" />
            <h2 className="font-medium text-lg">UI Implementation</h2>
            <ul className="px-5 text-slate-800">
              <li className="list-disc">Figma to html</li>
              <li className="list-disc">Tailwindcss</li>
            </ul>
          </div>
          <div className="flex flex-col text-slate-950 p-5">
            <img src={api} alt="API Development" className="w-[150px] h-[150px]" />
            <h2 className="font-medium text-lg">API Development</h2>
            <ul className="px-5 text-slate-800">
              <li className="list-disc">REST API</li>
              <li className="list-disc">Integration</li>
            </ul>
          </div>
          <div className="flex flex-col text-slate-950 p-5">
            <img src={maintenance} alt="Maintenance And Support" className="w-[150px] h-[150px]" />
            <h2 className="font-medium text-lg">Maintenance & Support</h2>
            <ul className="px-5 text-slate-800">
              <li className="list-disc">Fix Bug</li>
              <li className="list-disc">Update</li>
              <li className="list-disc">Performa</li>
            </ul>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="lg:px-20 md:px-20 px-5 py-10 w-full flex flex-col">
        <h2 className="font-bold text-2xl mb-5">How the process works?</h2>
        <div className="lg:flex md:flex lg:flex-wrap md:flex-wrap grid grid-cols-2 items-center gap-5">
          <div className="flex flex-col lg:w-[25%] md:w-[25%] w-full items-center justify-center">
=======
      <div className="px-20 py-24 w-full flex flex-col">
        <h2 className="font-bold text-2xl mb-5">How the process works?</h2>
        <div className="flex items-center gap-5">
          <div className="flex flex-col w-[25%] items-center justify-center">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
            <img src={discussion} alt="Discussion" className="w-[150px] h-[150px]" />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-medium">Discussion</h1>
              <p className="text-md text-slate-800 ">
                discuss with me to develop your website application carefully
              </p>
            </div>
          </div>
<<<<<<< HEAD
          <ArrowRight className="w-10 h-10 lg:flex md:flex hidden" />
          <div className="flex flex-col lg:w-[25%] md:w-[25%] w-full items-center justify-center">
=======
          <ArrowRight className="w-10 h-10" />
          <div className="flex flex-col w-[25%] items-center justify-center">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
            <img src={design} alt="Design" className="w-[150px] h-[150px]" />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-medium">Design</h1>
              <p className="text-md text-slate-800 ">
                design the application according to your wishes before development
              </p>
            </div>
          </div>
<<<<<<< HEAD
          <ArrowRight className="w-10 h-10 lg:flex md:flex hidden" />
          <div className="flex flex-col lg:w-[25%] md:w-[25%] w-full items-center justify-center">
=======
          <ArrowRight className="w-10 h-10" />
          <div className="flex flex-col w-[25%] items-center justify-center">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
            <img src={development} alt="Development" className="w-[150px] h-[150px]" />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-medium">Development</h1>
              <p className="text-md text-slate-800 ">
                develop applications that have been discussed and agreed upon at the beginning
              </p>
            </div>
          </div>
<<<<<<< HEAD
          <ArrowRight className="w-10 h-10 lg:flex md:flex hidden" />
          <div className="flex flex-col lg:w-[25%] md:w-[25%] w-full items-center justify-center">
=======
          <ArrowRight className="w-10 h-10" />
          <div className="flex flex-col w-[25%] items-center justify-center">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
            <img src={testing} alt="Testing" className="w-[150px] h-[150px]" />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-medium">Testing</h1>
              <p className="text-md text-slate-800 ">
                testing of applications that have been developed
              </p>
            </div>
          </div>
<<<<<<< HEAD
          <ArrowRight className="w-10 h-10 lg:flex md:flex hidden" />
          <div className="flex flex-col lg:w-[25%] md:w-[25%] w-full items-center justify-center">
=======
          <ArrowRight className="w-10 h-10" />
          <div className="flex flex-col w-[25%] items-center justify-center">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
            <img src={launching} alt="Launching" className="w-[150px] h-[150px]" />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-medium">Launching</h1>
              <p className="text-md text-slate-800 ">
                launch the application if it has passed testing if there are no bug errors
              </p>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="lg:px-20 md:px-20 px-5 py-10 w-full flex flex-col">
        <h2 className="font-bold text-2xl mb-10">Choose Plan</h2>
        <div className="flex lg:items-start md:items-start items-center lg:justify-between md:justify-between justify-center lg:flex-row md:flex-row flex-col lg:px-10 md:px-10 px-0 lg:gap-5 md:gap-5 gap-20">
          <div className="w-[250px] flex flex-col rounded-lg">
            <div className="flex flex-col">
              <h2 className="font-medium lg:text-2xl md:text-2xl text-lg mb-2">Basic</h2>
              <span className="lg:text-2xl md:text-2xl text-lg font-semibold  text-slate-600">
                <span className="text-slate-950 font-bold text-4xl">$50</span> / Project
              </span>
              <p className="lg:my-5 md:my-5 my-2.5 text-sm text-slate-600">
                starting from the application landing page, portfolio, company profile
              </p>
            </div>
            <NavLink className="bg-blue-600 font-bold text-sm text-slate-50 rounded-lg w-full h-12 flex items-center justify-center">
=======
      <div className="px-20 py-24 w-full flex flex-col">
        <h2 className="font-bold text-2xl mb-10">Choose Plan</h2>
        <div className="flex items-center justify-between px-10 gap-5">
          <div className="w-[250px] flex flex-col rounded-lg">
            <div className="flex flex-col">
              <h2 className="font-medium text-2xl mb-2">Basic</h2>
              <span className="text-2xl font-semibold  text-slate-600">
                <span className="text-slate-950 font-bold text-4xl">$50</span> / Project
              </span>
              <p className="my-5 text-md text-slate-600">
                starting from the application landing page, portfolio, company profile
              </p>
            </div>
            <NavLink className="bg-blue-600 font-bold text-md text-slate-50 rounded-lg w-full h-12 flex items-center justify-center">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
              <span>Get Started</span>
            </NavLink>
            <div className="flex flex-col"></div>
          </div>
          <div className="w-[250px] flex flex-col rounded-lg">
            <div className="flex flex-col">
<<<<<<< HEAD
              <h2 className="font-medium lg:text-2xl md:text-2xl text-lg mb-2">Pro</h2>
              <span className="lg:text-2xl md:text-2xl text-lg font-semibold  text-slate-600">
                <span className="text-slate-950 font-bold text-4xl">$250</span> / Project
              </span>
              <p className="lg:my-5 md:my-5 my-2.5 text-sm text-slate-600">
                build your dream business application, and get a modern, fast, scalable application
              </p>
            </div>
            <NavLink className="bg-blue-600 font-bold text-sm text-slate-50 rounded-lg w-full h-12 flex items-center justify-center">
=======
              <h2 className="font-medium text-2xl mb-2">Pro</h2>
              <span className="text-2xl font-semibold  text-slate-600">
                <span className="text-slate-950 font-bold text-4xl">$250</span> / Project
              </span>
              <p className="my-5 text-md text-slate-600">
                build your dream business application, and get a modern, fast, scalable application
              </p>
            </div>
            <NavLink className="bg-blue-600 font-bold text-md text-slate-50 rounded-lg w-full h-12 flex items-center justify-center">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
              <span>Get Started</span>
            </NavLink>
            <div className="flex flex-col"></div>
          </div>
          <div className="w-[250px] flex flex-col rounded-lg">
            <div className="flex flex-col">
<<<<<<< HEAD
              <h2 className="font-medium lg:text-2xl md:text-2xl text-lg mb-2">Custom</h2>
              <span className="lg:text-2xl md:text-2xl text-lg font-semibold  text-slate-600">
                <span className="text-slate-950 font-bold text-4xl">$500</span> / Project
              </span>
              <p className="lg:my-5 md:my-5 my-2.5 text-sm text-slate-600">
                I accept any request application with you, cooperate with me anytime and anywhere
              </p>
            </div>
            <NavLink className="bg-blue-600 font-bold text-sm text-slate-50 rounded-lg w-full h-12 flex items-center justify-center">
=======
              <h2 className="font-medium text-2xl mb-2">Custom</h2>
              <span className="text-2xl font-semibold  text-slate-600">
                <span className="text-slate-950 font-bold text-4xl">$500</span> / Project
              </span>
              <p className="my-5 text-md text-slate-600">
                I accept any request application with you, cooperate with me anytime and anywhere
              </p>
            </div>
            <NavLink className="bg-blue-600 font-bold text-md text-slate-50 rounded-lg w-full h-12 flex items-center justify-center">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
              <span>Get Started</span>
            </NavLink>
            <div className="flex flex-col"></div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="lg:px-20 md:px-20 px-5 py-10 w-full flex flex-col">
        <h2 className="font-bold text-2xl mb-10">why choose me?</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:px-10 md:px-10 px-0 gap-10">
          <div className="flex items-center justify-center flex-col rounded-4xl p-10 bg-slate-200/50">
=======
      <div className="px-20 py-24 w-full flex flex-col">
        <h2 className="font-bold text-2xl mb-10">why choose me?</h2>
        <div className="grid grid-cols-2 px-10 gap-10">
          <div className="flex items-center justify-center flex-col rounded-lg p-10 bg-slate-200/50">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
            <img src={clean_code} alt="Clean Code" className="w-[200px] h-[200px]" />
            <h2 className="text-2xl font-semibold mb-2.5">Clean Code</h2>
            <p className="text-lg text-center text-slate-800">
              We prioritize code neatness so that it is easy to understand for you and your
              teamwork. accompanied by complete documentation to make things easier for you and your
              team
            </p>
          </div>
<<<<<<< HEAD
          <div className="flex items-center justify-center flex-col rounded-4xl p-10 bg-slate-200/50">
=======
          <div className="flex items-center justify-center flex-col rounded-lg p-10 bg-slate-200/50">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
            <img
              src={search_engine_optimization}
              alt="Clean Code"
              className="w-[200px] h-[200px]"
            />
            <h2 className="text-2xl font-semibold mb-2.5">Search Engine Optimization (SEO)</h2>
            <p className="text-lg text-center text-slate-800">
              We apply SEO to your web application to attract the attention of users, and can be
              detected by Google search
            </p>
          </div>
<<<<<<< HEAD
          <div className="flex items-center justify-center flex-col rounded-4xl p-10 bg-slate-200/50">
=======
          <div className="flex items-center justify-center flex-col rounded-lg p-10 bg-slate-200/50">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
            <img src={responsive} alt="Clean Code" className="w-[200px] h-[200px]" />
            <h2 className="text-2xl font-semibold mb-2.5">Responsive</h2>
            <p className="text-lg text-center text-slate-800">
              The web application created supports responsiveness for all devices, so that users can
              access it on any device and anywhere at any time
            </p>
          </div>
<<<<<<< HEAD
          <div className="flex items-center justify-center flex-col rounded-4xl p-10 bg-slate-200/50">
=======
          <div className="flex items-center justify-center flex-col rounded-lg p-10 bg-slate-200/50">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
            <img src={supportafterlaunch} alt="Clean Code" className="w-[200px] h-[200px]" />
            <h2 className="text-2xl font-semibold mb-2.5">Support After Launching</h2>
            <p className="text-lg text-center text-slate-800">
              We also offer ongoing support regarding bugs or maintenance on an app that has already
              been launched
            </p>
          </div>
        </div>
      </div>
<<<<<<< HEAD
      <div className="lg:px-20 md:px-20 px-5 py-10 w-full flex flex-col">
=======
      <div className="px-20 py-24 w-full flex flex-col">
>>>>>>> ae5e8464a361a5e05d9a125f9398607a06cdb2d9
        <h2 className="font-bold text-3xl text-center mb-10">
          ready to start your project? contact us immediately
        </h2>
        <div className="flex justify-center items-center gap-5">
          <NavLink className="p-5 text-lg font-medium rounded-xl bg-slate-950 text-slate-50">
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
