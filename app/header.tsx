"use client";
import React from "react";
import DropdownMenu from "./DropDownMenu";
import Link from "next/link";
import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { useMediaQuery } from "react-responsive";

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <Popover>
      <div
        className={"container mx-auto items-center border-b-2 px-6 py-2 h-20"}
      >
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
          <div className="flex grow items-center justify-end sm:hidden">
            <Popover.Button
              className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
          hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>

          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div className="-mr-2">
                    <Popover.Button
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
          hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    >
                      <span className="sr-only">Close menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link
                      href="/beranda"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-2 text-sm text-gray-700"
                    >
                      Beranda
                    </Link>
                    <Link
                      href="/features"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-2 text-sm text-gray-700"
                    >
                      Features
                    </Link>
                    <Link
                      href="/harga"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-2 text-sm text-gray-700"
                    >
                      Harga
                    </Link>
                    <Link
                      href="/solusi bisnis"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-2 text-sm text-gray-700"
                    >
                      Solusi Bisnis
                    </Link>
                    <Link
                      href="/faq"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-2 text-sm text-gray-700"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/hubungi kami"
                      className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-2 text-sm text-gray-700"
                    >
                      Hubungi Kami
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>

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
    </Popover>
  );
};

export default Header;
