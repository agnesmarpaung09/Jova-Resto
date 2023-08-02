"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

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
          <FaChevronDown
            className={`inline-block ml-1 text-black group-hover:text-gray-500 ${
              isDropdownOpen ? "transform rotate-180" : ""
            }`}
            size={20}
          />
        </span>
      </button>
      {isDropdownOpen && (
        <ul
          className="absolute top-full left-0 bg-white border border-gray-200 py-2 mt-1 z-10"
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <li>
            <Link
              href="/solusi-1"
              className="block px-4 py-2 text-black hover:text-gray-500"
            >
              UMKM
            </Link>
          </li>
          <li>
            <Link
              href="/solusi-2"
              className="block px-4 py-2 text-black hover:text-gray-500"
            >
              Restaurant
            </Link>
          </li>
          <li>
            <Link
              href="/solusi-2"
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
