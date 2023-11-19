import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AdminHome,
  Bantuan,
  HalamanAwal,
  Login,
  NotFound,
  Registrasi,
  UserHome,
  UbahDataIjazah,
  FormInputIjazah,
  DaftarUser,
  Kerja,
  KerjaDanKuliah,
  Kuliah,
  MencariKerja,
  Usaha,
  EditDataIjazah,
  EditDataUser,
  EditDataKerja,
  EditDataKerjaDanKuliah,
  EditDataKuliah,
  EditDataMencariKerja,
  EditDataUsaha,
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
    path: "/bantuan",
    element: <Bantuan />,
  },
  {
    path: "/user",
    element: <UserHome />,
  },

  {
    path: "/admin",
    element: <AdminHome />,
  },
  {
    path: "/admin/ubah-data-ijazah",
    element: <UbahDataIjazah />,
  },
  {
    path: "/admin/ubah-data-ijazah/input-data",
    element: <FormInputIjazah />,
  },
  {
    path: "/admin/ubah-data-ijazah/edit-data-ijazah",
    element: <EditDataIjazah />,
  },
  {
    path: "/admin/daftar-user",
    element: <DaftarUser />,
  },
  {
    path: "/admin/daftar-user/edit-data-user",
    element: <EditDataUser />,
  },
  {
    path: "/admin/kerja",
    element: <Kerja />,
  },
  {
    path: "/admin/kerja/edit-data-kerja",
    element: <EditDataKerja />,
  },
  {
    path: "/admin/kerja-dan-kuliah",
    element: <KerjaDanKuliah />,
  },
  {
    path: "/admin/kerja-dan-kuliah/edit-data-kerja-dan-kuliah",
    element: <EditDataKerjaDanKuliah />,
  },
  {
    path: "/admin/kuliah",
    element: <Kuliah />,
  },
  {
    path: "/admin/kuliah/edit-data-kuliah",
    element: <EditDataKuliah />,
  },
  {
    path: "/admin/mencari-kerja",
    element: <MencariKerja />,
  },
  {
    path: "/admin/mencari-kerja/edit-data-mencari-kerja",
    element: <EditDataMencariKerja />,
  },
  {
    path: "/admin/usaha",
    element: <Usaha />,
  },
  {
    path: "/admin/usaha/edit-data-usaha",
    element: <EditDataUsaha />,
  },

  { path: "*", element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
