import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AdminHome,
  Bantuan,
  HalamanAwal,
  KerjaUser,
  KerjaKuliahUser,
  KuliahUser,
  Login,
  LupaPassword,
  MencariKerjaUser,
  NotFound,
  Profile,
  Registrasi,
  UsahaUser,
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
  ResetPassword,
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
    element: <KuliahUser />,
  },
  {
    path: "/user/kuliah-kerja",
    element: <KerjaKuliahUser />,
  },
  {
    path: "/user/kerja",
    element: <KerjaUser />,
  },
  {
    path: "/user/mencari-kerja",
    element: <MencariKerjaUser />,
  },
  {
    path: "/user/usaha",
    element: <UsahaUser />,
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
    path: "/user/profile/edit-kuliah/:userId",
    element: <EditKuliah />,
  },
  {
    path: "/user/profile/edit-kerja/:userId",
    element: <EditKerja />,
  },
  {
    path: "/user/profile/edit-kuliah-kerja/:userId",
    element: <EditKuliahKerja />,
  },
  {
    path: "/user/profile/edit-mencari-kerja/:userId",
    element: <EditMencariKerja />,
  },
  {
    path: "/user/profile/edit-usaha/:userId",
    element: <EditUsaha />,
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
    path: "/admin/ubah-data-ijazah/edit-data-ijazah/:id",
    element: <EditDataIjazah />,
  },
  {
    path: "/admin/daftar-user",
    element: <DaftarUser />,
  },
  {
    path: "/admin/daftar-user/edit-data-user/:id",
    element: <EditDataUser />,
  },
  {
    path: "/admin/kerja",
    element: <Kerja />,
  },
  {
    path: "/admin/kerja/edit-data-kerja/:userId",
    element: <EditDataKerja />,
  },
  {
    path: "/admin/kerja-dan-kuliah",
    element: <KerjaDanKuliah />,
  },
  {
    path: "/admin/kerja-dan-kuliah/edit-data-kerja-dan-kuliah/:userId",
    element: <EditDataKerjaDanKuliah />,
  },
  {
    path: "/admin/kuliah",
    element: <Kuliah />,
  },
  {
    path: "/admin/kuliah/edit-data-kuliah/:userId",
    element: <EditDataKuliah />,
  },
  {
    path: "/admin/mencari-kerja",
    element: <MencariKerja />,
  },
  {
    path: "/admin/mencari-kerja/edit-data-mencari-kerja/:userId",
    element: <EditDataMencariKerja />,
  },
  {
    path: "/admin/usaha",
    element: <Usaha />,
  },
  {
    path: "/admin/usaha/edit-data-usaha/:userId",
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
