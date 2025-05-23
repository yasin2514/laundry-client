import React from "react";
import img from "../../assets/i-7.png";
import { FaTshirt, FaCheckCircle, FaTruck, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const primaryColor = "#6a5097";

const Laundry = () => {
  return (
    <div className="relative bg-white w-full py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Shapes */}
      <motion.div
        className="absolute top-[-50px] left-[-60px] w-72 h-72 bg-purple-100 rounded-full z-0"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-[200px] right-[-50px] w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply blur-2xl opacity-40 z-0"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>

      <motion.div
        className="absolute bottom-0 left-[-80px] w-56 h-56 bg-purple-50 rounded-full z-0 hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto lg:flex lg:items-center lg:justify-between my-10 z-10">
        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center lg:ml-0 mb-0 relative group overflow-hidden"
        >
          <img
            src={img}
            alt="Laundry Service"
            className="w-full h-auto transition-transform transform group-hover:scale-105 group-hover:rotate-3 max-w-[600px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-transparent opacity-30 rounded-lg group-hover:opacity-40 transition-opacity"></div>
        </motion.div>

        {/* Text section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:w-1/2 lg:pl-12 text-left mt-0"
        >
          <h2 className="text-4xl mb-10 mt-10 text-center lg:text-start lg:mt-0 font-extrabold text-[#6a5097] sm:text-4xl sm:leading-10">
            We Make Laundry Easy
          </h2>
          <p className="mt-6 max-w-2xl text-base text-gray-700 flex-grow sm:mt-4">
            Get your laundry done quickly and conveniently. We offer a range of
            services to fit your needs. Whether it's a quick wash or full
            service, we've got you covered.
          </p>

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
