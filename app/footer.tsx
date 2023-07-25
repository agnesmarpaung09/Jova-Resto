import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-600 py-4 text-gray-200">
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-4 lg:px-40">
          <div className="pr-4">
            <img src="/images/LOGO.png" alt="Logo" className="w-13 h-6" />
          </div>
          <nav>
            <ul className="flex space-x-5">
              <li>
                <a href="/home" className="hover:underline hover:text-white">
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="hover:underline hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a href="/price" className="hover:underline hover:text-white">
                  Harga
                </a>
              </li>
              <li>
                <a href="/FAQ" className="hover:underline hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline hover:text-white">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <hr className="border-t-2 border-white my-1" />
        <div className="text-xs text-center">&copy; copyright by jovaresto</div>
      </div>
    </footer>
  );
};

export default Footer;
