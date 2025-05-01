import React from "react";
import { NavLink } from "react-router";
import logoImage from "./assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 border-gray-200 font-inter bg-white z-30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-blue-900">
        <NavLink to="/" className="flex items-center">
          <img className="w-28" src={logoImage} alt="" />
        </NavLink>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-gray-500 bg-blue-700 rounded-sm md:bg-transparent md:text-blue-900 md:p-0"
                aria-current="page"
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="layanan"
                className="block py-2 px-3 text-gray-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0"
              >
                Layanan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="tentang"
                className="block py-2 px-3 text-gray-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0"
              >
                Tentang
              </NavLink>
            </li>
            <li>
              <NavLink
                to="kontak"
                className="block py-2 px-3 text-gray-500 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0"
              >
                Kontak
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
