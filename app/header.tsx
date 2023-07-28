import React from "react";

const Header = () => {
  return (
    <header className="relative flex items-center container mx-auto px-5 sm:px-7 py-3 lg:px-40">
      <div className="flex items-center w-full">
        <div className="logo mr-10">
          <img src="images/LOGO.png" alt="Logo" className="w-30 h-8" />
        </div>
        <nav className="hidden lg:flex ml-2">
          <ul className="flex space-x-6 justify-left">
            <div style={{ marginBottom: "0px" }}>
              <NavLink href="/beranda" className="text-lg font-bold text-black">
                Beranda
              </NavLink>{" "}
              <NavLink
                href="/features"
                className="text-lg font-bold text-black"
              >
                Fitur
              </NavLink>{" "}
              <NavLink href="/harga" className="text-lg font-bold text-black">
                Harga
              </NavLink>{" "}
              <NavLink href="/harga" className="text-lg font-bold text-black">
                Solusi Bisnis
              </NavLink>{" "}
              <NavLink href="/faq" className="text-lg font-bold text-black">
                FAQ
              </NavLink>{" "}
              <NavLink
                href="/hubungi-kami"
                className="text-lg font-bold text-black"
              >
                Hubungi Kami
              </NavLink>
            </div>
          </ul>
        </nav>
        <nav className="hidden lg:flex ml-auto">
          <ul className="flex items-center">
            <li className="mr-4">
              <button className="text-black hover:text-gray-800 text-lg font-bold">
                Log In
              </button>
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

const NavLink = ({ href, children, className }) => (
  <a href={href} className={`text-black hover:text-blue-200 mx-2 ${className}`}>
    {children}
  </a>
);

export default Header;
