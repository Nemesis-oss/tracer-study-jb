import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cookie from "js-cookie"

const Navbar = () => {
  const navigator = useNavigate();

  const navigate = [
    { name: "Home", to: "/user/" },
    { name: "Kuliah", to: "/user/kuliah" },
    { name: "Kuliah Kerja", to: "/user/kuliah-kerja" },
    { name: "Kerja", to: "/user/kerja" },
    { name: "Mencari Kerja", to: "/user/mencari-kerja" },
    { name: "Usaha", to: "/user/usaha" },
    { name: "Profile", to: `/user/profile` },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickLogout = (e) => {
    e.preventDefault()
    cookie.remove("token");
    cookie.remove("roles");
    navigator("/", { replace: true });
  };

  return (
    <nav className="px-4 md:px-24 bg-[#000000] fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen flex flex-wrap items-center justify-end md:justify-center mx-auto py-2 md:py-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-md text-white rounded-lg md:hidden hover:bg-white hover:text-black focus:ring-2 focus:ring-white "
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 "
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
            />
          </svg>
        </button>
        <div className={`${isMenuOpen ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {navigate.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="text-white rounded-md px-3 py-2 text-sm font-medium transition-colors duration-500 hover:text-cyan-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <button onClick={handleClickLogout} className="ring-1 rounded-md bg-black text-white lg:w-16 hover:bg-white hover:text-black ring-white">
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
