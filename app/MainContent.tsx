import React from "react";

const MainContent = () => {
  return (
    <div>
      {/* First Section */}
      <div className="bg-gradient-to-b from-gray-200 to-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-40  ">
          <img
            src="/images/background.png"
            alt=""
            className="mb-4 ml-[-50px]"
            style={{ maxWidth: "280px" }}
          />
          <div className="grid md:grid-cols-2 gap-1 items-center mt-10">
            <div>
              <img
                src="/images/UMKM1.PNG"
                alt=""
                className="rounded-xl w-100 h-72 lg:w-120 lg:h-90 mx-auto md:mx-0"
              />
            </div>
            <div className="md:pl-8 lg:pl-12">
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
      <div className=" grid md:grid-cols-2 gap-8 items-center mt-20">
        <div className=" lg:pl-60">
          <h1 className="text-5xl font-bold mb-4">
            Kelola Bisnis Anda Baik <br />
            Offline Maupun Online <br className="mt-2" />
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify">
            Sinkronisasi Otomatis Salah Satu Keunggulan JovaResto adalah
            kemampuannya untuk bekerja secara offline dan secara otomatis
            menyinkronkan data ketika terhubung kembali ke internet. Hal ini
            memungkinkan restoran tetap beroperasi tanpa hambatan meskipun
            terjadi gangguan jaringan.
          </p>
        </div>
        <div className="text-center">
          <div className="grid justify-center">
            <img
              src="/images/UMKM2.PNG"
              alt="Another Image"
              className="mt-4 rounded-lg md:w-96 lg:w-120 mx-auto block md:mx-2 max-w-full lg:max-w-2xl"
            />
          </div>
        </div>
      </div>

      {/* Fourth Section */}
      <div className=" grid md:grid-cols-2 gap-8 items-center mt-20">
        <div className="text-center">
          <div className="grid justify-center">
            <img
              src="/images/UMKM3.PNG"
              alt="Another Image"
              className="mt-4 rounded-lg md:w-96 lg:w-120 mx-auto block md:mx-2 max-w-full lg:max-w-2xl"
            />
          </div>
        </div>
        <div className="lg:pr-60 text-left">
          <h1 className="text-5xl font-bold mb-4">
            Pengelolaan Inventaris Dan Stok <br className="mt-2" />
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify">
            Sinkronisasi Otomatis Salah Satu Keunggulan JovaResto adalah
            kemampuannya untuk bekerja secara offline dan secara otomatis
            menyinkronkan data ketika terhubung kembali ke internet. Hal ini
            memungkinkan restoran tetap beroperasi tanpa hambatan meskipun
            terjadi gangguan jaringan.
          </p>
        </div>
      </div>

      {/* Fifth Section */}
      <div className=" grid md:grid-cols-2 gap-8 items-center mt-20">
        <div className=" lg:pl-60">
          <h1 className="text-5xl font-bold mb-4">
            Melihat Laporan Transaksi Dan Penjualan
            <br className="mt-2" />
          </h1>
          <p className="text-md text-gray-500 tracking-wider text-justify">
            Sinkronisasi Otomatis Salah Satu Keunggulan JovaResto adalah
            kemampuannya untuk bekerja secara offline dan secara otomatis
            menyinkronkan data ketika terhubung kembali ke internet. Hal ini
            memungkinkan restoran tetap beroperasi tanpa hambatan meskipun
            terjadi gangguan jaringan.
          </p>
        </div>
        <div className="text-center">
          <div className="grid justify-center">
            <img
              src="/images/UMKM4.PNG"
              alt="Another Image"
              className="mt-4 rounded-lg md:w-96 lg:w-120 mx-auto block md:mx-2 max-w-full lg:max-w-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
