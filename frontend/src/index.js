import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Bantuan,
  HalamanAwal,
  Login,
  NotFound,
  Registrasi,
  UserHome,
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

  { path: "*", element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
