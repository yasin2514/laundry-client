import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviewsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Laundry service was fast and reliable. Clothes came back fresh and neatly folded!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Smith",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "Highly impressed with the service quality. The urgent laundry was delivered on time!",
    rating: 4,
  },
  {
    id: 3,
    name: "Fatima Noor",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Very professional and affordable. My abaya was cleaned with great care!",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
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
    <section id="reviews" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3 text-[#584b80]">
          What Our Customers Say
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          We take pride in delivering quality laundry service to our customers.
          See what they have to say about their experience with us. Their
          satisfaction is our motivation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {reviewsData.map((review, index) => (
            <motion.div
              key={review.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group bg-white p-6 rounded-xl shadow transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 group-hover:border-[#584b80] transition-all duration-300"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <FaQuoteLeft className="text-[#584b80] text-2xl mb-4" />
              </motion.div>
              <p className="mb-4 text-sm text-gray-700">{review.feedback}</p>
              <div className="flex justify-center mb-2 text-yellow-500">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm font-semibold text-gray-800">
                - {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
