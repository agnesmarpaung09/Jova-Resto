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
          <Link href="/beranda" className="text-white">
            Beranda
          </Link>{" "}
          <Link href="/features" className="text-white">
            Fitur
          </Link>{" "}
          <Link href="/harga" className="text-white">
            Harga
          </Link>{" "}
          <Link href="/faq" className="text-white">
            FAQ
          </Link>{" "}
          <Link href="/hubungi-kami" className="text-white">
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
