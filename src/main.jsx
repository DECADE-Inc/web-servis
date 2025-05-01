import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Beranda from "./beranda/Beranda";
import Tentang from "./tentang/Tentang";
import Layanan from "./layanan/layanan";
import Kontak from "./kontak/Kontak";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/tentang",
    element: <Tentang />,
  },
  {
    path: "/layanan",
    element: <Layanan />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
