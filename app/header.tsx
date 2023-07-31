"use client";
import React from "react";
import DropdownMenu from "./DropDownMenu";
import Link from "next/link";

const Header = () => {
  return (
    <div className={"container mx-auto items-center border-b-2 px-6 py-2 h-20"}>
      <div className="flex items-center w-full sm:flex">
        <div className="logo mr-6">
          <img src="images/LOGO.png" alt="Logo" className="w-40 h-8" />
        </div>
        <nav className="hidden sm:flex">
          <ul className="flex items-center">
            <li className="mr-6 md:mb-0">
              <Link
                href="/beranda"
                className="text-lg text-black hover:text-gray-500"
              >
                Beranda
              </Link>{" "}
            </li>
            <li className="mr-6 md:mb-0">
              <Link
                href="/features"
                className="text-lg  text-black hover:text-gray-500"
              >
                Features
              </Link>{" "}
            </li>
            <li className="mr-6 md:mb-0">
              <Link
                href="/harga"
                className="text-lg  text-black hover:text-gray-500"
              >
                Harga
              </Link>{" "}
            </li>
            <li className="mr-6 md:mb-0">
              <DropdownMenu />
            </li>
            <li className="mr-6 md:mb-0">
              <Link
                href="/faq"
                className="text-lg text-black hover:text-gray-500"
              >
                FAQ
              </Link>{" "}
            </li>
            <li className="mr-6 md:mb-0">
              <Link
                href="/hubungi-kami"
                className="text-lg  text-black hover:text-gray-500"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="hidden sm:block lg:flex ml-auto">
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
              <select className="bg-white ml-4 py-1 text-lg ">
                <option value="id">Indonesia</option>
                <option value="en">English</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
