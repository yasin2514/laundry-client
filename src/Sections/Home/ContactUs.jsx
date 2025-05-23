import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { HiOutlineSupport } from "react-icons/hi";
import { MdLocalLaundryService } from "react-icons/md";

const ContactUs = () => {
  const whatsappMessage = `Hello, I would like to inquire about your laundry services.`;

  return (
    <section
      id="contact-us"
      className="py-20 bg-white text-gray-800 relative overflow-hidden"
    >
      {/* 🔵 Background Animated Shapes */}
      <motion.div
        className="absolute top-[-50px] right-[-60px] w-72 h-72 bg-purple-100 rounded-full z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-[100px] left-[-50px] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply blur-2xl opacity-40 z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 right-[-80px] w-56 h-56 bg-purple-50 rounded-full z-0 hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-4xl font-extrabold text-[#6a5097] mb-4 tracking-wide">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We’re just a message or visit away. Whether you need quick laundry
            help, have a custom request, or want to know more, feel free to
            connect with us.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#f9f9fb] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="text-4xl text-[#6a5097] mb-4">
              <MdLocalLaundryService />
            </div>
            <h3 className="text-xl font-semibold text-[#6a5097] mb-2">
              Why Choose Laundry King?
            </h3>
            <p className="text-gray-700 text-base flex-grow">
              Our experienced team uses premium detergents, handles garments
              with care, and ensures eco-friendly washing. We prioritize
              quality, punctuality, and customer satisfaction.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#f0eefc] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col text-center"
          >
            <div className="text-4xl text-[#6a5097] mb-4 mx-auto">
              <FaWhatsapp />
            </div>
            <h3 className="text-xl font-semibold text-[#6a5097] mb-2">
              Chat with Us Instantly
            </h3>
            <p className="text-gray-700 mb-6">
              Need support or want to schedule a pickup? Our team is ready on
              WhatsApp. Quick, reliable, and always available.
            </p>
            <a
              href={`https://wa.me/966557802506?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-[#6a5097] hover:bg-[#584b80] text-white font-medium py-3 px-5 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <FaWhatsapp size={18} />
              Message Us on WhatsApp
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#eef2fb] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            <div className="text-4xl text-[#6a5097] mb-4">
              <FaMapMarkerAlt />
            </div>
            <h3 className="text-xl font-semibold text-[#6a5097] mb-2">
              Visit Our Store
            </h3>
            <p className="text-gray-700 mb-4">
              Prefer in-person service? Drop by our laundry store and enjoy
              premium care with a smile. We're always ready to help.
            </p>
            <div className="w-full h-48 rounded-md overflow-hidden border">
              <iframe
                title="Laundry King Location"
                src="https://www.google.com/maps?q=clock+tower+makkah+saudi+arabia&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Contact Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#f8f8fc] rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3 text-gray-700 text-base">
            <FaPhoneAlt className="text-[#6a5097]" />
            <span>+966 5578 02506</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 text-base">
            <FaEnvelope className="text-[#6a5097]" />
            <span>rifatshikder056@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700 text-base">
            <HiOutlineSupport className="text-[#6a5097]" />
            <span>Support Hours: Open 24 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
