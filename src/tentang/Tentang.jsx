import React from "react";
import Gambar1 from "./images/bg2.jpg";
import Gambar2 from "./images/bg1.jpg";

const Tentang = () => {
  return (
    <section className="w-full py-32 bg-gradient-to-br from-[#144272] to-[#0A2647] backdrop-blur-md relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/src/tentang/images/bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/10 to-white/30 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-24 px-6">
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-auto flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500 max-w-sm w-full">
              <img src={Gambar1} alt="Visi Kami" className="w-full" />
            </div>
          </div>
          <div className="text-center md:text-left space-y-6 max-w-2xl">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              ✨ Visi & Misi Kami
            </h2>
            <p className="text-lg font-bold text-white leading-relaxed">
              Menjadi pusat layanan terpercaya yang memberikan kenyamanan dan kepuasan pelanggan melalui servis produk Electrolux yang profesional dan berkualitas tinggi. <br /><br />
              Memberikan pelayanan cepat dan andal untuk setiap kebutuhan servis produk Electrolux, didukung oleh teknisi berpengalaman, sistem pemesanan yang mudah, serta komitmen terhadap kualitas dan kepercayaan pelanggan.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="text-center md:text-left space-y-6 max-w-2xl">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              🛠️ Layanan Kami
            </h2>
            <p className="text-lg font-bold text-white leading-relaxed">
              Kami menyediakan layanan servis resmi, mulai dari perbaikan, perawatan rutin, hingga penggantian suku cadang asli. Setiap layanan ditangani oleh teknisi bersertifikat dengan standar kualitas tinggi, demi memastikan peralatan rumah Anda tetap berfungsi optimal.
            </p>
            <a
              href="/layanan"
              className="inline-block bg-blue-600 hover:bg-blue-300 text-white px-6 py-3 rounded-full shadow-md transition duration-300 hover:scale-105"
            >
              Lihat Layanan
            </a>
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500 max-w-sm w-full">
              <img src={Gambar2} alt="Layanan Kami" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
