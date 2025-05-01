import React from "react";
import Service1 from "./assets/mekanik_booking.jpg";
import Service2 from "./assets/mekanik_datang.jpg";
import Service3 from "./assets/mekanik_servis.jpg";
import Service4 from "./assets/mekanik_bayar.jpg";

export default function Layanan() {

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const services = [
    {
      id: 1,
      title: "Booking Mekanik",
      description:
        "Pilih layanan yang Anda butuhkan melalui WhatsApp dan booking mekanik kami.",
      image: Service1,
    },
    {
      id: 2,
      title: "Mekanik Datang",
      description: "Mekanik kami akan datang ke lokasi Anda sesuai jadwal.",
      image: Service2,
    },
    {
      id: 3,
      title: "Servis Produk",
      description:
        "Mekanik kami akan melakukan servis dan perbaikan produk Oven dan Kompor Anda.",
      image: Service3,
    },
    {
      id: 4,
      title: "Pembayaran",
      description: "Lakukan pembayaran setelah servis selesai.",
      image: Service4,
    },
  ];

  return (
    <section className="mx-6 mt-32 mb-28 flex flex-col gap-2 lg:mx-32">
      <h1 className="text-xl font-bold text-blue-900 md:text-4xl">
        Bagaimana Layanan Kami Bekerja?
      </h1>
      <p className="mt-1 text-lg md:text-xl">
        Proses yang sederhana dan lancar untuk mendapatkan layanan perbaikan
        produk.
      </p>
      <div className="mt-8 grid grid-cols-1 gap-16 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col gap-4 rounded-lg border border-gray-300 p-4 pb-16 shadow-sm transition duration-300 ease-in-out hover:shadow-lg"
          >
            <img
              className="rounded-lg"
              src={service.image}
              alt={service.title}
            />
            <h2 className="text-xl font-bold text-blue-900 md:text-2xl">
              {service.title}
            </h2>
            <p className="md:text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
