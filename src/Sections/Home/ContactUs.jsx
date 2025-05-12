import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import img from "../../assets/img1.avif";

const ContactUs = () => {
  const whatsappMessage = `Hello, I would like to inquire about your laundry services.`;

  return (
    <section id="contact-us" className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#584b80] mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re here to help you with all your laundry needs. Choose the best
            way to reach us!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Section 1: Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={img}
              alt="Clock Tower Laundry Location"
              className="w-full h-72 object-cover"
            />
          </motion.div>

          {/* Section 2: Get in Touch */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="bg-[#f5f5f5] rounded-xl p-8 shadow-md text-center flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-[#584b80] mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Want quick help? Tap the button below to message us directly on
              WhatsApp.
            </p>
            <a
              href={`https://wa.me/8801774647257?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#584b80] hover:bg-[#46396a] text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow"
            >
              <FaWhatsapp size={20} />
              Message Us on WhatsApp
            </a>
          </motion.div>

          {/* Section 3: Address & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[#e8eaf6] rounded-xl p-8 shadow-md flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-[#584b80] mb-4">
              Contact Info
            </h3>
            <p className="text-lg text-gray-800 mb-2">
              <strong>Clock Tower Laundry</strong>
            </p>
            <p className="text-gray-700 mb-1">
              123 Main Street, Dhaka, Bangladesh
            </p>
            <p className="text-gray-700 mb-1">
              Email: info@clocktowerlaundry.com
            </p>
            <p className="text-gray-700">Phone: +8801774647257</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
