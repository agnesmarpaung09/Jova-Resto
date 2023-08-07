import React from "react";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex item-center container mx-auto px-5 sm:px-7 pt-32 pb-16 lg:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/HOME1.png')`,
          }}
        ></div>
        <div className="absolute inset-0 flex">
          <div
            id="home"
            className="text-left mx-6 lg:px-12 xl:px-28 2xl:px-48 py-10 mt-24 "
          >
            <h1 className=" font-semibold text-black text-xl sm:text-2xl lg:text-3xl mb-4 ">
              UMKM
            </h1>
            <h2 className="text-black font-semibold text-3xl sm:text-4xl lg:text-5xl mb-3 w-full md:w-[500px] lg:w-[700px]">
              Aplikasi kasir restoran yang menjadi solusi modern untuk
              menghadapi tantangan bisnis kuliner
            </h2>
            <span className="text-md lg:text-lg text-black">
              Jova Resto Membantu Untuk Memaksimalkan Potensi Usahamu.
            </span>
            <button className="block bg-purple-900 text-white rounded-full hover:bg-purple-700 mt-6 px-8 lg:px-14 py-2">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-200 to-white ">
        <div className="container mx-auto px-8 lg:px-20 xl:px-36 2xl:px-28">
          <img
            src="/images/background.png"
            alt=""
            className="mb-4 ml-[-50px] max-w-[200px] lg:ml-[-70px] lg:max-w-[280px]"
          />
          <div className="grid sm:grid-cols-2 gap-1 items-center lg:mt-10">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/images/UMKM1.PNG"
                alt=""
                className="rounded-2xl w-80 h-48 lg:w-5/6 lg:h-full "
              />
            </div>
            <div className="">
              <h1 className="font-bold mt-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl  text-center sm:text-left sm:ml-6 ">
                Membantu anda dalam hal <br />
                pencatatan stock, laporan <br className="mt-4" />
                keuangan dan lain lain. <br className="mt-4" />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 px-8  lg:mt-40  ">
        <h1 className="text-2xl lg:text-4xl 2xl:text-5xl font-bold">
          Jova Resto hadir Untuk UMKM
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 items-center px-8  mt-20">
        <div id="second-section" className="lg:pl-12 xl:pl-28 2xl:pl-40">
          <h1 className="text-2xl lg:text-4xl xl:text-4xl   2xl:text-5xl font-bold mb-4">
            Kelola Bisnis Anda Baik <br />
            Offline Maupun Online <br className="mt-2" />
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify">
            Sinkronisasi Otomatis Salah Satu Keunggulan JovaResto Adalah
            Kemampuannya Untuk Bekerja Secara Offline Dan Secara Otomatis
            Menyinkronkan Data Ketika Terhubung Kembali Ke Internet. Hal Ini
            Memungkinkan Restoran Tetap Beroperasi Tanpa Hambatan Meskipun
            Terjadi Gangguan Jaringan.
          </p>
          <span className="text-blue-500 font-bold cursor-pointer flex justify-center mt-4">
            <svg
              className="w-4 h-4 inline-block ml-1 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5M12 19l-7-7 7-7"
              ></path>
            </svg>
          </span>
        </div>
        <div className="grid justify-center">
          <img
            src="/images/UMKM2.PNG"
            alt="Another Image"
            className="rounded-2xl w-80 sm:w-auto md:w-72 lg:w-3/4 xl:w-96 mx-auto block  max-w-full lg:max-w-2xl"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 px-8 items-center mt-28 lg:mt-36">
        <div className="grid justify-center">
          <img
            src="/images/UMKM3.PNG"
            alt="Another Image"
            className="rounded-2xl w-96 h-80 sm:w-auto sm:h-64 lg:w-auto lg:h-96"
          />
        </div>

        <div className="lg:pr-12 xl:pr-28 2xl:pr-40 text-left ">
          <h1 className="text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-4">
            Pengelolaan Inventaris Dan Stok <br className="mt-2" />
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify">
            JovaResto Memudahkan Pemilik Restoran Untuk Melacak Inventaris Dan
            Stok Bahan Makanan Secara Real-Time. Mereka Dapat Mengatur
            Notifikasi Pengingat Saat Persediaan Mencapai Batas Minimum,
            Sehingga Memudahkan Dalam Pengadaan Bahan Makanan.
          </p>
          <span className="text-blue-500 font-bold cursor-pointer flex justify-center mt-4">
            <svg
              className="w-4 h-4 inline-block ml-1 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5M12 19l-7-7 7-7"
              ></path>
            </svg>
          </span>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 px-8 items-center mt-28 lg:mt-32">
        <div className="lg:pl-12 xl:pl-28 2xl:pl-40  ">
          <h1 className="text-2xl lg:text-4xl  xl:text-4xl 2xl:text-5xl  font-bold mb-4 ">
            Melihat Laporan Transaksi Dan Penjualan
            <br className="mt-2" />
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify">
            Analisis Menu Terlaris. JovaResto Juga Menyediakan Laporan Tentang
            Menu Yang paling Diminati Oleh Pelanggan. Informasi Ini Dapat
            Membantu Pemilik Restoran Dalam Mengambil Keputusan Terkait
            Penyesuaian Menu Dan Promosi Yang Lebih Efektif.
          </p>
          <span className="text-blue-500 font-bold cursor-pointer flex justify-center mt-4">
            <svg
              className="w-4 h-4 inline-block ml-1 transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 12H5M12 19l-7-7 7-7"
              ></path>
            </svg>
          </span>
        </div>
        <div className="text-center">
          <div className="grid justify-center">
            <img
              src="/images/UMKM4.PNG"
              alt="Another Image"
              className="mt-4 rounded-2xl w-96 h-80 sm:w-auto sm:h-72 md:w-96 lg:w-auto lg:h-96 mx-auto block md:mx-2 max-w-full lg:max-w-2xl "
            />
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <Testimonial />

      {/* Contact Section */}
      <div className="grid sm:grid-cols-2 gap-8 items-center text-center px-8 lg:px-20 xl:px-36 2xl:px-48 mt-32">
        <div className="">
          <img
            src="images/CONTACT.png"
            alt="Image description"
            className="w-auto h-96 object-contain "
          />
        </div>
        <div id="fourth-section" className="text-left">
          <div className="border-t-4  border-gray-300 pt-2 w-20"> </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-900 ">
            Ada Yang Bisa Kami Bantu?
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify mt-4">
            Kamu Punya Banyak Pertanyaan Dan Ingin Tahu Banyak Tentang Fitur
            JOVARESTO Silahkan Hubungi Kami!.
          </p>
          <div className="mt-2 2xl:mt-4 mb-4">
            <p className="text-cyan-600">
              <a href="tel:+1234567890" className="underline">
                2300 580
              </a>{" "}
              <a href="mailto:info@example.com" className="underline">
                support@jovaresto.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
