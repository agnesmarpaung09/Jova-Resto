import React from "react";

const MainContent = () => {
  return (
    <div>
      {/* First Section */}
      <div className="bg-gradient-to-b from-gray-200 to-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-40">
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
      <div className="grid md:grid-cols-2 gap-8 items-center mt-20">
        <div className="lg:pl-60">
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
      <div className="grid md:grid-cols-2 gap-8 items-center mt-20">
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
            JovaResto Memudahkan Pemilik Restoran Untuk Melacak Inventaris Dan
            Stok Bahan Makanan Secara Real-Time. Mereka Dapat Mengatur
            Notifikasi Pengingat Saat Persediaan Mencapai Batas Minimum,
            Sehingga Memudahkan Dalam Pengadaan Bahan Makanan.
          </p>
        </div>
      </div>

      {/* Fifth Section */}
      <div className="grid md:grid-cols-2 gap-8 items-center mt-20">
        <div className="lg:pl-60">
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

      <div className="text-center mt-40">
        <h1 className="text-2xl font-bold text-purple-900">Testimonial</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 bg-cover bg-center bg-no-repeat p-8 relative">
          <img
            src="/images/BG testimonial.PNG"
            alt="Background"
            className="absolute inset-0 z-0 w-full h-full opacity-60"
          />
          <div className="grid md:flex gap-8 items-center mt-20">
            <div className="relative flex-shrink-0 aspect-w-4 aspect-h-3">
              <div
                className="w-80 h-32 bg-center bg-cover"
                style={{
                  backgroundImage: `url("/images/BG testimonial1.PNG")`,
                }}
              >
                <img
                  src="/images/UMKM5.PNG"
                  alt="Testimonial 1"
                  className="w-32 h-32 mx-auto"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <p className="text-sm font-semibold text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  voluptates distinctio magnam obcaecati minima asperiores
                  laboriosam necessitatibus pariatur, cumque odit! Expedita
                  perspiciatis maiores asperiores earum vero debitis aut impedit
                  rem.
                </p>
                <p className="text-white mt-2">Tammara Timmy</p>
              </div>
            </div>

            <div className="relative flex-shrink-0 aspect-w-4 aspect-h-3">
              <div
                className="w-32 h-32 bg-center bg-cover"
                style={{
                  backgroundImage: `url("/images/BG testimonial1.PNG")`,
                }}
              >
                <img
                  src="/images/UMKM5.PNG"
                  alt="Testimonial 1"
                  className="w-32 h-32 mx-auto"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <p className="text-sm font-semibold text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  voluptates distinctio magnam obcaecati minima asperiores
                  laboriosam necessitatibus pariatur, cumque odit! Expedita
                  perspiciatis maiores asperiores earum vero debitis aut impedit
                  rem.
                </p>
                <p className="text-white mt-2">Tammara Timmy</p>
              </div>
            </div>

            <div className="relative flex-shrink-0 aspect-w-4 aspect-h-3">
              <div
                className="w-80 h-32 bg-center bg-cover"
                style={{
                  backgroundImage: `url("/images/BG testimonial1.PNG")`,
                }}
              >
                <img
                  src="/images/UMKM5.PNG"
                  alt="Testimonial 1"
                  className="w-32 h-32 mx-auto"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <p className="text-sm font-semibold text-white text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  voluptates distinctio magnam obcaecati minima asperiores
                  laboriosam necessitatibus pariatur, cumque odit! Expedita
                  perspiciatis maiores asperiores earum vero debitis aut impedit
                  rem.
                </p>
                <p className="text-white mt-2">Tammara Timmy</p>
              </div>
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
            className="w-80 h-80 object-contain"
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
  );
};

export default MainContent;
