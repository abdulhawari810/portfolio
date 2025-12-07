import { NavLink } from "react-router-dom";
import { Facebook, Github, Instagram, Send, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-slate-300 px-20 pt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-slate-50 pb-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Abdulhawari</h2>
          <p className="mt-3 text-slate-300">
            Fullstack Developer <br />I help build websites and web applications
            that are modern, fast, and ready to grow. immediately build your
            dream web application with me
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <NavLink className="hover:text-slate-50 text-slate-300">
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-slate-50 text-slate-300">
                <span>Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-slate-50 text-slate-300">
                <span>Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-slate-50 text-slate-300">
                <span>Blog</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-slate-50 text-slate-300">
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-slate-50 text-slate-300">
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2">
            <li>
              Email:
              <a
                href="mailto:abdulhawari810@gmail.com"
                className="ml-1 text-slate-50 hover:underline"
              >
                abdulhawari810@gmail.com
              </a>
            </li>
            <li>
              WhatsApp:
              <a
                href="https://wa.me/6281573282532"
                target="_blank"
                className="ml-1 text-slate-50 hover:underline"
              >
                +62 815 7328 2532
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-6">
        <div className="flex gap-4">
          <NavLink
            className="p-2.5 rounded-lg flex items-center justify-center bg-blue-800 text-slate-50"
            to={"https://www.facebook.com/WebDevFullStackPHP?locale=id_ID"}
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

        <p className="text-slate-200 mt-4 md:mt-0">
          © {new Date().getFullYear()} Abdulhawari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
