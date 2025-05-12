import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="w-full bg-[#43307e] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex-1">
          <a className="text-2xl font-bold text-white cursor-pointer">
            LaundryPro
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-8 justify-center flex-1">
          {["banner", "about-us", "service", "contact-us"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-white font-medium hover:text-gray-200 transition-colors"
            >
              {section
                .replace("-", " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Contact (desktop) */}
        <div className="hidden lg:flex items-center gap-3 bg-[#6042b9] text-white p-2 rounded-2xl shadow-md ml-4">
          <div className="text-white text-3xl">
            <FaWhatsapp />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-sm">Call to Schedule!</p>
            <p className="text-base font-bold">+9099479474747</p>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#43307e] text-white px-6 pb-4 space-y-4">
          {["banner", "about-us", "service", "contact-us"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
              className="block cursor-pointer font-medium hover:text-gray-200 transition-colors"
            >
              {section
                .replace("-", " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </Link>
          ))}
          <div className="flex items-center gap-3 bg-[#6042b9]  text-white p-2 rounded-xl shadow-md">
            <div className="text-white text-2xl">
              <FaWhatsapp />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-sm">Call to Schedule!</p>
              <p className="text-base font-bold">+9099479474747</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
