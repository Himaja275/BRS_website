import { StrictMode, useRef } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import GalleryPage from "./components/pages/GalleryPage.jsx";
import Navbar from "./components/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/pages/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Basic = ({ Element }) => (
  <>
    <ScrollToTop />
    <Navbar />
    <Element />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/home",
    element:<Basic Element={ App} />,
  },
  {
    path: "/",
    element: <Basic Element={ App} />,
  },
  {
    path: "/gallery",
    element: <Basic Element={ GalleryPage} />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
