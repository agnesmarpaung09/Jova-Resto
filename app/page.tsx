import React from "react";

const Home = () => {
  return (
    <>
      <div className="min-h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-center w-full h-full object-contain"
          style={{ backgroundImage: `url('/images/HOME1.png')` }}
        ></div>
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
            <span className="text-lg text-black">
              Jova Resto Membantu Untuk Memaksimalkan Potensi Usahamu.
            </span>
            <button className="block mt-6 px-14 py-2 bg-purple-900 text-white rounded-full hover:bg-purple-700">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
      <div>
        {/* First Section */}
        <div className="bg-gradient-to-b from-gray-200 to-white">
          <div className="container mx-auto px-4 md:px-8 lg:px-40">
            <img
              src="/images/background.png"
              alt=""
              className="mb-4 ml-[-50px] max-w-[280px]"
            />
            <div className="grid md:grid-cols-2 gap-1 items-center mt-10">
              <div>
                <img
                  src="/images/UMKM1.PNG"
                  alt=""
                  className="rounded-xl w-100 h-72 lg:w-120 lg:h-90 mx-auto md:mx-0"
                />
              </div>
              <div className="md:pl-8 lg:pl-12 scale-125">
                <h1 className="text-4xl font-bold">
                  Membantu anda dalam hal <br />
                  pencatatan stok, laporan <br className="mt-2" />
                  keuangan dan lain lain. <br className="mt-2" />
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="text-center mt-40">
          <h1 className="text-5xl font-bold">Jova Resto hadir Untuk UMKM</h1>
        </div>

        {/* Third Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-20">
          <div className="lg:pl-60 scale-110">
            <h1 className="text-5xl font-bold mb-4">
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
          <div className="text-center">
            <div className="grid justify-center ">
              <img
                src="/images/UMKM2.PNG"
                alt="Another Image"
                className="mt-4 rounded-lg md:w-96 lg:w-120 mx-auto block md:mx-2 max-w-full lg:max-w-2xl"
              />
            </div>
          </div>
        </div>

        {/* Fourth Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-28">
          <div className="text-center">
            <div className="grid justify-center">
              <img
                src="/images/UMKM3.PNG"
                alt="Another Image"
                className="mt-4 rounded-lg md:w-96 lg:w-120 mx-auto block md:mx-2 max-w-full lg:max-w-2xl scale-125"
              />
            </div>
          </div>
          <div className="lg:pr-60 text-left scale-110">
            <h1 className="text-5xl font-bold mb-4">
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

        {/* Fifth Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-36">
          <div className="lg:pl-60 scale-110">
            <h1 className="text-5xl font-bold mb-4">
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
                className="mt-4 rounded-lg md:w-96 lg:w-120 mx-auto block md:mx-2 max-w-full lg:max-w-2xl scale-125"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="flex flex-col items-center mt-36 px-12">
          <h1 className="text-5xl font-bold absolute z-10 bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent">
            TESTIMONIAL
          </h1>
          <h2 className="text-3xl font-semibold mt-6 mb-8 text-center text-purple-900 absolute z-10">
            Testimonial
          </h2>
          <div
            className="grid grid-cols-3 gap-4 items-center mt-28 bg-cover bg-center min-h-screen"
            style={{
              backgroundImage: 'url("/images/BG testimonial.png")',
            }}
          >
            {/* Testimonial 1 */}
            <div
              className="relative flex items-center bg-center bg-no-repeat rounded-xl -left-3/4 scale-150"
              style={{
                backgroundImage: `url('/images/BG testimonial1.png')`,
              }}
            >
              <div className="w-1/3 h-full bg-cover bg-center rounded-xl">
                <img
                  src="/images/UMKM5.png"
                  alt="Testimonial 1"
                  className="rounded-xl w-80 h-60 mx-auto"
                />
              </div>
              <div className="w-2/3 p-4">
                <h2 className="text-md font-semibold">John Doe</h2>
                <p className="text-xs text-gray-500">Owner, Resto A</p>
                <p className="text-xs text-gray-500 mt-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  quibusdam, facilis maiores voluptates alias labore neque
                  repellendus ipsum quos deserunt ut dolor, tempora expedita
                  atque aperiam cumque est corrupti quod, suscipit autem. Non
                  quia eveniet harum quam omnis commodi debitis corporis aut est
                  delectus vel, esse corrupti saepe consectetur facilis impedit
                  temporibus odio amet nihil.
                </p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div
              className="relative flex items-center  bg-center bg-no-repeat rounded-xl scale-150 "
              style={{
                backgroundImage: `url('/images/BG testimonial1.png')`,
              }}
            >
              <div className="w-1/3 h-full bg-cover bg-center rounded-xl">
                <img
                  src="/images/UMKM5.png"
                  alt="Testimonial 2"
                  className="rounded-xl w-80 h-60 mx-auto"
                />
              </div>
              <div className="w-2/3 p-4">
                <h2 className="text-md font-semibold">Jane Doe</h2>
                <p className="text-xs text-gray-500">Owner, Resto B</p>
                <p className="text-xs text-gray-500 mt-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  nihil soluta sit ducimus sequi exercitationem inventore
                  recusandae iure, cumque quod debitis adipisci aliquid itaque,
                  blanditiis voluptatibus corrupti similique accusantium aut
                  eveniet necessitatibus deleniti explicabo facilis minus harum.
                  Laborum necessitatibus aspernatur quisquam optio illo a ut
                  nulla tenetur aliquam enim, nihil est beatae magnam excepturi
                  delectus?
                </p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div
              className="relative flex items-center bg-center bg-no-repeat rounded-xl -right-3/4 scale-150"
              style={{
                backgroundImage: `url('/images/BG testimonial1.png')`,
              }}
            >
              <div className="w-1/3 h-full bg-cover bg-center rounded-xl">
                <img
                  src="/images/UMKM6.png"
                  alt="Testimonial 3"
                  className="rounded-xl w-80 h-60 mx-auto"
                />
              </div>
              <div className="w-2/3 p-4">
                <h2 className="text-md font-semibold">Joko Doe</h2>
                <p className="text-xs text-gray-500">Owner, Resto C</p>
                <p className="text-xs text-gray-500 mt-2 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda doloremque libero obcaecati consectetur magni nam,
                  ullam earum odio quae. Sunt dolore sint possimus tempora
                  accusamus at atque omnis facilis eius hic ducimus laboriosam
                  consequatur, ipsa commodi laborum rerum quaerat voluptatum
                  exercitationem vitae. Ipsum iusto eveniet debitis accusantium,
                  quisquam, temporibus ipsam tenetur et expedita incidunt eos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center text-center mt-40">
          <div className="lg:pl-60">
            <img
              src="images/CONTACT.png"
              alt="Image description"
              className="w-80 h-80 object-contain "
            />
          </div>
          <div className="lg:pr-60 text-left">
            <h1 className="text-3xl font-bold text-purple-900">
              Ada Yang Bisa Kami Bantu?
            </h1>
            <p className="text-md text-gray-500 tracking-wider text-justify mt-4">
              Kamu Punya Banyak Pertanyaan Dan Ingin Tahu Banyak Tentang Fitur
              JOVARESTO Silahkan Hubungi Kami!.
            </p>
            <div className="mt-4">
              <p className="text-cyan-600">
                <a href="tel:+1234567890" className="underline">
                  2300 580
                </a>{" "}
                |{" "}
                <a href="mailto:info@example.com" className="underline">
                  support@jovaresto.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
