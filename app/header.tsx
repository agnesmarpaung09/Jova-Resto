import React from "react";
import { FaChevronDown } from "react-icons/fa"; // Impor ikon panah dari Heroicons

const Header = () => {
  return (
    <header className="relative flex items-center container ml-16 px-5 sm:px-7 py-3 lg:px-40">
      <div className="flex items-center">
        <div className="logo mr-8">
          <img src="images/LOGO.png" alt="Logo" className="w-40 h-8" />
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6 justify-left">
            <li className="mb-2 md:mb-0">
              <NavLink
                href="/beranda"
                className="text-lg font-semibold text-black"
              >
                Beranda
              </NavLink>{" "}
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink
                href="/features"
                className="text-lg font-semibold text-black"
              >
                Fitur
              </NavLink>{" "}
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink
                href="/harga"
                className="text-lg font-semibold text-black"
              >
                Harga
              </NavLink>{" "}
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink
                href="/harga"
                className="text-lg font-semibold text-black"
              >
                Solusi Bisnis{" "}
                <span className="group inline-block">
                  <FaChevronDown
                    className="inline-block ml-1 text-black group-hover:text-blue-500"
                    size={20}
                  />
                </span>
              </NavLink>{" "}
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink href="/faq" className="text-lg font-semibold text-black">
                FAQ
              </NavLink>{" "}
            </li>
            <li className="mb-2 md:mb-0">
              <NavLink
                href="/hubungi-kami"
                className="text-lg font-semibold text-black"
              >
                Hubungi Kami
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="hidden lg:flex ml-auto">
          <ul className="flex items-center">
            <li className="ml-4">
              <button className="text-black text-lg font-semibold underline">
                Log In
              </button>
            </li>
            <li className="ml-4">
              <button className="bg-purple-800 text-white px-5 py-2 rounded-full mr-4 hover:bg-purple-700 text-md">
                Coba Gratis
              </button>
            </li>
            <li className="ml-4">
              <select className="bg-white ml-4 py-1 text-md">
                <option value="id">ID</option>
                <option value="en">EN</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ href, children, className }) => (
  <a href={href} className={`text-black hover:text-blue-200 mx-2 ${className}`}>
    {children}
  </a>
);

export default Header;
