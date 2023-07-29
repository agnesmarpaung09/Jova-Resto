import React from "react";
import DropdownMenu from "./DropDownMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" relative flex items-center container mx-auto px-5 sm:px-7 py-3 lg:px-40">
      <div className="flex items-center w-full">
        <div className="logo mr-4">
          <img src="images/LOGO.png" alt="Logo" className="w-40 h-8" />
        </div>
        <nav className="hidden lg:flex">
          <ul className="flex items-center">
            <li className="mr-4 md:mb-0">
              <Link
                href="/beranda"
                className="text-lg text-black hover:text-gray-500"
              >
                Beranda
              </Link>{" "}
            </li>
            <li className="mr-4 md:mb-0">
              <Link
                href="/features"
                className="text-lg  text-black hover:text-gray-500"
              >
                Features
              </Link>{" "}
            </li>
            <li className="mr-4 md:mb-0">
              <Link
                href="/harga"
                className="text-lg  text-black hover:text-gray-500"
              >
                Harga
              </Link>{" "}
            </li>
            <li className="mr-4 md:mb-0">
              <DropdownMenu />
            </li>
            <li className="mr-4 md:mb-0">
              <Link
                href="/faq"
                className="text-lg text-black hover:text-gray-500"
              >
                FAQ
              </Link>{" "}
            </li>
            <li className="mr-4 md:mb-0">
              <Link
                href="/hubungi-kami"
                className="text-lg  text-black hover:text-gray-500"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="hidden lg:flex ml-auto">
          <ul className="flex items-center">
            <img
              src="images/login.png" // Replace with the path to your login image
              alt="Login"
              className="w-4 h-4 mr-2"
            />
            <li className="mr-4">
              <Link href="/login" className="text-black">
                <button className="text-black text-lg underline  hover:text-gray-500">
                  Log In
                </button>
              </Link>
            </li>
            <li className="ml-2">
              <Link href="/login" className="">
                <button className="bg-purple-900 text-white px-5 py-2 rounded-full hover:bg-purple-700 text-lg">
                  Coba Gratis
                </button>
              </Link>
            </li>
            <li className="ml-2">
              <select className="bg-white ml-4 py-1 text-lg  hover:text-gray-500">
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

export default Header;
