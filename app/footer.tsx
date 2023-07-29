import React from "react";
import Link from "next/link";

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
          <Link href="/beranda" className="mr-4 text-white hover:text-gray-500">
            Beranda
          </Link>{" "}
          <Link
            href="/features"
            className="mr-4 text-white hover:text-gray-500"
          >
            Fitur
          </Link>{" "}
          <Link href="/harga" className="mr-4 text-white hover:text-gray-500">
            Harga
          </Link>{" "}
          <Link href="/faq" className="mr-4 text-white hover:text-gray-500">
            FAQ
          </Link>{" "}
          <Link
            href="/hubungi-kami"
            className="mr-4 text-white hover:text-gray-500"
          >
            Hubungi Kami
          </Link>
        </div>
      </nav>
      <hr style={{ borderTop: "1px solid white", margin: "16px 0" }} />
      <p className="text-center text-sm">&copy; Copyright by JovaResto</p>
    </footer>
  );
};

export default Footer;
