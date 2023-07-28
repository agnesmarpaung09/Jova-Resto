import React from "react";
import "./globals.css";

import { Inter } from "next/font/google";

import Home from "./page";
import Header from "./header";
import MainContent from "./MainContent";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
