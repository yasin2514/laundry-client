import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    name: "Ashlam Khan",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "Laundry service was fast and reliable. Clothes came back fresh and neatly folded! My experience was excellent, and I will definitely come back again.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sheik Khadem",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    feedback:
      "I was very impressed with the quality of service. The urgent laundry was delivered on time! The service was top-notch, and I highly recommend it.",
    rating: 4,
  },
  {
    id: 3,
    name: "Al Ahli Hashem",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    feedback:
      "Very professional and affordable. My abaya was cleaned with great care! I can't wait to use the service again. Highly satisfied!",
    rating: 5,
  },
  {
    id: 4,
    name: "Amir Hossain",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    feedback:
      "Fantastic service! The laundry was perfect, and the delivery was right on time. I'll definitely use them again.",
    rating: 4,
  },
  {
    id: 5,
    name: "Rafique Alam",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    feedback:
      "Excellent experience, very quick and affordable. My clothes were returned as good as new!",
    rating: 5,
  },
  {
    id: 6,
    name: "Samiul Karim",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
    feedback:
      "Superb quality of laundry service, and I loved the packaging! Highly recommended!",
    rating: 5,
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const Reviews = () => {
  const sliderRef = useRef(null);

  return (
    <section id="reviews" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl mb-10 font-extrabold text-[#584b80] sm:text-4xl">
          What Our Customers Say
        </h2>
        <p className="mb-12 text-lg text-gray-700 mx-auto max-w-2xl">
          We take pride in delivering quality laundry service to our customers.
          See what they have to say about their experience with us. Their
          satisfaction is our motivation.
        </p>

        <div className="relative">
          <Slider ref={sliderRef} {...settings}>
            {reviewsData.map((review) => (
              <div key={review.id} className="px-3 py-10">
                <div className="relative bg-white px-6 pt-16 pb-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col min-h-[300px]">
                  {/* Avatar Image */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-between flex-grow">
                    <FaQuoteLeft className="text-[#a08ed9] text-2xl mb-4" />
                    <p className="mb-5 text-gray-700 text-sm sm:text-base leading-relaxed">
                      {review.feedback}
                    </p>
                    <div className="flex justify-center mb-2 text-yellow-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-base font-semibold text-[#584b80]">
                      - {review.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Slider Arrows */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
            <button
              className="bg-[#584b80] text-white p-2 rounded-full shadow-lg focus:outline-none hover:bg-[#6a5097] transition duration-300 ease-in-out transform hover:scale-110"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FaChevronLeft size={25} />
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2">
            <button
              className="bg-[#584b80] text-white p-2 rounded-full shadow-lg focus:outline-none hover:bg-[#6a5097] transition duration-300 ease-in-out transform hover:scale-110"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FaChevronRight size={25} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
