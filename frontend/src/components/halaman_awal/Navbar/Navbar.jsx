import React, { useState } from "react";
import logo from "../../../images/logoJB.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out ${
        isMenuOpen ? "bg-black bg-opacity-70" : "bg-black bg-opacity-70"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <Link to={"/"} className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="" />
          <span className="self-center font-semibold whitespace-nowrap dark:text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-cyan-500 md:border-0 ">
            SMA KOLESE DE BRITTO
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`w-5 h-5 transition-transform transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isMenuOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-700 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700">
            <li>
              <Link
                to={"/"}
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-cyan-500 md:border-0 md:p-0"
                aria-current="page"
              >
                HALAMAN UTAMA
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-cyan-500 md:border-0 md:p-0"
              >
                LOGIN
              </Link>
            </li>
            <li>
              <Link
                to={"/registrasi"}
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-cyan-500 md:border-0 md:p-0"
              >
                REGISTRASI
              </Link>
            </li>
            <li>
              <Link
                to={"/bantuan"}
                className="block py-2 pl-3 pr-4 text-white rounded hover:text-cyan-500 md:border-0 md:p-0"
              >
                BANTUAN
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
