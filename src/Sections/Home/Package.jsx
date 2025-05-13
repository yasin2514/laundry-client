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

import img1 from "../../assets/delivery.png";
import img2 from "../../assets/p-1.jpeg";
import img3 from "../../assets/p-2.jpg";
import img4 from "../../assets/p-2.jpg";
import img5 from "../../assets/img1.avif";
import img6 from "../../assets/img1.avif";
import img7 from "../../assets/img1.avif";
import img8 from "../../assets/img1.avif";
import img9 from "../../assets/img1.avif";
import img10 from "../../assets/img1.avif";
import img11 from "../../assets/img1.avif";
import img12 from "../../assets/img1.avif";
import img13 from "../../assets/img1.avif";
import img14 from "../../assets/img1.avif";
import img15 from "../../assets/img1.avif";
import img16 from "../../assets/img1.avif";

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
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleContactNow = (productName) => {
    const wpNumber = "+8801774647257";
    const message = `Hello, I am interested in your ${productName}.`;
    const url = `https://wa.me/${wpNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="packages" className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl mb-10 font-extrabold text-[#584b80] sm:text-4xl">
          Our Laundry Packages
        </h2>
        <p className="mb-12 text-lg text-gray-700 mx-auto max-w-2xl">
          We offer a wide variety of laundry services to suit your needs, from
          normal laundry to urgent services. Our expert team ensures your
          clothes are cleaned, pressed, and delivered with care and efficiency.
        </p>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-3 py-5">
                <div className="relative border shadow-md hover:shadow-2xl border-gray-300 overflow-hidden bg-white rounded-2xl h-[360px] group transition-all duration-500 flex flex-col">
                  {/* Image */}
                  <div
                    className="w-full transition-all duration-500 group-hover:h-[120px] mt-3"
                    style={{
                      backgroundImage: `url(${product.image})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain", // Ensures the image covers the container
                      backgroundAttachment: "fixed", // Keeps the image fixed when scrolling
                      height: "100%", // You can modify this height as per your requirement
                    }}
                  ></div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-between flex-grow px-4 py-4 bg-white relative">
                    {/* Name */}
                    <h4 className="text-lg font-bold text-[#584b80] text-center mb-2">
                      {product.name}
                    </h4>

                    {/* Details - hidden normally */}
                    <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[200px] transition-all duration-500 overflow-hidden mb-3">
                      <ul className="text-sm text-gray-600 text-left space-y-2">
                        {product.description.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <FaCheckCircle className="text-[#584b80]" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Now Button */}
                    <button
                      onClick={() => handleContactNow(product.name)}
                      className="w-full bg-[#5a4d8e] text-white py-2 px-4 rounded-xl hover:bg-[#4a3c6d] hover:scale-[1.03] transition-all flex items-center justify-center"
                    >
                      <FaWhatsapp className="mr-2" /> Contact Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Arrows */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              className="text-2xl text-gray-700 bg-white p-2 rounded-full shadow hover:bg-gray-200"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              className="text-2xl text-gray-700 bg-white p-2 rounded-full shadow hover:bg-gray-200"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
