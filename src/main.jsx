import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./layout/app.jsx";
import Home from "./view/home.jsx";
import About from "./view/about.jsx";
import Project from "./view/project.jsx";
import Contact from "./view/contact.jsx";
import Blog from "./view/blog.jsx";
import Services from "./view/services.jsx";
import { PortfolioProvider } from "./context/PortfolioContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Project",
        element: <Project />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Blog",
        element: <Blog />,
      },
      {
        path: "/Services",
        element: <Services />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PortfolioProvider>
      <RouterProvider router={router} />
    </PortfolioProvider>
  </StrictMode>,
);
