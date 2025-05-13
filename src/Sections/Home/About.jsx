import React, { useEffect, useRef } from "react";
import img from "../../assets/img1.avif";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaMoneyBillAlt,
  FaClock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AutoSliderCards from "../../components/Ui/AutoSliderCards";

const About = () => {
  const scrollRef = useRef(null);
  const cardWidth = 320;

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      scrollContainer.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-6 lg:px-16">
      {/* Main About Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={img}
            alt="Laundry Woman"
            className="rounded-2xl shadow-xl w-full h-auto"
          />
          <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-5 py-2 rounded-full text-lg font-bold shadow-md">
            25 years of experience
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-purple-600 font-semibold text-md mb-2">
            More than 25 Years of Experience
          </h4>
          <h2 className="text-4xl font-extrabold mb-5 text-[#584b80] leading-tight">
            We are Passionate About Laundry
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            We are professionals in the laundry and dry cleaning business,
            staying up to date on the latest technologies, cleaning methods, and
            solutions for dealing with stains or delicate fabrics. We follow the
            highest standards of integrity and environmental safety. We’re
            passionate about making you think differently about laundry!
          </p>

          <ul className="mb-6 space-y-3">
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-purple-600 mr-3 text-lg" /> 100%
              Customer Satisfaction
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-purple-600 mr-3 text-lg" /> Free
              Collection & Delivery
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-purple-600 mr-3 text-lg" />
              Affordable Prices
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-purple-600 mr-3 text-lg" /> Best
              Quality
            </li>
          </ul>

          <div className="flex items-center text-purple-700 font-bold text-xl">
            <FaPhoneAlt className="mr-2" /> 1 (800) 765-43-21
          </div>
        </motion.div>
      </div>

      {/* Auto-Sliding Cards Section */}
      <AutoSliderCards />
    </section>
  );
};

export default About;
