import React from "react";
import logoImage from "./assets/logo.png";

const Footer = () => {
  return (
    <>
      {/* Section CTA */}
      <section className="bg-primary px-6 py-10 text-center text-white">
        <h2 className="mb-4 text-xl font-semibold md:text-3xl">
          Butuh Service Electrolux? Hubungi kami sekarang dan dapatkan layanan
          terbaik! 📞
        </h2>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm md:text-lg rounded-lg bg-white px-6 py-3 font-semibold text-blue-900 shadow transition hover:scale-105"
        >
          WhatsApp Sekarang
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-8 text-sm md:grid-cols-4">
          <div>
            <img src={logoImage} alt="Electrolux" className="mb-3 h-10" />
            <p>Electrolux Service Center Indonesia</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-blue-900">Tentang</h3>
            <p>
              Kami adalah layanan resmi & terpercaya untuk produk Electrolux.
              Dengan teknisi berpengalaman, kami siap membantu perawatan dan
              perbaikan produk Anda.
            </p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-blue-900">Kontak</h3>
            <p>📞 +62 812 3456 7890</p>
            <p>📧 support@electroluxservice.id</p>
            <p>🌐 www.electroluxservice.id</p>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-blue-900">Navigasi</h3>
            <ul className="space-y-1">
              <li>
                <a href="/" className="hover:underline">
                  Beranda
                </a>
              </li>
              <li>
                <a href="/tentang" className="hover:underline">
                  Tentang
                </a>
              </li>
              <li>
                <a href="/layanan" className="hover:underline">
                  Layanan
                </a>
              </li>
              <li>
                <a href="/kontak" className="hover:underline">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-primary py-6 text-center text-xs text-white md:text-base">
        Copyright © 2025 Electrolux Service Center | All Rights Reserved.{" "}
      </div>
    </>
  );
};

export default Footer;
