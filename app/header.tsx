import React from "react";
import { FaChevronDown } from "react-icons/fa";
const Header = () => {
  return (
    <header className=" relative flex items-center container mx-auto px-5 sm:px-7 py-3 lg:px-40">
      <div className="flex items-center w-full">
        <div className="logo mr-4">
          <img src="images/LOGO.png" alt="Logo" className="w-40 h-8" />
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex items-center">
            <li className="mr-2 md:mb-0">
              <NavLink href="/beranda" className="text-lg  text-black">
                Beranda
              </NavLink>{" "}
            </li>
            <li className="mr-2 md:mb-0">
              <NavLink href="/features" className="text-lg  text-black">
                Fitur
              </NavLink>{" "}
            </li>
            <li className="mr-2 md:mb-0">
              <NavLink href="/harga" className="text-lg  text-black">
                Harga
              </NavLink>{" "}
            </li>
            <li className="mr-2 md:mb-0">
              <NavLink href="/harga" className="text-lg  text-black">
                Solusi Bisnis{" "}
                <span className="group inline-block">
                  <FaChevronDown
                    className="inline-block ml-1 text-black group-hover:text-blue-500"
                    size={20}
                  />
                </span>
              </NavLink>{" "}
            </li>
            <li className="mr-2 md:mb-0">
              <NavLink href="/faq" className="text-lg text-black">
                FAQ
              </NavLink>{" "}
            </li>
            <li className="mr-2 md:mb-0">
              <NavLink href="/hubungi-kami" className="text-lg  text-black">
                Hubungi Kami
              </NavLink>
            </li>
          </ul>
        </nav>

        <nav className="hidden lg:flex ml-auto">
          <ul className="flex items-center">
            <li className="mr-4">
              <NavLink href="/login" className="text-black">
                <button className="text-black text-lg underline">Log In</button>
              </NavLink>
            </li>
            <li className="mr-2">
              <NavLink href="/login" className="">
                <button className="bg-purple-900 text-white px-5 py-2 rounded-full hover:bg-purple-700 text-lg">
                  Coba Gratis
                </button>
              </NavLink>
            </li>
            <li className="mr-2">
              <select className="bg-white ml-4 py-1 text-lg">
                <option value="id">Indonesia</option>
                <option value="en">English</option>
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
