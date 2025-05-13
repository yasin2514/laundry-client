import React from "react";
import {
  FaRegCheckCircle,
  FaRecycle,
  FaTshirt,
  FaDollarSign,
} from "react-icons/fa"; // Import icons
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-[#ecf2ff] text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-4xl font-extrabold mb-6 text-center text-[#584b80]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        {/* Subheading */}
        <motion.p
          className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We are a modern laundry service that combines convenience, speed, and
          quality. With pickup and delivery options, we aim to make laundry one
          less thing to worry about.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-between">
          {/* Wash & Fold */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center transform transition-all hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <FaTshirt className="text-4xl text-[#584b80] mb-4 mx-auto transition-transform duration-300 hover:text-[#45376a]" />
            <h3 className="text-xl font-semibold text-[#584b80] mb-3 transition-colors duration-300 hover:text-[#45376a]">
              Wash & Fold
            </h3>
            <p className="text-gray-700">
              Get your laundry done and folded with care, perfect for busy
              families and professionals in Riyadh and Jeddah.
            </p>
          </motion.div>

          {/* Dry Cleaning */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center transform transition-all hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaRegCheckCircle className="text-4xl text-[#584b80] mb-4 mx-auto transition-transform duration-300 hover:text-[#45376a]" />
            <h3 className="text-xl font-semibold text-[#584b80] mb-3 transition-colors duration-300 hover:text-[#45376a]">
              Dry Cleaning
            </h3>
            <p className="text-gray-700">
              Expert dry cleaning for delicate fabrics, suits, dresses, and
              more. Available in all major cities across Saudi Arabia.
            </p>
          </motion.div>

          {/* Eco-Friendly Laundry */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center transform transition-all hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <FaRecycle className="text-4xl text-[#584b80] mb-4 mx-auto transition-transform duration-300 hover:text-[#45376a]" />
            <h3 className="text-xl font-semibold text-[#584b80] mb-3 transition-colors duration-300 hover:text-[#45376a]">
              Eco-Friendly Laundry
            </h3>
            <p className="text-gray-700">
              We use environmentally friendly detergents and advanced machines
              that are safe for your clothes and the planet.
            </p>
          </motion.div>

          {/* Affordable Prices */}
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md text-center transform transition-all hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <FaDollarSign className="text-4xl text-[#584b80] mb-4 mx-auto transition-transform duration-300 hover:text-[#45376a]" />
            <h3 className="text-xl font-semibold text-[#584b80] mb-3 transition-colors duration-300 hover:text-[#45376a]">
              Affordable Prices
            </h3>
            <p className="text-gray-700">
              High-quality laundry services at competitive prices, designed to
              fit your budget.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
