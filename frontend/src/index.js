import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AdminHome,
  Bantuan,
  HalamanAwal,
  Kerja,
  KerjaKuliah,
  Kuliah,
  Login,
  LupaPassword,
  MencariKerja,
  NotFound,
  Profile,
  Registrasi,
  Usaha,
  UserHome,
  ResetPassword
} from "./route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HalamanAwal />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registrasi",
    element: <Registrasi />,
  },
  {
    path: "/lupa-password",
    element: <LupaPassword />,
  },
  {
    path: "/reset-password/:token",
    element:<ResetPassword/>
  },
  {
    path: "/bantuan",
    element: <Bantuan />,
  },
  {
    path: "/user",
    element: <UserHome />,
  },
  {
    path: "/user/profile",
    element: <Profile />,
  },
  {
    path: "/user/kuliah",
    element: <Kuliah />,
  },
  {
    path: "/user/kuliah-kerja",
    element: <KerjaKuliah />,
  },
  {
    path: "/user/kerja",
    element: <Kerja />,
  },
  {
    path: "/user/mencari-kerja",
    element: <MencariKerja />,
  },
  {
    path: "/user/usaha",
    element: <Usaha />,
  },
  

  {
    path : "/admin",
    element: <AdminHome />
  },

  { path: "*", element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
