import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import logo from "../../assets/logo-1.png";

const Footer = () => {
  return (
    <footer className="bg-[#352d4d] text-white py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4"
      >
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo + Address */}
          <div className="text-center lg:text-left">
            <img
              src={logo}
              alt="Company Logo"
              className="w-20 h-20 mx-auto lg:mx-0 rounded-full border-2 border-white shadow-md mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">Laundry King</strong>
              <br />
              Clock Tower, Makkah, Saudi Arabia
              <br />
              rifatshikder056@gmail
              <br />
              +966557802506
            </p>
          </div>

          {/* Quick Shortcuts */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-4">Quick Shortcuts</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              {["Home", "Packages", "Services", "Reviews", "Contact Us"].map(
                (item, idx) => (
                  <li key={idx}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-yellow-300 transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact & Support</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Got questions or need help? We're here for you 24/7.
              <br />
              Email: rifatshikder056@gmail
              <br />
              Hotline: +966557802506
            </p>
          </div>

          {/* WhatsApp & Call Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-4">Chat & Call</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/966557802506"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm px-5 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                Message on WhatsApp
              </a>
              <br />
              <a
                href="tel:+966557802506"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm px-5 py-2.5 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
              >
                <FaPhoneAlt className="text-sm" />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Laundry King. All rights reserved.
          </p>
          <p className="mt-2">
            Designed & Developed by{" "}
            <span className="text-gray-300 font-semibold">
              @Yasin Khan Rabbi
            </span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
