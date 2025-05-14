import React from "react";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import { FaCheckCircle, FaMoneyBillAlt, FaClock } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AutoSliderCards = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

 const infoCards = [
  {
    icon: <FaClock className="text-[#6a5097] text-4xl mb-3 mx-auto" />,
    title: "Save Time & Money",
    desc: "No more wasted time driving to laundromats. We pickup and deliver for free! Our efficient process ensures you save both time and money while enjoying fresh, clean clothes. Let us handle the laundry so you can focus on what matters most.",
  },
  {
    icon: <FaMoneyBillAlt className="text-[#6a5097] text-4xl mb-3 mx-auto" />,
    title: "Pay Online in Seconds",
    desc: "Manage your account and billing online from any device. Our secure payment system makes transactions quick and hassle-free. Schedule, track, and pay — all in just a few taps!",
  },
  {
    icon: <FaClock className="text-[#6a5097] text-4xl mb-3 mx-auto" />,
    title: "Fast Turnaround",
    desc: "Get your laundry back fresh and folded within 24 hours. We work around the clock to meet tight schedules without compromising quality. Perfect for busy individuals, families, and professionals.",
  },
  {
    icon: <FaCheckCircle className="text-[#6a5097] text-4xl mb-3 mx-auto" />,
    title: "Satisfaction Guarantee",
    desc: "We make sure every customer is fully satisfied with our service. If something’s not right, we’ll make it right — it’s that simple. Your comfort and trust are our top priorities.",
  },
];


  return (
    <div className="mt-16 max-w-7xl mx-auto">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        infiniteLoop
        autoPlay
        interval={3000}
        centerMode
        centerSlidePercentage={50} // Display two cards at a time
        swipeable
        emulateTouch
        className="gap-6" // Adds gap between the cards
      >
        {infoCards.map((card, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-gradient-to-br from-purple-100 to-white shadow-xl rounded-3xl p-8 text-center border border-purple-200 w-[94%]  mx-auto" // Set width to 47% and height to 200px
          >
            {card.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm">{card.desc}</p>
          </motion.div>
        ))}
      </Carousel>
    </div>
  );
};

export default AutoSliderCards;
