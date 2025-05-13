import React from "react";
import img from "../../assets/img1.avif";
import { FaTshirt, FaCheckCircle, FaTruck, FaLeaf } from "react-icons/fa"; // Added FaLeaf for Eco-Friendly
import { motion } from "framer-motion";

const primaryColor = "#61597a";

const Laundry = () => {
  return (
    <div className="bg-white w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center lg:flex lg:items-center lg:justify-between my-10">
        {/* Image section - Right-aligned with hover effects */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-5/12 flex justify-center lg:ml-12 mb-8 lg:mb-0 relative group"
        >
          <img
            src={img}
            alt="Laundry Service"
            className="w-3/4 sm:w-full h-auto rounded-lg shadow-xl transition-transform transform group-hover:scale-105 group-hover:rotate-3"
          />
          {/* Background overlay to enhance the image */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-transparent opacity-30 rounded-lg group-hover:opacity-40 transition-opacity"></div>
        </motion.div>

        {/* Text content section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-12 text-left"
        >
          <h2 className="text-3xl mb-10 font-bold text-[#584b80] sm:text-4xl sm:leading-10">
            We Make Laundry Easy
          </h2>
          <p className="mt-6 max-w-2xl text-xl text-gray-800 sm:mt-4">
            Get your laundry done quickly and conveniently. We offer a range of
            services to fit your needs. Whether it's a quick wash or full
            service, we've got you covered.
          </p>

          {/* Laundry Service List with Icons */}
          <div className="mt-8 space-y-6">
            {[
              [
                "Quick Wash",
                <FaTshirt />,
                "We provide a fast and efficient wash to get your clothes cleaned and ready to wear in no time. Perfect for those on-the-go.",
              ],
              [
                "Eco-Friendly Cleaning",
                <FaLeaf />,
                "Our eco-friendly cleaning process uses biodegradable detergents that are safe for the environment and your clothes.",
              ],
              [
                "Pickup & Delivery",
                <FaTruck />,
                "We offer free pickup and delivery, so you don’t have to worry about getting to the laundromat. Convenience at its best.",
              ],
              [
                "Dry Cleaning Services",
                <FaCheckCircle />,
                "Our dry cleaning services ensure your delicate clothes are treated with care, leaving them spotless and well-maintained.",
              ],
            ].map(([text, icon, description], index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl" style={{ color: primaryColor }}>
                  {icon}
                </div>
                <div>
                  <span
                    className="text-lg font-semibold block"
                    style={{ color: primaryColor }}
                  >
                    {text}
                  </span>
                  <p className="text-gray-600 text-sm mt-2">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Laundry;
