import React from "react";
import Gambar1 from "./images/bg2.jpg";
import Gambar2 from "./images/bg1.jpg";

const Tentang = () => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-blue-100 to-blue-300 backdrop-blur-md relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/src/tentang/images/bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 to-white/30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-10">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
              <img src={Gambar1} alt="Visi Kami" className="w-full" />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
              ✨ Visi Kami
            </h2>
            <p className="text-lg font-bold text-gray-700 leading-relaxed">
              Kami percaya bahwa rumah yang bersih dan modern meningkatkan
              kualitas hidup. Visi kami adalah menjadi pilihan utama dalam
              solusi peralatan rumah tangga yang inovatif dan ramah lingkungan.
            </p>
            <a
              href="/kontak"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300 hover:scale-105"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1 text-center md:text-left space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
              🛠️ Layanan Kami
            </h2>
            <p className="text-lg font-bold text-gray-700 leading-relaxed">
              Dari pembelian hingga perawatan, kami menyediakan layanan lengkap
              dan responsif untuk memastikan setiap pelanggan merasa puas dan
              terbantu dalam setiap langkah.
            </p>
            <a
              href="/layanan"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300 hover:scale-105"
            >
              Lihat Layanan
            </a>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
              <img src={Gambar2} alt="Layanan Kami" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
