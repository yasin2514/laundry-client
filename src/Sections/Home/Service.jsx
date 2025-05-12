import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For left and right buttons

const Service = () => {
  const sliderRef = useRef(null); // Reference to the slider

  // Product data with images
  const products = [
    {
      id: 1,
      name: "THOBE",
      image: "https://via.placeholder.com/150",
      normalWashIron: 12,
      urgentWashIron: 20,
    },
    {
      id: 2,
      name: "THOBE COL",
      image: "https://via.placeholder.com/150",
      normalWashIron: 15,
      urgentWashIron: 25,
    },
    {
      id: 3,
      name: "IHRAM",
      image: "https://via.placeholder.com/150",
      normalWashIron: 15,
      urgentWashIron: 30,
    },
    {
      id: 4,
      name: "GHUTRA",
      image: "https://via.placeholder.com/150",
      normalWashIron: 8,
      urgentWashIron: 15,
    },
    {
      id: 5,
      name: "SHEMAGH",
      image: "https://via.placeholder.com/150",
      normalWashIron: 8,
      urgentWashIron: 15,
    },
    {
      id: 6,
      name: "SIRWAL TAWLL",
      image: "https://via.placeholder.com/150",
      normalWashIron: 6,
      urgentWashIron: 10,
    },
    {
      id: 7,
      name: "SIRWALTAWIL",
      image: "https://via.placeholder.com/150",
      normalWashIron: 5,
      urgentWashIron: 6,
    },
    {
      id: 8,
      name: "PANTS",
      image: "https://via.placeholder.com/150",
      normalWashIron: 10,
      urgentWashIron: 15,
    },
    {
      id: 9,
      name: "SHIRT",
      image: "https://via.placeholder.com/150",
      normalWashIron: 8,
      urgentWashIron: 12,
    },
    {
      id: 10,
      name: "COAT/PANT",
      image: "https://via.placeholder.com/150",
      normalWashIron: 35,
      urgentWashIron: 40,
    },
    {
      id: 11,
      name: "PAK.DR.",
      image: "https://via.placeholder.com/150",
      normalWashIron: 15,
      urgentWashIron: 20,
    },
    {
      id: 12,
      name: "SUPATTA",
      image: "https://via.placeholder.com/150",
      normalWashIron: 3,
      urgentWashIron: 5,
    },
    {
      id: 13,
      name: "FACE COVER",
      image: "https://via.placeholder.com/150",
      normalWashIron: 5,
      urgentWashIron: 2,
    },
    {
      id: 14,
      name: "T-SHIRT",
      image: "https://via.placeholder.com/150",
      normalWashIron: 5,
      urgentWashIron: 10,
    },
    {
      id: 15,
      name: "CHILDCLOTHET",
      image: "https://via.placeholder.com/150",
      normalWashIron: 4,
      urgentWashIron: 8,
    },
    {
      id: 16,
      name: "LONGY/WAZER",
      image: "https://via.placeholder.com/150",
      normalWashIron: 8,
      urgentWashIron: 15,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="service" className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#584b80]">
          Our Laundry Services
        </h2>
        <p className="mb-8 text-lg text-gray-700">
          We offer a wide variety of laundry services to suit your needs, from
          normal laundry to urgent services.
        </p>

        <div className="relative border">
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white py-8  text-center space-y-4 gap-6" // Add gap class here
              >
                {/* Product Image */}
                <div className="border shadow-lg mx-6 rounded-lg p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2 text-[#584b80]">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    Normal Wash + Iron:{" "}
                    <span className="font-bold">
                      {product.normalWashIron} SAR
                    </span>
                  </p>
                  <p className="text-sm text-gray-600">
                    Urgent Wash + Iron:{" "}
                    <span className="font-bold">
                      {product.urgentWashIron} SAR
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom left and right buttons */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <button
              className="text-2xl text-gray-700 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
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

export default Service;
