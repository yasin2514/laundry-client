import React from "react";
import {
  FaRegCheckCircle,
  FaRecycle,
  FaTshirt,
  FaDollarSign,
} from "react-icons/fa"; // Import icons

const Services = () => {
  return (
    <section id="services" className="py-16 bg-[#ecf2ff] text-gray-800">
      {" "}
      {/* Changed background color */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-[#584b80]">
          Our Services
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-gray-700">
          We are a modern laundry service that combines convenience, speed, and
          quality. With pickup and delivery options, we aim to make laundry one
          less thing to worry about.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-between">
          {/* Wash & Fold */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaTshirt className="text-4xl text-[#584b80] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#584b80] mb-3">
              Wash & Fold
            </h3>
            <p className="text-gray-700">
              Get your laundry done and folded with care, perfect for busy
              families and professionals in Riyadh and Jeddah.
            </p>
          </div>

          {/* Dry Cleaning */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaRegCheckCircle className="text-4xl text-[#584b80] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#584b80] mb-3">
              Dry Cleaning
            </h3>
            <p className="text-gray-700">
              Expert dry cleaning for delicate fabrics, suits, dresses, and
              more. Available in all major cities across Saudi Arabia.
            </p>
          </div>

          {/* Eco-Friendly Laundry */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaRecycle className="text-4xl text-[#584b80] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#584b80] mb-3">
              Eco-Friendly Laundry
            </h3>
            <p className="text-gray-700">
              We use environmentally friendly detergents and advanced machines
              that are safe for your clothes and the planet.
            </p>
          </div>

          {/* Affordable Prices */}
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <FaDollarSign className="text-4xl text-[#584b80] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-[#584b80] mb-3">
              Affordable Prices
            </h3>
            <p className="text-gray-700">
              High-quality laundry services at competitive prices, designed to
              fit your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
