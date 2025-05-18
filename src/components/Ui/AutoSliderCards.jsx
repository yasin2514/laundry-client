import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { FaCheckCircle, FaMoneyBillAlt, FaClock } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AutoSliderCards = () => {
  const [slidePercentage, setSlidePercentage] = useState(50);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const infoCards = [
    {
      icon: <FaClock className="text-[#6a5097] text-4xl mb-3 mx-auto" />,
      title: "Save Time & Money",
      desc: "Avoid trips to the laundromat — we pick up and deliver for free. Our fast, affordable service gives you more time and saves you money every week.",
    },
    {
      icon: <FaMoneyBillAlt className="text-[#6a5097] text-4xl mb-3 mx-auto" />,
      title: "Pay Online Easily",
      desc: "Enjoy secure, fast payments from any device. Manage your billing, schedule pickups, and track your orders — all in just a few clicks.",
    },
    {
      icon: <FaClock className="text-[#6a5097] text-4xl mb-3 mx-auto" />,
      title: "Quick Turnaround",
      desc: "We return your clothes clean and folded within 24 hours. Perfect for busy lifestyles and last-minute laundry needs.",
    },
    {
      icon: <FaCheckCircle className="text-[#6a5097] text-4xl mb-3 mx-auto" />,
      title: "Guaranteed Satisfaction",
      desc: "Your happiness matters. If you're not satisfied, we’ll make it right — no questions asked. Quality and care you can count on.",
    },
  ];

  useEffect(() => {
    const updateSlidePercentage = () => {
      const width = window.innerWidth;
      setSlidePercentage(width < 768 ? 100 : 50);
    };

    updateSlidePercentage();
    window.addEventListener("resize", updateSlidePercentage);
    return () => window.removeEventListener("resize", updateSlidePercentage);
  }, []);

  return (
    <div className="mt-16 max-w-7xl mx-auto ">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        showIndicators={true}
        infiniteLoop
        autoPlay
        interval={3000}
        centerMode
        centerSlidePercentage={slidePercentage}
        swipeable
        emulateTouch
      >
        {infoCards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className=" w-[94%] mx-auto min-h-[300px] flex flex-col justify-start "
          >
            <div className="bg-gradient-to-br from-purple-100 to-white shadow-xl rounded-3xl p-8 text-center border border-purple-200 min-h-[220px] ">
              {card.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default AutoSliderCards;
