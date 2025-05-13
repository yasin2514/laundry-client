import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import deliveryImg from "../../assets/i-5.webp"; // Replace with your image path

const Experience = () => {
  return (
    <div className="bg-[#f3f4f6] w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title & Intro */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-[#584b80] sm:text-4xl mb-4">
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
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between ">
         {/* Section 1: Delivery Image */}
<motion.div
  className="w-full lg:w-1/3 rounded-xl shadow-xxl min-h-[300px] border flex justify-center items-center transform transition-all duration-500 hover:shadow-2xl overflow-hidden"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <img
    src={deliveryImg}
    alt="Laundry Delivery"
    className="w-full h-full object-cover"
  />
</motion.div>


          {/* Section 2: Why Choose Us */}
          <motion.div
            className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-xl min-h-[300px] flex flex-col justify-center text-center lg:text-left transform transition-all duration-500 hover:shadow-2xl hover:bg-[#e8e8e8]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#584b80] mb-3 transform transition-all duration-300 hover:text-[#46396a]">
              Why Choose Our Laundry Service in Saudi Arabia?
            </h3>
            <p className="text-md text-gray-700 leading-relaxed transform transition-all duration-300 hover:text-[#46396a]">
              <strong>Fast & Reliable Service</strong>
              <br />
              Our fast and reliable service ensures that your clothes are
              cleaned and delivered on time. We always strive to maintain the
              quality of your clothes through professional care and expertise.
            </p>
          </motion.div>

          {/* Section 3: Call Now & Email */}
          <motion.div
            className="w-full lg:w-1/3 bg-white p-6 rounded-xl shadow-xl min-h-[300px] flex flex-col justify-center text-center lg:text-center transform transition-all duration-500 hover:shadow-2xl hover:bg-[#e8e8e8]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#584b80] mb-4 transform transition-all duration-300 hover:text-[#46396a]">
              Call Now
            </h3>
            <a
              href="https://wa.me/966XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#584b80] text-white rounded-full text-lg font-semibold hover:bg-[#46396a] transition-all duration-300 transform hover:scale-105"
            >
              <FaWhatsapp className="mr-2 text-2xl" />
              Chat on WhatsApp
            </a>
            <p className="mt-6 text-gray-800 text-md transform transition-all duration-300 hover:text-[#46396a]">
              OR
              <br />
              Mail Us Anytime:
              <br />
              <a
                href="mailto:info@freshmakkahlaundry.com"
                className="text-[#584b80] font-semibold hover:text-[#46396a]"
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
