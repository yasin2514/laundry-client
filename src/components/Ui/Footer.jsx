import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/react.svg"; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0d0314] to-[#1a1f4b] text-white py-12">
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
              className="w-24 h-24 mx-auto lg:mx-0 rounded-full border-2 border-white shadow-md mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              <strong className="text-white">Clock Tower Laundry</strong>
              <br />
              123 Main Street, Dhaka, Bangladesh
              <br />
              info@clocktowerlaundry.com
              <br />
              +880 1774 647257
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

          {/* Company Policies */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-4">Company Policy</h4>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a
                  href="#privacy-policy"
                  className="hover:text-yellow-300 transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms-conditions"
                  className="hover:text-yellow-300 transition"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#refund-policy"
                  className="hover:text-yellow-300 transition"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#delivery-policy"
                  className="hover:text-yellow-300 transition"
                >
                  Delivery Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-4">Contact & Support</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Got questions or need help? We're here for you 24/7.
              <br />
              Email: support@clocktowerlaundry.com
              <br />
              Hotline: +880 1999 123456
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Clock Tower Laundry. All rights
            reserved.
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
