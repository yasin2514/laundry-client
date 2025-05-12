const Service = () => {
  return (
    <section id="service" className="py-16 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Our Services</h2>
        <p className="mb-8 text-lg">
          We provide top-notch laundry services at your convenience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-semibold mb-2">Wash & Fold</h4>
            <p>We wash, dry, and fold your laundry with care.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-semibold mb-2">Dry Cleaning</h4>
            <p>Professional dry cleaning for your premium clothes.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
            <h4 className="text-xl font-semibold mb-2">Ironing</h4>
            <p>Expert ironing services to keep you looking sharp.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
