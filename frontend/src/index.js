import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  // AdminHome,
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
  ResetPassword,
  HomeAdmin,
  FormKuliah,
  FormKerja,
  FormKuliahKerja,
  FormMencariKerja,
  FormUsaha,
  EditKuliah,
  EditKerja,
  EditKuliahKerja,
  EditMencariKerja,
  EditUsaha,
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
    element: <ResetPassword />,
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
    path: "/user/profile/tambah-kuliah/:userId",
    element: <FormKuliah />,
  },
  {
    path: "/user/profile/tambah-kerja/:userId",
    element: <FormKerja />,
  },
  {
    path: "/user/profile/tambah-kuliah-kerja/:userId",
    element: <FormKuliahKerja />,
  },
  {
    path: "/user/profile/tambah-mencari-kerja/:userId",
    element: <FormMencariKerja />,
  },
  {
    path: "/user/profile/tambah-usaha/:userId",
    element: <FormUsaha />,
  },
  {
    path:"/user/profile/edit-kuliah/:userId",
    element:<EditKuliah/>
  },
  {
    path:"/user/profile/edit-kerja/:userId",
    element:<EditKerja/>
  },
  {
    path:"/user/profile/edit-kuliah-kerja/:userId",
    element:<EditKuliahKerja/>
  },
  {
    path:"/user/profile/edit-mencari-kerja/:userId",
    element:<EditMencariKerja/>
  }, 
  {
    path:"/user/profile/edit-usaha/:userId",
    element:<EditUsaha/>
  },

  {
    path: "/admin",
    element: <HomeAdmin />,
  },

  { path: "*", element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
