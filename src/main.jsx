import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Beranda from "./beranda/Beranda";
import Tentang from "./tentang/Tentang";
import Layanan from "./layanan/Layanan";
import Kontak from "./kontak/Kontak";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        Component: Beranda,
      },
      {
        path: "/tentang",
        Component: Tentang,
      },
      {
        path: "/layanan",
        Component: Layanan,
      },
      {
        path: "/kontak",
        Component: Kontak,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
