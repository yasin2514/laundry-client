import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

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
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-3 text-[#584b80]">
          What Our Customers Say
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-20 sm:text-lg">
          We take pride in delivering quality laundry service to our customers.
          See what they have to say about their experience with us. Their
          satisfaction is our motivation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviewsData.map((review, index) => (
            <motion.div
              key={review.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.04,
                transition: { duration: 0.4, ease: "easeInOut" },
              }}
              className="relative bg-white px-6 pt-16 pb-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar Image */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>

              {/* Content */}
              <div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
