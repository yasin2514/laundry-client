import React from "react";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Fresh & Clean Laundry Services
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Experience the best laundry service in town.
        </p>
        <a
          href="https://wa.me/9099479474747"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#1DA851] text-white font-bold py-3 px-6 rounded-full"
        >
          Contact Us on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Banner;
