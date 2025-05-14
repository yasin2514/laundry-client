import React, { useEffect, useRef } from "react";
import img from "../../assets/i-1.jpg";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
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
    <section className="relative bg-white py-16 px-6 lg:px-16 overflow-hidden">
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
        className="absolute top-1/2 left-[-80px] w-56 h-56 bg-purple-50 rounded-full z-0 hidden md:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center z-10">
        <motion.div
          className="relative overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={img}
            alt="Laundry Woman"
            className="rounded-2xl w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="absolute bottom-5 left-5 bg-[#6a5097] text-white px-5 py-2 rounded-full text-lg font-bold shadow-md animate-bounce">
            25 years of experience
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-purple-500 font-semibold text-md mb-2">
            More than 25 Years of Experience
          </h4>
          <h2 className="text-4xl font-extrabold mb-5 text-[#6a5097] leading-tight">
            We are Passionate About Laundry
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            We are professionals in the laundry and dry cleaning business,
            staying up to date on the latest technologies, cleaning methods, and
            solutions for dealing with stains or delicate fabrics. We follow the
            highest standards of integrity and environmental safety. We’re
            passionate about making you think differently about laundry!
          </p>

          <ul className="mb-6 space-y-3 text-lg">
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-[#6a5097] mr-3 text-lg" /> 100%
              Customer Satisfaction
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-[#6a5097] mr-3 text-lg" /> Free
              Collection & Delivery
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-[#6a5097] mr-3 text-lg" />
              Affordable Prices
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-[#6a5097] mr-3 text-lg" /> Best
              Quality
            </li>
          </ul>

          <div className="flex items-center text-[#6a5097] font-bold text-lg">
            <FaPhoneAlt className="mr-2" /> 1 (800) 765-43-21
          </div>
        </motion.div>
      </div>

      {/* Increased gap between sections */}
      <div className="mt-24 relative z-10">
        <AutoSliderCards />
      </div>
    </section>
  );
};

export default About;
