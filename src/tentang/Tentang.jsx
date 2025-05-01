import React from "react";
import Gambar1 from "./images/bg2.jpg";
import Gambar2 from "./images/bg1.jpg";

const Tentang = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300 px-4 py-24 backdrop-blur-md">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/src/tentang/images/bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-tl from-blue-500/10 to-white/30"></div>
      <div className="relative z-10 mx-auto max-w-7xl space-y-10">
        {/* Section 1 */}
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="md:w-1/2">
            <div className="transform overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-105">
              <img src={Gambar1} alt="Visi Kami" className="w-full" />
            </div>
          </div>
          <div className="space-y-6 text-center md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800">
              ✨ Visi & misi Kami
            </h2>
            <p className="text-lg leading-relaxed font-bold text-gray-700">
              Menjadi pusat layanan terpercaya yang memberikan kenyamanan dan
              kepuasan pelanggan melalui servis produk Electrolux yang
              profesional dan berkualitas tinggi. Memberikan pelayanan cepat dan
              andal untuk setiap kebutuhan servis produk Electrolux, didukung
              oleh teknisi berpengalaman, sistem pemesanan yang mudah, serta
              komitmen terhadap kualitas dan kepercayaan pelanggan.
            </p>
            <a
              href="/kontak"
              className="inline-block rounded-full bg-blue-600 px-6 py-3 text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-700"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        {/* Section 2 */}

        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="order-2 space-y-6 text-center md:order-1 md:w-1/2 md:text-left">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800">
              🛠️ Layanan Kami
            </h2>
            <p className="text-lg leading-relaxed font-bold text-gray-700">
              Kami menyediakan layanan servis resmi, mulai dari perbaikan,
              perawatan rutin, hingga penggantian suku cadang asli. Setiap
              layanan ditangani oleh teknisi bersertifikat dengan standar
              kualitas tinggi, demi memastikan peralatan rumah Anda tetap
              berfungsi optimal.
            </p>
            <a
              href="/layanan"
              className="inline-block rounded-full bg-green-600 px-6 py-3 text-white shadow-md transition duration-300 hover:scale-105 hover:bg-green-700"
            >
              Lihat Layanan
            </a>
          </div>
          <div className="order-1 md:order-2 md:w-1/2">
            <div className="transform overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-105">
              <img src={Gambar2} alt="Layanan Kami" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
