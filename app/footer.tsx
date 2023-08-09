import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-cyan-600 py-4 text-white">
      <nav className=" flex flex-col items-left md:flex-row md:items-center justify-between px-8 lg:px-20 xl:px-4 mx-auto max-w-7xl">
        <div>
          <img
            src="/images/LOGO2.png"
            className=" h-12 w-54 md:h-6 lg:h-10 lg:mr-3 font-bold text-3xl"
            alt="Logo"
          />
        </div>
        <div className="flex mt-4 ">
          <div className="flex flex-col md:flex-row">
            <Link
              href="#home"
              className="px-2 text-white text-xl  md:text-sm hover:text-gray-500 sm:px-0 sm:mr-4"
            >
              Beranda
            </Link>{" "}
            <Link
              href="#first-section"
              className="px-2 text-white text-xl md:text-sm hover:text-gray-500 sm:px-0 sm:mr-4"
            >
              Features
            </Link>{" "}
            <Link
              href="#second-section"
              className="px-2 text-white text-xl  md:text-sm hover:text-gray-500 sm:px-0 sm:mr-4"
            >
              Harga
            </Link>{" "}
            <Link
              href="#third-section"
              className="px-2 text-white text-xl md:text-sm hover:text-gray-500 sm:px-0 sm:mr-4"
            >
              FAQ
            </Link>{" "}
            <Link
              href="#fourth-section"
              className="px-2 text-white text-xl  md:text-sm hover:text-gray-500 sm:px-0"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </nav>
      <hr style={{ borderTop: "1px solid white", margin: "16px 0" }} />
      <p className=" text-left md:text-center text-md md:text-xs px-8">
        &copy; Copyright by JovaResto
      </p>
    </footer>
  );
};

export default Footer;
