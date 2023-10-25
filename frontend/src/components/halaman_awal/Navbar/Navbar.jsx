import React, { useState } from "react";
import logo from "../../images/logoJB.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-gradient-to-r to-transparent z-30 transition-all duration-300 ease-in-out brightness ${
        isMenuOpen ? "md:bg-transparent" : ""
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="" />
          <span className="self-center font-semibold whitespace-nowrap dark:text-white block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700">
            SMA KOLOSE DE BRITTO
          </span>
        </a>
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
              <a
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700"
                aria-current="page"
              >
                HALAMAN UTAMA
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700"
              >
                LOGIN
              </a>
            </li>
            <li>
              <a
                href="/registrasi"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700"
              >
                REGISTRASI
              </a>
            </li>
            <li>
              <a
                href="/bantuan"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-700 md:border-0 md:hover-text-blue-700 md:p-0 dark:text-white md:dark:hover-text-blue-500 dark:hover-bg-gray-700  "
              >
                BANTUAN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
