import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-700">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((review) => (
            <div
              key={review}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <FaQuoteLeft className="text-green-500 text-2xl mb-4" />
              <p className="mb-2">
                Laundry service was fast and reliable. Clothes came back fresh
                and neatly folded!
              </p>
              <p className="text-sm font-semibold text-green-700">
                - Happy Customer
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
