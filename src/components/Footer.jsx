import React from 'react';

const Footer = () => {
  return (
    <>
      {/* Section CTA */}
      <section className="bg-blue-900 text-white py-10 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Butuh Service Electrolux? Hubungi kami sekarang dan dapatkan layanan terbaik! 📞
        </h2>
        <a 
          href="https://wa.me/6281234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg shadow hover:scale-105 transition"
        >
          WhatsApp Sekarang
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <img src="/logo-electrolux.png" alt="Electrolux" className="h-10 mb-3" />
            <p>Electrolux Service Center Indonesia</p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-blue-900">Tentang</h3>
            <p>Kami adalah layanan resmi & terpercaya untuk produk Electrolux. Dengan teknisi berpengalaman, kami siap membantu perawatan dan perbaikan produk Anda.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-blue-900">Kontak</h3>
            <p>📞 +62 812 3456 7890</p>
            <p>📧 support@electroluxservice.id</p>
            <p>🌐 www.electroluxservice.id</p>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-blue-900">Navigasi</h3>
            <ul className="space-y-1">
              <li><a href="/" className="hover:underline">Beranda</a></li>
              <li><a href="/tentang" className="hover:underline">Tentang</a></li>
              <li><a href="/layanan" className="hover:underline">Layanan</a></li>
              <li><a href="/kontak" className="hover:underline">Kontak</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
