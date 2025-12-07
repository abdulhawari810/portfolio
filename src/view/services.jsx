import { NavLink } from "react-router-dom";
import discussion from "../assets/discussion.svg";
import development from "../assets/development.svg";
import testing from "../assets/testing.svg";
import launching from "../assets/launching.svg";
import design from "../assets/design.svg";
import api from "../assets/restapi.svg";
import maintenance from "../assets/maintenance.svg";
import web_development from "../assets/web_development.svg";
import design_tools from "../assets/design_tools.svg";
import application from "../assets/application.svg";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <>
      <div className="w-full flex items-center justify-center relative">
        <svg
          preserveAspectRatio="xMidYMid slice"
          viewBox="10 10 80 80"
          className="w-full h-[400px]"
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
        <div className="flex w-full h-full absolute items-center justify-center bg-slate-50/50 z-10 flex-col pt-20">
          <h1 className="text-4xl font-bold text-center">
            build a modern web that is fast and scalable.
          </h1>
          <h2 className="text-[20px] font-bold text-center text-slate-900">
            Services For Professional Website Development Modern web solutions
            for business and personal brands.
          </h2>
          <NavLink className="w-[150px] h-16 flex items-center justify-center bg-blue-600 text-slate-50 font-bold text-xl rounded-full my-10">
            <span>Hire Me</span>
          </NavLink>
        </div>
      </div>
      <div className="px-20 py-10 w-full flex flex-col">
        <h2 className="font-bold text-2xl mb-5">Services List</h2>
        <div className="flex flex-wrap w-full gap-5">
          <div className="flex flex-col text-slate-950 p-5">
            <img
              src={web_development}
              alt="Web Development"
              className="w-[150px] h-[150px]"
            />
            <h2 className="font-medium text-lg">Web Development</h2>
            <ul className="px-5 text-slate-800">
              <li className="list-disc">Company Profile</li>
              <li className="list-disc">Portfolio</li>
              <li className="list-disc">Landing Pages</li>
            </ul>
          </div>
          <div className="flex flex-col text-slate-950 p-5">
            <img
              src={application}
              alt="Web Application"
              className="w-[150px] h-[150px]"
            />
            <h2 className="font-medium text-lg">Web Application</h2>
            <ul className="px-5 text-slate-800">
              <li className="list-disc">Admin Panel</li>
              <li className="list-disc">Dashboard</li>
              <li className="list-disc">Login System</li>
              <li className="list-disc">CRUD</li>
            </ul>
          </div>
          <div className="flex flex-col text-slate-950 p-5">
            <img
              src={design_tools}
              alt="UI Implementation"
              className="w-[150px] h-[150px]"
            />
            <h2 className="font-medium text-lg">UI Implementation</h2>
            <ul className="px-5 text-slate-800">
              <li className="list-disc">Figma to html</li>
              <li className="list-disc">Tailwindcss</li>
            </ul>
          </div>
          <div className="flex flex-col text-slate-950 p-5">
            <img
              src={api}
              alt="API Development"
              className="w-[150px] h-[150px]"
            />
            <h2 className="font-medium text-lg">API Development</h2>
            <ul className="px-5 text-slate-800">
              <li className="list-disc">REST API</li>
              <li className="list-disc">Integration</li>
            </ul>
          </div>
          <div className="flex flex-col text-slate-950 p-5">
            <img
              src={maintenance}
              alt="Maintenance And Support"
              className="w-[150px] h-[150px]"
            />
            <h2 className="font-medium text-lg">Maintenance & Support</h2>
            <ul className="px-5 text-slate-800">
              <li className="list-disc">Fix Bug</li>
              <li className="list-disc">Update</li>
              <li className="list-disc">Performa</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="px-20 py-10 w-full flex flex-col">
        <h2 className="font-bold text-2xl mb-5">How the process works?</h2>
        <div className="flex items-center gap-5">
          <div className="flex flex-col w-[25%] items-center justify-center">
            <img
              src={discussion}
              alt="Discussion"
              className="w-[150px] h-[150px]"
            />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-medium">Discussion</h1>
              <p className="text-md text-slate-800 ">
                discuss with me to develop your website application carefully
              </p>
            </div>
          </div>
          <ArrowRight className="w-10 h-10" />
          <div className="flex flex-col w-[25%] items-center justify-center">
            <img src={design} alt="Design" className="w-[150px] h-[150px]" />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-medium">Design</h1>
              <p className="text-md text-slate-800 ">
                design the application according to your wishes before
                development
              </p>
            </div>
          </div>
          <ArrowRight className="w-10 h-10" />
          <div className="flex flex-col w-[25%] items-center justify-center">
            <img
              src={development}
              alt="Development"
              className="w-[150px] h-[150px]"
            />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-medium">
                Development
              </h1>
              <p className="text-md text-slate-800 ">
                develop applications that have been discussed and agreed upon at
                the beginning
              </p>
            </div>
          </div>
          <ArrowRight className="w-10 h-10" />
          <div className="flex flex-col w-[25%] items-center justify-center">
            <img src={testing} alt="Testing" className="w-[150px] h-[150px]" />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-medium">Testing</h1>
              <p className="text-md text-slate-800 ">
                testing of applications that have been developed
              </p>
            </div>
          </div>
          <ArrowRight className="w-10 h-10" />
          <div className="flex flex-col w-[25%] items-center justify-center">
            <img
              src={launching}
              alt="Launching"
              className="w-[150px] h-[150px]"
            />
            <div className="flex flex-col">
              <h1 className="text-lg text-slate-950 font-medium">Launching</h1>
              <p className="text-md text-slate-800 ">
                launch the application if it has passed testing if there are no
                bug errors
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
