import React from "react";
import ContactBtn from "../components/ContactBtn";

export default function Beranda() {
  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-[linear-gradient(to_bottom,rgba(10,38,71,.9),rgba(20,66,114,.8)),url('/src/beranda/assets/hero-background.jpg')] bg-cover bg-center bg-no-repeat text-center">
        <div className="w-3/4 text-center text-white md:w-2/3">
          <h1 className="text-xl font-bold md:text-4xl">Servis Electrolux</h1>
          <h1 className="text-xl font-bold text-blue-200 md:text-4xl">
            Cepat, Terpercaya, dan Profesional
          </h1>
          <p className="mt-3 mb-4 text-sm font-semibold md:text-xl">
            Kami siap membantu semua kebutuhan perbaikan dan perawatan produk
            Electrolux Anda, Kompor, Water Heater, dan lain-lain.
          </p>
          <ContactBtn />
        </div>
      </section>
      <section className="mx-4 mt-10 flex min-h-[400px] max-w-[1280px] flex-col justify-center rounded-lg bg-[linear-gradient(to_right,rgba(20,66,114,.2),rgba(10,38,71,.9)),url('/src/beranda/assets/kompor-1.png')] bg-cover bg-center bg-no-repeat px-6 py-4 text-right text-lg font-bold text-white md:items-end md:bg-contain md:bg-left md:px-10 md:text-4xl xl:mx-auto">
        <h5>Menyediakan layanan perbaikan</h5>
        <h5 className="text-blue-200">Water Heater Elektrolux anda</h5>
      </section>
      <section className="mx-4 my-14 flex min-h-[400px] max-w-[1280px] flex-col justify-center rounded-lg bg-[linear-gradient(to_right,rgba(10,38,71,.9),rgba(20,66,114,.2)),url('/src/beranda/assets/kompor-2.jpg')] bg-center bg-no-repeat px-6 py-4 text-left text-lg font-bold text-white md:bg-contain md:bg-right md:px-10 md:text-4xl xl:mx-auto">
        <h5>Menyediakan layanan perbaikan</h5>
        <h5 className="text-blue-200">Kompor Elektrolux anda</h5>
      </section>
      <section className="mx-6 my-14 flex min-h-[400px] max-w-[1280px] flex-col justify-center rounded-lg bg-[linear-gradient(to_right,rgba(20,66,114,.2),rgba(10,38,71,.9))),url('/src/beranda/assets/servis_customer.jpg')] bg-cover bg-center px-6 py-4 text-right text-lg font-bold text-white md:items-end md:bg-contain md:bg-left md:bg-no-repeat md:px-10 md:text-4xl xl:mx-auto">
        <h5>Hubungi kami untuk konsultasi</h5>
        <h5 className="text-blue-200"> teknis awal terkait perbaikan</h5>
      </section>
    </>
  );
}
