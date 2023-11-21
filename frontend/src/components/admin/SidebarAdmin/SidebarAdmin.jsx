import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../../images/profile.png";
import cookie from "js-cookies"
const SidebarAdmin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarClass = isSidebarOpen ? "translate-x-0" : "-translate-x-full";

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdown(!isUserDropdownOpen);
  };

  const navigator = useNavigate();

  const handleClickLogout = (e) => {
    e.preventDefault()
    cookie.removeItem("token");
    cookie.removeItem("roles");
    navigator("/", { replace: true });
  };

  return (
    <div className="bg-black bg-opacity-70">
      <nav className="fixed top-0 z-50 w-full border-b bg-[#32353c] border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <span className="self-center md:text-4xl text-xl font-bold whitespace-nowrap text-[#828895]">
                <h1>InfoAdmin</h1>
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className={`flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 ${isUserDropdownOpen ? "bg-gray-100" : ""
                      }`}
                    aria-expanded={isUserDropdownOpen}
                    onClick={toggleUserDropdown}
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={img}
                      alt="user photo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <--------BATAS NAVBAR-------> */}

      {/* <------AWAL SIDEBAR-----> */}

      {/* vvvvvvvvvvv daerah sini cok TARO USE vvvvvvvvvv */}
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${sidebarClass} bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        {/* ^^^^^  DAERAH ATAS SINI COK TARO USE STATE ^^^^^ */}
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to={"/admin"}
                className="flex items-center p-2 rounded-lg text-[#828895] hover:text-[#5cc4fa] hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 transition duration-75 text-[#828895] group-hover:text-[#5cc4fa]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 rounded-lg text-[#828895] hover:text-[#5cc4fa] hover:bg-gray-700 group"
                to={"/admin/ubah-data-ijazah"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-wrench text-[#828895] group-hover:text-[#5cc4fa]"
                  viewBox="0 0 16 16"
                >
                  <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
                </svg>
                <span className="ml-3 text">Ubah Data Ijazah</span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 rounded-lg text-[#828895] hover:text-[#5cc4fa] hover:bg-gray-700 group"
                to={"/admin/daftar-user"}
              >
                <svg
                  className="w-5 h-5 text-[#828895] group-hover:text-[#5cc4fa]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>

                <span className="ml-3 text">Daftar User</span>
              </Link>
            </li>

            {/* iniii */}
            <li>
              <button
                type="button"
                className={`flex items-center w-full p-2 text-base text-[#828895] hover:text-[#5cc4fa] transition duration-75 rounded-lg group hover:bg-gray-700   ${isDropdownOpen ? "bg-gray-700" : ""
                  }`}
                onClick={toggleDropdown}
                aria-controls="dropdown-example"
                aria-expanded={isDropdownOpen}
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
                  />
                </svg>

                <span className="flex-1 ml-3 text-left whitespace-nowrap">
                  Tabel
                </span>
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className={` ${isDropdownOpen ? "" : "hidden"}`}>
                <ul id="dropdown-example" className="py-2 space-y-2">
                  <li>
                    <Link
                      className="flex items-center w-full p-2 text-[#828895] transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-[#5cc4fa]"
                      to={"/admin/kerja"}
                    >
                      Kerja
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center w-full p-2 text-[#828895] transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-[#5cc4fa]"
                      to={"/admin/kerja-dan-kuliah"}
                    >
                      Kerja dan Kuliah
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center w-full p-2 text-[#828895] transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-[#5cc4fa]"
                      to={"/admin/kuliah"}
                    >
                      Kuliah
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center w-full p-2 text-[#828895] transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-[#5cc4fa]"
                      to={"/admin/mencari-kerja"}
                    >
                      Mencari Kerja
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center w-full p-2 text-[#828895] transition duration-75 rounded-lg pl-11 group hover:bg-gray-700 hover:text-[#5cc4fa]"
                      to={"/admin/usaha"}
                    >
                      Usaha
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <button
                className="flex items-center p-2 w-full rounded-lg text-[#828895] hover:text-[#5cc4fa] hover:bg-gray-700 group"
                onClick={handleClickLogout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text">Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      {/* <------BATAS SIDEBAR------> */}
    </div>
  );
};

export default SidebarAdmin;
