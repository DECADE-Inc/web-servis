import React from "react";
import { NavLink } from "react-router";
import logoImage from "./assets/logo.png";

export default function Navbar() {
  const activeClass =
    "block rounded-sm bg-primary px-3 py-2 font-bold text-white md:bg-transparent md:p-0 md:text-blue-900";
  const inactiveClass =
    "block rounded-sm px-3 py-2 text-gray-500 hover:bg-gray-100 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-gray-500";

  const activeClassMobile =
    "block w-full md:block md:w-auto";
  const inactiveClassMobile =
    "hidden w-full md:block md:w-auto";

  const [isMobile, setIsMobile] = React.useState(false);
  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="font-inter fixed top-0 right-0 left-0 z-30 border-gray-300 bg-white shadow-md">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4 text-blue-900">
        <NavLink to="/" className="flex items-center">
          <img className="w-28" src={logoImage} alt="" />
        </NavLink>

        <button
          onClick={handleToggle}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
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
        <div
          className={isMobile ? activeClassMobile : inactiveClassMobile}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
                end
                aria-current="page"
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="layanan"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Layanan
              </NavLink>
            </li>
            <li>
              <NavLink
                to="tentang"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
              >
                Tentang
              </NavLink>
            </li>
            <li>
              <NavLink
                to="kontak"
                className={({ isActive }) =>
                  isActive ? activeClass : inactiveClass
                }
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
