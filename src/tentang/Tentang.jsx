import React from "react";
import Gambar1 from "./images/bg2.jpg";
import Gambar2 from "./images/bg1.jpg";
import { Link } from "react-router";
const Tentang = () => {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#144272] to-[#0A2647] py-32 backdrop-blur-md">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('/src/tentang/images/bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-tl from-blue-500/10 to-white/30"></div>

      <div className="relative z-10 mx-auto max-w-7xl space-y-24 px-6">
        {/* Section 1 */}
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
          <div className="flex w-full justify-center md:w-auto">
            <div className="w-full max-w-sm transform overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-105">
              <img src={Gambar1} alt="Visi Kami" className="w-full" />
            </div>
          </div>
          <div className="max-w-2xl space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              ✨ Visi & Misi Kami
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-white">
              Menjadi pusat layanan terpercaya yang memberikan kenyamanan dan
              kepuasan pelanggan melalui servis produk Electrolux yang
              profesional dan berkualitas tinggi. <br />
              <br />
              Memberikan pelayanan cepat dan andal untuk setiap kebutuhan servis
              produk Electrolux, didukung oleh teknisi berpengalaman, sistem
              pemesanan yang mudah, serta komitmen terhadap kualitas dan
              kepercayaan pelanggan.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col items-center justify-center gap-12 md:flex-row">
          <div className="max-w-2xl space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
              🛠️ Layanan Kami
            </h2>
            <p className="test-base md:text-lg leading-relaxed text-white">
              Kami menyediakan layanan servis resmi, mulai dari perbaikan,
              perawatan rutin, hingga penggantian suku cadang asli. Setiap
              layanan ditangani oleh teknisi bersertifikat dengan standar
              kualitas tinggi, demi memastikan peralatan rumah Anda tetap
              berfungsi optimal.
            </p>
            <Link
              to="/layanan"
              className="inline-block rounded-full bg-blue-600 px-6 py-3 text-white shadow-md transition duration-300 hover:scale-105 hover:bg-blue-300"
            >
              Lihat Layanan
            </Link>
          </div>
          <div className="flex w-full justify-center md:w-auto">
            <div className="w-full max-w-sm transform overflow-hidden rounded-3xl shadow-2xl transition duration-500 hover:scale-105">
              <img src={Gambar2} alt="Layanan Kami" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
