"use client";
import React, { useState } from "react";
import DropdownMenu from "./DropDownMenu";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import LanguageDropdown from "./LanguageDropdown";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const params = usePathname();
  console.log(params);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <Popover>
        <div className="container mx-auto items-center px-6 py-3 h-20">
          <div className="flex items-center w-full md:flex">
            <div className="logo mr-4">
              <img
                src={
                  params === "/Restaurant" || params === "/CoffeeShop"
                    ? "/images/LOGO2.png"
                    : "/images/LOGO.png"
                }
                alt="Logo"
                className="w-40 h-8 md:w-auto md:h-10 md:text-sm"
              />
            </div>
            <nav className="hidden md:flex">
              <ul className="flex items-center">
                <li className="mr-4 md:mb-0">
                  <Link
                    href="#home"
                    className={`text-lg ${
                      params === "/Restaurant" || params === "/CoffeeShop"
                        ? "text-white"
                        : "text-black"
                    } hover:text-gray-500`}
                  >
                    Beranda
                  </Link>{" "}
                </li>
                <li className="mr-4 md:mb-0">
                  <Link
                    href="#features"
                    className={`text-lg ${
                      params === "/Restaurant" || params === "/CoffeeShop"
                        ? "text-white"
                        : "text-black"
                    } hover:text-gray-500`}
                  >
                    Features
                  </Link>{" "}
                </li>
                <li className="mr-4 md:mb-0">
                  <Link
                    href="#harga"
                    className={`text-lg ${
                      params === "/Restaurant" || params === "/CoffeeShop"
                        ? "text-white"
                        : "text-black"
                    } hover:text-gray-500`}
                  >
                    Harga
                  </Link>{" "}
                </li>
                <li className="mr-4 md:mb-0">
                  <DropdownMenu />
                </li>
                <li className="mr-4 md:mb-0">
                  <Link
                    href="#FAQ"
                    className={`text-lg ${
                      params === "/Restaurant" || params === "/CoffeeShop"
                        ? "text-white"
                        : "text-black"
                    } hover:text-gray-500`}
                  >
                    FAQ
                  </Link>{" "}
                </li>
                <li className="mr-4 md:mb-0">
                  <Link
                    href="#hubungi-kami"
                    className={`text-lg ${
                      params === "/Restaurant" || params === "/CoffeeShop"
                        ? "text-white"
                        : "text-black"
                    } hover:text-gray-500`}
                  >
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex grow items-center justify-end md:hidden">
              <Popover.Button
                className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400
          hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Overlay className="fixed inset-0 bg-black opacity-30 z-40"></Popover.Overlay>
            <Transition
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-50 right-1 top-10 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
              >
                <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                  <div className="px-4 pt-3 pb-6">
                    <div className="-mr-2"></div>
                    <div className="mt-6">
                      <nav className="grid gap-y-5">
                        <Link
                          href="#home"
                          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-1 text-sm text-gray-700"
                        >
                          Beranda
                        </Link>
                        <Link
                          href="#features"
                          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-1 text-sm text-gray-700"
                        >
                          Features
                        </Link>
                        <Link
                          href="#harga"
                          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-1 text-sm text-gray-700"
                        >
                          Harga
                        </Link>
                        <div id="/solusi bisnis" className="relative">
                          <button
                            className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-1 text-sm text-gray-700"
                            onClick={handleDropdownToggle}
                          >
                            Solusi Bisnis{" "}
                            <span className="group inline-block">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-4 w-4 inline`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="black"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 9l-7 7-7-7"
                                />
                              </svg>
                            </span>
                          </button>
                          {isDropdownOpen && (
                            <ul
                              className="absolute top-full left-0 bg-white border border-gray-200 py-2 mt-2 z-10  rounded-lg text-md w-36"
                              onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                              <li>
                                <Link
                                  href="/"
                                  className="block px-4 py-1 text-sm text-black hover:text-gray-500"
                                >
                                  UMKM
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/Restaurant"
                                  className="block px-4 py-1 text-sm text-black hover:text-gray-500"
                                >
                                  Restoran
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/CoffeeShop"
                                  className="block px-4 py-1 text-sm text-black hover:text-gray-500"
                                >
                                  Coffee Shop
                                </Link>
                              </li>
                            </ul>
                          )}
                        </div>

                        <Link
                          href="#FAQ"
                          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-1 text-sm text-gray-700"
                        >
                          FAQ
                        </Link>
                        <Link
                          href="#hubungi-kami"
                          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-1 text-sm text-gray-700"
                        >
                          Hubungi Kami
                        </Link>
                        <Link
                          href="/"
                          className="focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 block px-4 py-1 text-sm underline text-gray-700"
                        >
                          Log In
                        </Link>
                        <Link href="/login" className="">
                          <button className="bg-purple-900 text-white px-5 py-1 rounded-full hover:bg-purple-700 text-sm">
                            Coba Gratis
                          </button>
                        </Link>
                        <ul className=" px-3 py-1 rounded-full hover:bg-black shadow-lg w-24 mt-2">
                          <LanguageDropdown />
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>

            <nav className="lg:block hidden sm:block ml-auto">
              <ul className="flex items-center">
                <img
                  src={
                    params === "/Restaurant" || params === "/CoffeeShop"
                      ? "/images/login-white.png"
                      : "/images/login.png"
                  }
                  alt="Login"
                  className="w-4 h-4 mr-2 hidden md:block"
                />

                <li className="mr-4 hidden md:block">
                  <Link href="/login" className="text-black">
                    <button
                      className={`text-lg underline ${
                        params === "/Restaurant" || params === "/CoffeeShop"
                          ? "text-white"
                          : "text-black"
                      } hover:text-gray-500`}
                    >
                      Log In
                    </button>
                  </Link>
                </li>
                <li className="ml-2 hidden md:block">
                  <Link href="/login" className="">
                    <button className="bg-purple-900 text-white px-5 py-2 rounded-full hover:bg-purple-700 text-lg">
                      Coba Gratis
                    </button>
                  </Link>
                </li>
                <li className="hidden md:block">
                  <LanguageDropdown />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Popover>
    </header>
  );
};

export default Header;
