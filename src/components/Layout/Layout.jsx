import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import logoKomunitas from "../assets/logo_komunitas.jpg";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <div className="fixed bottom-10 left-10 flex items-center gap-4 rounded-lg bg-white p-4 text-4xl font-bold shadow-lg border-blue-500 border-4">
        <img className="h-16 w-16 rounded-full" src={logoKomunitas} alt="" />
        Preview
      </div>
    </>
  );
}
