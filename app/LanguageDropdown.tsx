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
    <div className="relative ml-4 text-lg">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 inline"
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
      {isDropdownOpen && (
        <div className="absolute left-0 top-8 w-full">
          <ul className="bg-white border rounded-lg shadow-lg w-24 mt-2">
            <li
              data-value="id"
              className={`px-4 py-2 cursor-pointer hover:text-gray-500 ${
                selectedLanguage === "id" ? "" : ""
              } flex items-center`}
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
              className={`px-4 py-2 cursor-pointer hover:text-gray-500 ${
                selectedLanguage === "en" ? "" : ""
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
      )}
    </div>
  );
};

export default LanguageDropdown;
