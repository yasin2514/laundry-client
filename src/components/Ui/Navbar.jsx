import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="home" className="w-full bg-[#4b3f6e] shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex-1">
          <a className="text-2xl font-bold text-white cursor-pointer">
            LaundryKing
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex gap-8 justify-center flex-1">
          {["home", "services", "packages", "contact-us"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-white font-medium relative group"
            >
              <span>
                {section
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Contact (desktop) */}
        <div className="hidden lg:flex items-center gap-3 bg-[#6c5f8d] text-white p-2 rounded-2xl shadow-md ml-4">
          <div className="text-white text-3xl">
            <FaWhatsapp />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-sm">Call to Schedule!</p>
            <p className="text-base font-bold">+966557802506</p>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#4b3f6e] text-white px-6 pb-4 space-y-4">
          {["home", "services", "packages", "contact-us"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeMenu}
              className="block font-medium relative group"
            >
              <span>
                {section
                  .replace("-", " ")
                  .replace(/\b\w/g, (l) => l.toUpperCase())}
              </span>
              <span className="block h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Contact (mobile) */}
          <div className="flex items-center gap-3 bg-[#9c8cb9] text-white p-2 rounded-xl shadow-md">
            <div className="text-white text-2xl">
              <FaWhatsapp />
            </div>
            <div className="leading-tight">
              <p className="font-semibold text-sm">Call to Schedule!</p>
              <p className="text-base font-bold">+966557802506</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
