import React from "react";
import img from "../../assets/img1.avif";
import { FaTshirt, FaCheckCircle, FaTruck } from "react-icons/fa";

const primaryColor = "#61597a";

const Laundry = () => {
  return (
    <div className="bg-white w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center lg:flex lg:items-center lg:justify-between my-10 ">
        {/* Image section */}
        <div className="lg:w-5/12 flex flex-column justify-content-center ">
          <img
            src={img}
            alt="Laundry Service"
            className="w-full h-auto rounded-lg shadow-lg mx-auto transition-transform transform hover:scale-105"
          />
        </div>

        {/* Text content section */}
        <div className="mt-8   lg:mt-0 lg:w-1/2 lg:pl-12 ">
          <h2 className="text-3xl mb-10 font-extrabold text-[#584b80] sm:text-4xl sm:leading-10">
            We Make Laundry Easy
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-800 sm:mt-4">
            Get your laundry done quickly and conveniently. We offer a range of
            services to fit your needs. Whether it's a quick wash or full
            service, we've got you covered.
          </p>

          {/* Laundry Service List with Icons */}
          <div className="mt-8 space-y-6 text-left">
            <div className="flex items-center space-x-4 transition-transform transform ">
              <FaTshirt className="text-3xl" style={{ color: primaryColor }} />
              <span
                className="text-lg font-semibold"
                style={{ color: primaryColor }}
              >
                Quick Wash
              </span>
            </div>
            <div className="flex items-center space-x-4 transition-transform transform">
              <FaCheckCircle
                className="text-3xl"
                style={{ color: primaryColor }}
              />
              <span
                className="text-lg font-semibold"
                style={{ color: primaryColor }}
              >
                Eco-Friendly Cleaning
              </span>
            </div>
            <div className="flex items-center space-x-4 transition-transform transform">
              <FaTruck className="text-3xl" style={{ color: primaryColor }} />
              <span
                className="text-lg font-semibold"
                style={{ color: primaryColor }}
              >
                Pickup & Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laundry;
