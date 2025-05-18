import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

import img1 from "../../assets/p-1.png";
import img2 from "../../assets/p-2.png";
import img3 from "../../assets/p-3.png";
import img4 from "../../assets/p-4.png";
import img5 from "../../assets/p-5.png";
import img6 from "../../assets/p-6.png";
import img7 from "../../assets/p-7.png";
import img8 from "../../assets/p-8.png";
import img9 from "../../assets/p-9.png";
import img10 from "../../assets/p-10.png";
import img11 from "../../assets/p-11.png";
import img12 from "../../assets/p-12.png";
import img13 from "../../assets/p-13.png";
import img14 from "../../assets/p-14.png";
import img15 from "../../assets/p-15.png";
import img16 from "../../assets/p-16.png";

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-[#584b80] hover:bg-[#6a5097] text-white rounded-full p-3 z-20 hover:scale-110 transition-all duration-300 shadow-md"
    onClick={onClick}
    aria-label="Previous"
  >
    <FaChevronLeft size={18} />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-[#584b80] hover:bg-[#6a5097] text-white rounded-full p-3 z-20 hover:scale-110 transition-all duration-300 shadow-md"
    onClick={onClick}
    aria-label="Next"
  >
    <FaChevronRight size={18} />
  </button>
);

const Package = () => {
  const sliderRef = useRef(null);

  const products = [
    { id: 1, name: "THOBE", image: img1 },
    { id: 2, name: "THOBE COL", image: img2 },
    { id: 3, name: "IHRAM", image: img3 },
    { id: 4, name: "GHUTRA", image: img4 },
    { id: 5, name: "PANTS", image: img5 },
    { id: 6, name: "SHIRT", image: img6 },
    { id: 7, name: "SUIT", image: img7 },
    { id: 8, name: "T-SHIRT", image: img8 },
    { id: 9, name: "BED SHEET", image: img9 },
    { id: 10, name: "CURTAIN", image: img10 },
    { id: 11, name: "BLANKET", image: img11 },
    { id: 12, name: "PILLOW COVER", image: img12 },
    { id: 13, name: "SOCKS", image: img13 },
    { id: 14, name: "TOWEL", image: img14 },
    { id: 15, name: "ABAYA", image: img15 },
    { id: 16, name: "JACKET", image: img16 },
  ].map((product) => ({
    ...product,
    description: [
      "Normal Laundry (Wash + Iron)",
      "Urgent Laundry (Wash + Iron)",
      "Normal Iron Only",
      "Urgent Iron Only",
    ],
  }));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    vertical: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          vertical: false,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          vertical: false,
          verticalSwiping: true,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 12,
          slidesToScroll: 0,
          vertical: true,
          verticalSwiping: false,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  const handleContactNow = (productName) => {
    const wpNumber = "966557802506"; // WhatsApp number
    const message = `Hello, I am interested in your ${productName}.`;
    const url = `https://wa.me/${wpNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="packages"
      className="relative py-16 bg-white text-gray-800 overflow-hidden"
    >
      {/* Background Animated Shapes */}
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl mb-10 font-extrabold text-[#6a5097] sm:text-4xl">
          Our Laundry Packages
        </h2>
        <p className="mb-12 text-lg text-gray-700 mx-auto max-w-2xl">
          We offer a wide variety of laundry services to suit your needs, from
          normal laundry to urgent services. Our expert team ensures your
          clothes are cleaned, pressed, and delivered with care and efficiency.
        </p>

        <div className="relative px-3 lg:px-0">
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-3 py-5">
                <div className="relative border shadow-md hover:shadow-2xl border-gray-300 overflow-hidden bg-white rounded-2xl h-[360px] group transition-all duration-500 flex flex-col">
                  {/* Product Image */}
                  <div
                    className="w-full transition-all duration-500 group-hover:h-[120px] mt-3"
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      backgroundAttachment: "fixed",
                      height: "100%",
                    }}
                  ></div>

                  {/* Product Details */}
                  <div className="flex flex-col justify-between flex-grow px-4 py-4 bg-white relative">
                    <h4 className="text-lg font-bold text-[#6a5097] text-center mb-2">
                      {product.name}
                    </h4>

                    {/* Description List */}
                    <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-500 overflow-hidden mb-3">
                      <ul className="text-sm text-gray-600 text-left space-y-2">
                        {product.description.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <FaCheckCircle className="text-[#6a5097] text-sm" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Button */}
                    <button
                      onClick={() => handleContactNow(product.name)}
                      className="mt-auto bg-[#6a5097] hover:bg-[#584b80] text-white py-2 px-4 rounded-full text-sm flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                    >
                      <FaWhatsapp className="text-lg" /> Contact Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Package;
