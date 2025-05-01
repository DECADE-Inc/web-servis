import React from 'react';

export default function Tentang() {
  return (
    <div className="bg-white text-gray-800">

     {/* Bagian Judul & Kontak dengan Background Gambar */}
     <section className="text-center px-4 py-12 bg-cover bg-center relative"
        style={{ backgroundImage: "url('src/tentang/images/background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div> {/* Layer gelap di atas gambar */}
        <h1 className="text-3xl md:text-4xl font-bold text-white relative z-10 py-4 px-6 inline-block rounded-lg animate-slideInRight">
          Tantang Kami
        </h1>
      </section>

      {/* Galeri Gambar */}
      <div className="text-center text-2xl text-blue-800 font-bold mt-7 relative">
        <h2>Tentang kami - Service Center Electrolux</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8 mt-10">
        <img src="src/tentang/images/ac.jpg" alt="Electrolux 1" className="rounded-lg shadow" />
        <img src="src/tentang/images/kompor.jpg" alt="Electrolux 2" className="rounded-lg shadow" />
        <img src="src/tentang/images/mesin_cuci.jpg" alt="Electrolux 3" className="rounded-lg shadow" />
        <img src="src/tentang/images/oven.jpg" alt="Electrolux 4" className="rounded-lg shadow" />
      </div>

      {/* Deskripsi */}
      <div className="max-w-5xl mx-auto space-y-6 text-lg text-gray-700 text-center">
        <p>
          Kami merupakan pusat layanan <strong className='text-blue-800'>resmi Electrolux di Indonesia</strong> yang siap membantu Anda dalam perawatan, perbaikan,
          dan pemasangan berbagai produk rumah tangga seperti kulkas, mesin cuci, oven, dan lainnya. Kami memahami
          pentingnya produk Electrolux dalam menunjang kenyamanan hidup Anda.
        </p>
        <p>
          Dengan pengalaman bertahun-tahun di bidang <strong className='text-blue-800'>servis dan maintenance alat rumah tangga Electrolux</strong>,
          kami hadir untuk memberikan solusi terbaik. Tim kami terdiri dari teknisi bersertifikat yang memastikan setiap servis dilakukan dengan teliti dan sesuai standar resmi Electrolux.
        </p>
      </div>
    </div>
  );
}
