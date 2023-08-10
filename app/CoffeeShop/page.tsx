import React from "react";
import Link from "next/link";
import Testimonial from "../Testimonial";

function Test() {
  return (
    <div>
      <div className="min-h-screen flex item-center container mx-auto px-5 sm:px-7 pt-32 pb-16 lg:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/Home.png')`,
            height: "103%",
          }}
        ></div>
        <div className="absolute inset-0 flex">
          <div
            id="home"
            className="text-left mx-6 lg:px-12 xl:px-28 2xl:px-48 py-10 mt-24 "
          >
            <h1 className=" font-semibold text-white text-xl sm:text-2xl lg:text-3xl mb-4 ">
              Coffee Shop
            </h1>
            <h2 className="text-white font-semibold text-3xl sm:text-4xl lg:text-5xl mb-3 w-full md:w-[500px] lg:w-[700px]">
              Meningkatkan pengalaman pelanggan di Coffee Shop dengan JovaResto:
              Inovasi dalam Manajemen dan Pemesanan
            </h2>
            <span className="text-md lg:text-lg text-white">
              Jova Resto Membantu Untuk Memaksimalkan Potensi Usahamu.
            </span>
            <Link href="#hubungi-kami">
              <button className=" block bg-purple-900 text-white rounded-full hover:bg-purple-700 mt-6 px-8 lg:px-14 py-2">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div id="features" className="bg-gradient-to-b from-gray-200 to-white ">
        <div className="container mx-auto px-8 lg:px-20 xl:px-36 2xl:px-28">
          <img
            src="/images/background.png"
            alt=""
            className="mb-4 ml-[-50px] max-w-[200px] lg:ml-[-70px] lg:max-w-[280px]"
          />
          <div className="grid sm:grid-cols-2 gap-1 items-center lg:mt-10">
            <div className="flex items-center justify-center md:justify-start">
              <img
                src="/images/CoffeeShop1.PNG"
                alt=""
                className="rounded-2xl w-80 h-48 lg:w-5/6 lg:h-full "
              />
            </div>
            <div className="">
              <h1 className="font-bold mt-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl  text-center sm:text-left sm:ml-6 ">
                Merancang Menu Kreatif dan <br />
                Memikat Pelanggan <br className="mt-4" />
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 px-8  lg:mt-40  ">
        <h1 className="text-2xl lg:text-4xl 2xl:text-5xl font-bold">
          JovaResto Siap Mendukung Bisnis Coffee Shop Anda
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 items-center px-8  mt-20">
        <div id="harga" className="lg:pl-12 xl:pl-28 2xl:pl-40">
          <h1 className="text-2xl lg:text-4xl xl:text-4xl   2xl:text-5xl font-bold mb-4">
            Keuntungan Menjadi <br />
            Membership Coffe Shop Anda <br className="mt-4" />
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify">
            Diskon Khusus: Member Anda Akan Mendapatkan Akses Ke Diskon
            Eksklusif Yang Tidak Tersedia Untuk Pelanggan Biasa. Ini Adalah Cara
            Bagi Coffee Shop Kamu Untuk Memberikan Apresiasi Kepada Pelanggan
            Setia Yang Telah Memilih Dan Mendukung Bisnis Kamu.
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
            src="/images/Restoran/Restoran2.PNG"
            alt="Another Image"
            className="rounded-2xl w-80 sm:w-auto md:w-72 lg:w-3/4 xl:w-96 mx-auto block  max-w-full lg:max-w-2xl"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 px-8 items-center mt-28 lg:mt-36">
        <div className="grid justify-center">
          <img
            src="/images/Restoran/Restoran3.PNG"
            alt="Another Image"
            className="rounded-2xl w-96 h-80 sm:w-auto sm:h-64 lg:w-auto lg:h-96"
          />
        </div>

        <div className="lg:pr-12 xl:pr-28 2xl:pr-40 text-left ">
          <h1 className="text-2xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold mb-4">
            Pencatatan Pembayaran yang <br />
            Mudah dan Fleksibel <br className="mt-4" />
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify">
            Fitur Pencatatan Pembayaran Yang Canggih Di JovaResto. Dengan
            Berbagai Metode Pembayaran Yang Dapat Dipilih, Kami Menyediakan
            Pengalaman Yang Nyaman Dan Fleksibel Bagi Pelanggan Kami.
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
            Pesan dan Nikmati Kopi Anda <br />
            Tanpa Antre <br className="mt-4" />
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify">
            Kami Dengan Bangga Memperkenalkan Fitur Tiket Pemesanan Atau Antrian
            Makanan Di JovaResto. Dengan Fitur Ini, Pelanggan Anda Dapat Memesan
            Kopi Secara Praktis Dan Menghindari Antrean Panjang Di Coffee Shop
            Dan Pelanggan Anda Dapat Menikmati Minuman Favorit Mereka Tanpa
            Harus Menunggu Lama!
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
              src="/images/Restoran/Restoran4.PNG"
              alt="Another Image"
              className="mt-4 rounded-2xl w-96 h-80 sm:w-auto sm:h-72 md:w-96 lg:w-auto lg:h-96 mx-auto block md:mx-2 max-w-full lg:max-w-2xl "
            />
          </div>
        </div>
      </div>

      <Testimonial />

      <div className="grid sm:grid-cols-2 gap-8 items-center text-center px-8 lg:px-20 xl:px-36 2xl:px-48 mt-6 md:mt-32">
        <div className="">
          <img
            src="images/CONTACT.png"
            alt="Image description"
            className="w-auto h-96 object-contain "
          />
        </div>
        <div id="hubungi-kami" className="text-left">
          <div className="border-t-4  border-gray-300 pt-2 w-20"> </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-purple-900 ">
            Ada Yang Bisa Kami Bantu?
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify mt-4">
            Kamu Punya Banyak Pertanyaan Dan Ingin Tahu Banyak Tentang Fitur
            JOVARESTO Silahkan Hubungi Kami!.
          </p>
          <div className="mt-4">
            <ul className="text-cyan-600">
              <p className="flex flex-col lg:flex-row items-start">
                <a
                  href="tel: 2300 580"
                  className="underline font-semibold flex items-center"
                >
                  <img
                    src="images/telepon.png"
                    alt="telepon"
                    className="w-10 h-10 mr-4"
                  />
                  2300 580
                </a>
                <a
                  href="mailto: support@jovaresto.com"
                  className="underline font-semibold flex items-center mt-2 lg:mt-0 mb-4 md:mb-0 lg:ml-8"
                >
                  <img
                    src="images\email.png"
                    alt="email"
                    className="w-10 h-10 mr-4"
                  />
                  support@jovaresto.com
                </a>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Test;
