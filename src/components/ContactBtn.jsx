import React from "react";
import WhatsAppIcon from "./assets/whatsapp.svg";

export default function ContactBtn() {
  return (
    <a
      href="https://wa.me/6282135272679"
      target="_blank"
      className={
        "mx-auto flex w-fit items-center gap-2 rounded-lg bg-[#128c7e] px-2 py-3 text-sm text-white transition-transform duration-200 ease-in-out hover:scale-105 md:text-lg"
      }
    >
      <img className="w-7" src={WhatsAppIcon} alt="whatsapp icon" />
      <span>Kontak Whatsapp</span>
    </a>
  );
}
