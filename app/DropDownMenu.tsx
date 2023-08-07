"use client";
import React, { useState } from "react";
import Link from "next/link";
import Restaurant from "./Restaurant/page"; // Impor komponen Restaurant
import CoffeeShop from "./CoffeeShop/page";

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        className="text-lg text-black hover:text-gray-500 focus:outline-none "
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
              className="block px-4 py-2 text-black hover:text-gray-500"
            >
              UMKM
            </Link>
          </li>
          <li>
            <Link
              href="/Restaurant"
              className="block px-4 py-2 text-black hover:text-gray-500"
            >
              Restaurant
            </Link>
          </li>
          <li>
            <Link
              href="/CoffeeShop"
              className="block px-4 py-2 text-black hover:text-gray-500"
            >
              Coffee Shop
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
