import React from "react";
import { NavLink } from "react-router";
import WhatsAppIcon from "./assets/whatsapp.svg";
import MechanicImage from "./assets/mechanic.png";
import CustomerServiceImage from "./assets/customer_service.png";

export default function Beranda() {
  return (
    <>
      <section className="relative flex h-[400px] h-screen items-center justify-center overflow-hidden bg-[linear-gradient(to_bottom,rgba(10,38,71,.9),rgba(20,66,114,.8)),url('/src/beranda/assets/hero-background.jpg')] bg-cover bg-center bg-no-repeat text-center">
        <div className="w-3/4 text-center text-white md:w-2/3">
          <h1 className="text-xl font-bold md:text-4xl">Servis Elektronik</h1>
          <h1 className="text-xl font-bold text-blue-200 md:text-4xl">
            Cepat, Terpercaya, dan Profesional
          </h1>
          <p className="mt-3 mb-4 text-sm font-semibold md:text-xl">
            Kami siap membantu semua kebutuhan perbaikan dan perawatan produk
            Electrolux Anda, dari mesin cuci, kulkas, hingga peralatan dapur.
          </p>
          <a
            href="https://wa.me/6283169816073"
            target="_blank"
            className={
              "mx-auto flex w-fit items-center gap-2 rounded-lg bg-[#128c7e] px-2 py-3 text-sm text-white md:text-lg"
            }
          >
            <img className="w-7" src={WhatsAppIcon} alt="whatsapp icon" />
            <span>Kontak CS Whatsapp</span>
          </a>
        </div>
      </section>
      <section className="mx-4 mt-10 flex min-h-[400px] max-w-[1280px] flex-col justify-center rounded-lg bg-[linear-gradient(to_right,rgba(20,66,114,.2),rgba(10,38,71,.9)),url('/src/beranda/assets/servis_oven.jpg')] bg-cover bg-center bg-no-repeat px-6 md:px-10 py-4 text-right text-lg font-bold text-white md:items-end md:bg-contain md:bg-left md:text-4xl xl:mx-auto">
        <h5>Menyediakan layanan perbaikan</h5>
        <h5 className="text-blue-200">Oven Elektrolux anda</h5>
      </section>
      <section className="mx-4 my-14 flex min-h-[400px] max-w-[1280px] flex-col justify-center rounded-lg bg-[linear-gradient(to_right,rgba(10,38,71,.9),rgba(20,66,114,.2)),url('/src/beranda/assets/servis_kompor.jpg')] bg-center bg-no-repeat px-6 md:px-10 py-4 text-left text-lg font-bold text-white md:bg-contain md:bg-right md:text-4xl xl:mx-auto">
        <h5>Menyediakan layanan perbaikan</h5>
        <h5 className="text-blue-200">Kompor Elektrolux anda</h5>
      </section>
      <section className="mx-6 my-14 flex min-h-[400px] max-w-[1280px] flex-col justify-center rounded-lg bg-[linear-gradient(to_right,rgba(20,66,114,.2),rgba(10,38,71,.9))),url('/src/beranda/assets/servis_customer.jpg')] bg-cover bg-center px-6 md:px-10 py-4 text-right text-lg font-bold text-white md:items-end md:bg-contain md:bg-left md:bg-no-repeat md:text-4xl xl:mx-auto">
        <h5>Hubungi kami untuk konsultasi</h5>
        <h5 className="text-blue-200"> teknis awal terkait perbaikan</h5>
      </section>  
    </>
  );
}
