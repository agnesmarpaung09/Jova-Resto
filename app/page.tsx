import React from "react";
import Header from "./header";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center w-full h-full"
        style={{
          backgroundImage: `url('/images/HOME1.png')`,
        }}
      ></div>
      <Header />
      <div className="absolute inset-0 flex">
        <div className="text-left mx-4 md:mx-16 lg:px-48 py-10 mt-24">
          <h1 className="text-2xl font-bold mb-4 text-black">UMKM</h1>
          <h2 className="text-5xl font-semibold mb-2 text-black">
            Aplikasi kasir restoran yang
            <br />
            menjadi solusi modern untuk
            <br className="mt-2" />
            menghadapi tantangan
            <br className="mt-2" />
            bisnis kuliner
            <br className="mt-2" />
          </h2>
          <span className="text-sm text-black">
            Jova Resto Membantu Untuk Memaksimalkan Potensi Usahamu.
          </span>
          <button className="block mt-6 px-12 py-2 bg-purple-900 text-white rounded-full hover:bg-purple-700">
            Hubungi Kami
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
