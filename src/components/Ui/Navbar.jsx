// components/Ui/Navbar.jsx
import React from "react";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-100 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex-1">
          <a className="text-2xl font-bold text-blue-700 cursor-pointer">
            LaundryPro
          </a>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex gap-8 justify-center flex-1">
          <Link
            to="banner"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-blue-800 font-medium hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="about-us"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-blue-800 font-medium hover:text-blue-600 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="service"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-blue-800 font-medium hover:text-blue-600 transition-colors"
          >
            Service
          </Link>
          <Link
            to="contact-us"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer text-blue-800 font-medium hover:text-blue-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-3 bg-blue-200 text-blue-800 p-2 rounded-2xl shadow-md ml-4">
          <div className="text-blue-600 text-3xl">
            <FaWhatsapp />
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-sm">Call to Schedule!</p>
            <p className="text-base font-bold">+9099479474747</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
