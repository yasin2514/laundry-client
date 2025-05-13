import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaWhatsapp } from "react-icons/fa";

import img1 from "../../assets/delivery.png";
import img2 from "../../assets/delivery.png";
import img3 from "../../assets/delivery.png";
import img4 from "../../assets/delivery.png";
import img5 from "../../assets/delivery.png";
import img6 from "../../assets/delivery.png";
import img7 from "../../assets/delivery.png";
import img8 from "../../assets/delivery.png";
import img9 from "../../assets/delivery.png";
import img10 from "../../assets/delivery.png";
import img11 from "../../assets/delivery.png";
import img12 from "../../assets/delivery.png";
import img13 from "../../assets/delivery.png";
import img14 from "../../assets/delivery.png";
import img15 from "../../assets/delivery.png";
import img16 from "../../assets/delivery.png";

const Package = () => {
  const sliderRef = useRef(null);
  const [expandedDescription, setExpandedDescription] = useState(null);

  const products = [
    {
      id: 1,
      name: "THOBE",
      image: img1,
      description:
        "A traditional robe worn by men. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 2,
      name: "THOBE COL",
      image: img2,
      description:
        "A refined thobe with a collar. Includes wash, iron, and urgent service options. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 3,
      name: "IHRAM",
      image: img3,
      description:
        "Special wear for pilgrimage, comfortable and light. Laundry and pressing options included. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 4,
      name: "GHUTRA",
      image: img4,
      description:
        "Traditional head covering with full laundry support. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 5,
      name: "PANTS",
      image: img5,
      description:
        "Everyday pants with wash, iron, and express options. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 6,
      name: "SHIRT",
      image: img6,
      description:
        "Formal and casual shirts cleaned and pressed to perfection. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 7,
      name: "SUIT",
      image: img7,
      description:
        "2-piece and 3-piece suits. Professional wash and press available. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 8,
      name: "T-SHIRT",
      image: img8,
      description:
        "Casual wear laundry with fast and reliable service. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 9,
      name: "BED SHEET",
      image: img9,
      description:
        "Single and double bed sheets cleaned and ironed carefully. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 10,
      name: "CURTAIN",
      image: img10,
      description:
        "Delicate curtain cleaning for home and office. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 11,
      name: "BLANKET",
      image: img11,
      description:
        "Thick blankets washed and dried with care. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 12,
      name: "PILLOW COVER",
      image: img12,
      description:
        "Fresh and soft pillow covers after every wash. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 13,
      name: "SOCKS",
      image: img13,
      description:
        "Small item laundry like socks handled professionally. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 14,
      name: "TOWEL",
      image: img14,
      description:
        "Towel cleaning with skin-friendly detergent and fabric care. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 15,
      name: "ABAYA",
      image: img15,
      description:
        "Special care for delicate abayas with ironing options. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
    {
      id: 16,
      name: "JACKET",
      image: img16,
      description:
        "Winter jackets washed using gentle care and drying methods. Normal Laundry (Wash + Iron) + Urgent Laundry + Iron Only options available.",
    },
  ];

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

  const handleToggleDescription = (id) => {
    setExpandedDescription(expandedDescription === id ? null : id);
  };

  return (
    <section id="service" className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl mb-10 font-extrabold text-[#584b80] sm:text-4xl">
          Our Laundry Packages
        </h2>
        <p className="mb-8 text-lg text-gray-700 mx-auto max-w-2xl">
          We offer a wide variety of laundry services to suit your needs, from
          normal laundry to urgent services. Our expert team ensures your
          clothes are cleaned, pressed, and delivered with care and efficiency.
        </p>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white py-8 text-center space-y-4 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="shadow-lg bg-gray-100 mx-6 rounded-lg p-6 flex flex-col h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-semibold mb-2 text-[#584b80]">
                    {product.name}
                  </h4>

                  <p className="text-xs text-gray-600 mb-2">
                    {expandedDescription === product.id
                      ? product.description
                      : `${product.description.slice(0, 50)}...`}
                  </p>
                  <button
                    className="text-xs text-blue-500 mb-4"
                    onClick={() => handleToggleDescription(product.id)}
                  >
                    {expandedDescription === product.id
                      ? "See Less"
                      : "See More"}
                  </button>

                  <button
                    onClick={() => handleContactNow(product.name)}
                    className="bg-[#5a4d8e] text-white py-2 px-8 rounded-lg mt-auto transition-all hover:bg-[#4a3c6d] transform hover:scale-110 flex items-center justify-center"
                  >
                    <FaWhatsapp className="mr-2" /> Contact Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom arrows */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              className="text-2xl text-gray-700 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <button
              className="text-2xl text-gray-700 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
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
