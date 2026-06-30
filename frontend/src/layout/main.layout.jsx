import { FaHome, FaUserCircle, FaPhoneAlt } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { RiAddLargeLine } from "react-icons/ri";
import { Outlet, NavLink } from "react-router-dom";
import Navbar from "@/components/navbar.components";
import { useEffect, useRef, useState } from "react";

export default function MainLayout() {
  const nav = [
    { id: 1, title: "Home", url: "#home" },
    { id: 2, title: "About", url: "#about" },
    { id: 3, title: "Service", url: "#service" },
    { id: 4, title: "AB", url: "/" },
    { id: 5, title: "Marketplace", url: "#marketplace" },
    { id: 6, title: "Portfolio", url: "#portfolio" },
    { id: 7, title: "Contact", url: "#contact" },
  ];

  const [activeId, setActiveId] = useState(1);
  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const [fabButton, setFabButton] = useState(false);

  const navRefs = useRef({});
  const containerRef = useRef(null);
  const activeNav = nav.find((items) => items.id === activeId);

  const updateIndicator = () => {
    const activeElement = navRefs.current[activeId];
    const containerElement = containerRef.current;

    if (!activeElement || !containerElement) return;

    const activeRect = activeElement.getBoundingClientRect();
    const containerRect = containerElement.getBoundingClientRect();
    const width = activeRect.width;

    setIndicator({
      left:
        activeRect.left - containerRect.left + activeRect.width / 2 - width / 2,
      width: activeRect.width,
    });
  };

  useEffect(() => {
    updateIndicator();

    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [activeId]);

  console.log(activeNav.title);

  return (
    <>
      <Navbar containerClass="w-full h-20 fixed z-1000 lg:pt-10 flex items-center left-0 bottom-0 lg:top-0 justify-center lg:px-50">
        <section
          ref={containerRef}
          className="items-center  justify-between relative hidden lg:flex p-2.5 bg-primary-600 animate-navbar w-full rounded-full"
        >
          <div
            className={`absolute ${activeNav.title === "AB" ? "left-5" : "left-0"} h-10 ${activeNav.title === "AB" ? "z-0" : "z-10"} bg-white rounded-full transition-all duration-500`}
            style={{
              width: `${activeNav.title === "AB" ? 50 : indicator.width}px`,
              transform: `translateX(${indicator.left}px)`,
            }}
          />

          {nav.map((item) => (
            <NavLink
              key={item.id}
              ref={(el) => {
                navRefs.current[item.id] = el;
              }}
              to={item.url}
              onClick={() => setActiveId(item.id)}
              className={
                item.title === "AB"
                  ? "relative px-5 bg-primary-600"
                  : `relative z-10 h-10 text-center px-4 flex items-center justify-center transition-all duration-500 ${
                      activeId === item.id
                        ? "text-primary-600 font-bold"
                        : "text-white font-normal"
                    }`
              }
            >
              {item.title === "AB" ? (
                <h1 className="bg-white p-2 rounded-full text-primary-600 font-black text-xl">
                  {item.title}
                </h1>
              ) : (
                <span>{item.title}</span>
              )}
            </NavLink>
          ))}
        </section>

        {/* NAVBAR MOBILE */}
        <section className="lg:hidden flex px-2 items-center justify-between relative text-white bg-primary-600 w-full h-20">
          <NavLink className="flex flex-col w-10 items-center justify-center gap-2">
            <FaHome className="text-xl" />
            <span>Home</span>
          </NavLink>
          <NavLink className="flex w-10 flex-col items-center justify-center gap-2">
            <FaUserCircle className="text-xl" />

            <span>About</span>
          </NavLink>
          <NavLink
            className="flex flex-col w-15 h-15 items-center bg-white text-primary-600 rounded-full justify-center gap-2 -translate-y-8"
            onClick={() => setFabButton(!fabButton)}
          >
            <RiAddLargeLine
              className={`text-3xl ${fabButton ? "rotate-135" : "rotate-0"} transition-all duration-500`}
            />
          </NavLink>
          <NavLink className="flex w-10 flex-col items-center justify-center gap-2">
            <MdDashboardCustomize className="text-xl" />
            <span>Portfolio</span>
          </NavLink>
          <NavLink className="flex flex-col items-center justify-center gap-2">
            <FaPhoneAlt className="text-xl" />
            <span>Contact</span>
          </NavLink>
        </section>
      </Navbar>

      <main className="lg:pt-30">
        <Outlet />
      </main>
    </>
  );
}
