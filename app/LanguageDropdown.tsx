"use client";
import React, { useState } from "react";

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("id");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.dataset.value);
    setDropdownOpen(false);
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative ml-4 py-1 text-lg">
      <div
        className="relative cursor-pointer flex items-center"
        onClick={handleDropdownToggle}
      >
        <img
          src={
            selectedLanguage === "id"
              ? "images/indonesia.png"
              : "images/english.png"
          }
          alt={selectedLanguage === "id" ? "Indonesia" : "Inggris"}
          className="w-6 h-4 mr-2"
        />
        {isDropdownOpen && (
          <span className="mr-2">
            {selectedLanguage === "id" ? "ID" : "EN"}
          </span>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 inline ${
            isDropdownOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div
        className={`absolute left-0 top-8 w-full ${
          isDropdownOpen ? "" : "hidden"
        }`}
      >
        <ul className="bg-white border rounded-lg shadow-lg">
          <li
            data-value="id"
            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
              selectedLanguage === "id" ? "font-bold" : ""
            }  flex items-center`}
            onClick={handleLanguageChange}
          >
            <img
              src="images/indonesia.png"
              alt="Indonesia"
              className="w-6 h-4 mr-2"
            />
            ID
          </li>
          <li
            data-value="en"
            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
              selectedLanguage === "en" ? "font-bold" : ""
            } flex items-center`}
            onClick={handleLanguageChange}
          >
            <img
              src="images/english.png"
              alt="Inggris"
              className="w-6 h-4 mr-2"
            />
            EN
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LanguageDropdown;
