import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" relative flex items-center container mx-auto px-5 sm:px-7 py-3 lg:px-40">
      <div className="flex items-center w-full">
        <div className="logo mr-4">
          <img src="images/LOGO.png" alt="Logo" className="w-30 h-8" />
        </div>
        <nav className="hidden lg:flex ml-2">
          <ul className="flex items-center">
            <li className="mr-4">
              <a href="Beranda/" className="hover:underline text-md">
                Beranda
              </a>
            </li>
            <li className="mr-4">
              <a href="/menu" className="hover:underline text-md">
                Features
              </a>
            </li>
            <li className="mr-4">
              <a href="/contact" className="hover:underline text-md">
                Harga
              </a>
            </li>
            <li className="mr-4">
              <a href="/contact" className="hover:underline text-md">
                Solusi Bisnis
              </a>
            </li>
            <li className="mr-4">
              <a href="/contact" className="hover:underline text-md">
                FAQ
              </a>
            </li>
            <li className="mr-4">
              <a href="/contact" className="hover:underline text-md">
                Hubungi Kami
              </a>
            </li>
          </ul>
        </nav>
        <nav className="hidden lg:flex ml-auto">
          <ul className="flex items-center">
            <li className="mr-4">
              <a
                href="/login"
                className="text-white mr-4 hover:underline text-md"
              >
                Log In
              </a>
            </li>
            <li className="mr-4">
              <button className="bg-purple-800 text-white px-5 py-2 rounded-full mr-4 hover:bg-purple-700 text-md">
                Coba Gratis
              </button>
            </li>
            <li className="mr-4">
              <select className="bg-white px-2 py-1 text-md">
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

export default Header;
