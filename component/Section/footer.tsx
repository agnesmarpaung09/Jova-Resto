import React from "react";

const Footer = () => {
  return (
    <footer className="bg-cyan-600 py-4 text-white">
      <nav className="flex items-center justify-between px-4 mx-auto max-w-7xl">
        <div>
          <img
            src="/images/LOGO2.png"
            className="h-10 mr-6 font-bold text-3xl"
            alt="Logo"
          />
        </div>
        <div style={{ marginBottom: "0px" }}>
          <NavLink href="/beranda" className="text-white">
            Beranda
          </NavLink>{" "}
          <NavLink href="/features" className="text-white">
            Fitur
          </NavLink>{" "}
          <NavLink href="/harga" className="text-white">
            Harga
          </NavLink>{" "}
          <NavLink href="/faq" className="text-white">
            FAQ
          </NavLink>{" "}
          <NavLink href="/hubungi-kami" className="text-white">
            Hubungi Kami
          </NavLink>
        </div>
      </nav>
      <hr style={{ borderTop: "1px solid white", margin: "16px 0" }} />
      <p className="text-center text-sm">&copy; Copyright by JovaResto</p>
    </footer>
  );
};

const NavLink = ({ href, children, className }) => (
  <a href={href} className={`text-black hover:text-blue-200 mx-2 ${className}`}>
    {children}
  </a>
);

export default Footer;
