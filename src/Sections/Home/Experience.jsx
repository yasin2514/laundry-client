import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import deliveryImg from "../../assets/delivery.png"; // Replace with your image path

const Experience = () => {
  return (
    <div className="bg-[#f3f4f6] w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title & Intro */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[#584b80] sm:text-4xl mb-4">
            Experience the Clock Tower Laundry
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We are a professional Clock Tower Laundry. We provide a professional
            service that washes, dries, irons, and cleans customers’ clothes,
            bedding, and other textile items. This is a convenient service for
            busy people and for Hajj pilgrims and visitors who do not have the
            time or convenience to wash and care for their own clothes.
          </p>
        </motion.div>

        {/* Flex Section Container */}
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          {/* Section 1: Delivery Image */}
          <motion.div
            className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md min-h-[300px] flex flex-col justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={deliveryImg}
              alt="Laundry Delivery"
              className="rounded-xl transition-transform transform hover:scale-105 w-[50%]  max-w-[300px] mx-auto"
            />
          </motion.div>

          {/* Section 2: Why Choose Us */}
          <motion.div
            className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md min-h-[300px] flex flex-col justify-center text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#584b80] mb-3">
              Why Choose Our Laundry Service in Saudi Arabia?
            </h3>
            <p className="text-md text-gray-700 leading-relaxed">
              <strong>Fast & Reliable Service</strong>
              <br />
              Our fast and reliable service ensures that your clothes are
              cleaned and delivered on time. We always strive to maintain the
              quality of your clothes through professional care and expertise.
            </p>
          </motion.div>

          {/* Section 3: Call Now & Email */}
          <motion.div
            className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-md min-h-[300px] flex flex-col justify-center text-center lg:text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#584b80] mb-4">Call Now</h3>
            <a
              href="https://wa.me/966XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white rounded-full text-lg font-semibold hover:bg-[#20b954] transition "
            >
              <FaWhatsapp className="mr-2 text-2xl" />
              Chat on WhatsApp
            </a>
            <p className="mt-6 text-gray-800 text-md">
              OR
              <br />
              Mail Us Anytime:
              <br />
              <a
                href="mailto:info@freshmakkahlaundry.com"
                className="text-[#584b80]  font-semibold"
              >
                info@freshmakkahlaundry.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
