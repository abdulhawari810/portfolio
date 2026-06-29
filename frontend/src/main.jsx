import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/global.css";
import "./css/custom.css";
import AuthLayout from "@/layout/auth.layout";
import DashboardLayout from "@/layout/dashboard.layout";
import MainLayout from "@/layout/main.layout";
import { Toaster } from "@/components/ui/sonner";

import Register from "@/views/auth/register.auth";
import Login from "@/views/auth/login.auth";

import Home from "@/views/home/home.view.jsx";
import About from "@/views/home/about.view.jsx";
import Project from "@/views/home/project.view.jsx";
import Contact from "@/views/home/contact.view.jsx";

const app = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Project",
        element: <Project />,
      },
    ],
  },
  {
    path: "auth/login",
    element: (
      <AuthLayout>
        <Login />
      </AuthLayout>
    ),
  },
  {
    path: "auth/register",
    element: (
      <AuthLayout>
        <Register />
      </AuthLayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Toaster position="top-center" />
    <RouterProvider router={app}></RouterProvider>,
  </>,
);
