import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaWhatsapp } from "react-icons/fa";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "home", name: "Home" },
    { to: "about", name: "About Us" },
    { to: "services", name: "Services" },
    { to: "contact", name: "Contact Us" },
  ];

  return (
    <nav className="bg-[#2E8B57] text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Laundry</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-[#66CDAA]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center gap-4 bg-green-100 text-green-800 p-2 rounded-2xl shadow-md">
          <FaWhatsapp className="text-green-600 text-2xl" />
          <div>
            <p className="font-semibold text-green-700 text-sm">
              Call to Schedule!
            </p>
            <p className="text-green-700 text-base font-bold">+9099479474747</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2E8B57] px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="block py-2 text-white hover:text-[#66CDAA]"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-4 bg-green-100 text-green-800 p-2 rounded-2xl shadow-md">
            <FaWhatsapp className="text-green-600 text-2xl" />
            <div>
              <p className="font-semibold text-green-700 text-sm">
                Call to Schedule!
              </p>
              <p className="text-green-700 text-base font-bold">
                +9099479474747
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
