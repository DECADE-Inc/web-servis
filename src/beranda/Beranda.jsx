import React from "react";
import { NavLink } from "react-router";
import WhatsAppIcon from "./assets/whatsapp.svg";
import MechanicImage from "./assets/mechanic.png";
import CustomerServiceImage from "./assets/customer_service.png";

export default function Beranda() {
  return (
    <>
      <section className="text-center h-[400px] bg-[linear-gradient(to_bottom,rgba(29,78,216,.8),rgba(23,37,84,.8)),url('/src/beranda/assets/hero-background.jpg')] bg-cover bg-no-repeat bg-center h-screen overflow-hidden relative flex items-center justify-center">
        <div className="text-white text-center w-3/4 md:w-2/3">
          <h1 className="text-xl md:text-4xl font-bold">Servis Elektronik</h1>
          <h1 className="text-blue-200 text-xl md:text-4xl font-bold">
            Cepat, Terpercaya, dan Profesional
          </h1>
          <p className="text-sm md:text-xl mt-3 font-semibold mb-4">
            Kami siap membantu semua kebutuhan perbaikan dan perawatan produk
            Electrolux Anda, dari mesin cuci, kulkas, hingga peralatan dapur.
          </p>
          <a
            href="https://wa.me/6283169816073"
            target="_blank"
            className={
              "rounded-lg px-2 py-3 bg-[#128c7e] text-white w-fit flex items-center gap-2 mx-auto text-sm md:text-lg"
            }
          >
            <img className="w-7" src={WhatsAppIcon} alt="whatsapp icon" />
            <span>Kontak CS Whatsapp</span>
          </a>
        </div>
      </section>
      <section className="mt-10 mx-6 rounded-none xl:rounded-lg xl:mx-auto min-h-[400px] py-4 px-10 flex flex-col items-end justify-center text-white bg-[linear-gradient(to_right,rgba(23,37,84,.3),rgba(29,78,216,.9)),url('/src/beranda/assets/servis_oven.jpg')] max-w-[1280px] bg-contain bg-left bg-no-repeat text-4xl font-bold">
        <h5>Menyediakan layanan perbaikan</h5>
        <h5 className="text-purple-200">Oven Elektrolux anda</h5>
      </section>
      <section className="my-14 mx-6 rounded-none xl:rounded-lg xl:mx-auto min-h-[400px] py-4 px-10 flex flex-col items-start justify-center text-white bg-[linear-gradient(to_right,rgba(29,78,216,.9),rgba(23,37,84,.3)),url('/src/beranda/assets/servis_kompor.jpg')] max-w-[1280px] bg-contain bg-right bg-no-repeat text-4xl font-bold">
        <h5>Menyediakan layanan perbaikan</h5>
        <h5 className="text-purple-200">Kompor Elektrolux anda</h5>
      </section>
      <section className="my-14 mx-6 rounded-none xl:rounded-lg xl:mx-auto min-h-[400px] py-4 px-10 flex flex-col items-end justify-center text-white bg-[linear-gradient(to_right,rgba(23,37,84,.2),rgba(29,78,216,.9)),url('/src/beranda/assets/servis_customer.jpg')] max-w-[1280px] bg-contain bg-left bg-no-repeat text-4xl font-bold">
        <h5>Hubungi kami untuk konsultasi</h5>
        <h5 className="text-purple-200"> teknis awal untuk perbaikan</h5>
      </section>
    </>
  );
}
