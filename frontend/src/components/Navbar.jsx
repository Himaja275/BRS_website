import React, { useState } from "react";
import Academy from "./academy.jsx";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="relative z-40">
      <div className="sticky top-0 backdrop-blur-lg bg-white/25 z-50">
        <div className="flex justify-between items-center h-24 px-6 md:px-16">
          <Academy />

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden z-50" onClick={toggleMenu}>
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 font-semibold text-lg">
            <li className="hover:text-[#ff9a0d] hover:underline">
              <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>Home</NavLink>
            </li>
            <li className="hover:text-[#ff9a0d] hover:underline">
              <NavLink to="/#about">About</NavLink>
            </li>
            <li className="hover:text-[#ff9a0d] hover:underline">
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? "underline" : "")}>Gallery</NavLink>
            </li>
          </ul>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <NavLink to="/#contact-us">
              <button className="font-bold py-3 px-6 rounded-full text-white bg-[#003A69] hover:text-black hover:bg-[#ED8D3E] border-2 border-[#003a69] hover:border-[#ED8D3E] cursor-pointer">
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay with Slide Down */}
      <div
        className={`flex justify-center transition-all duration-500 ease-in-out overflow-hidden absolute w-full z-40 ${
          menuOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-5'
        }`}
        style={{ top: "96px" }} // 24 * 4 = 96px for top-24
      >
        <div className="w-[90%] bg-[#f2f2f2] rounded-2xl shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold text-lg">
            <li onClick={toggleMenu}>
              <NavLink to="/" className={({ isActive }) => (isActive ? "underline" : "")}>Home</NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink to="/#about">About</NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? "underline" : "")}>Gallery</NavLink>
            </li>
            <li onClick={toggleMenu}>
              <NavLink to="/#contact-us">
                <button className="font-bold py-3 px-6 rounded-full text-white bg-[#003A69] hover:text-black hover:bg-[#ED8D3E] border-2 border-[#003a69] hover:border-[#ED8D3E]">
                  Contact Us
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
