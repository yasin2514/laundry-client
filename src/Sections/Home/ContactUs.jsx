const ContactUs = () => {
  return (
    <section id="contact-us" className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-700">Contact Us</h2>
        <p className="mb-4 text-lg">
          We'd love to hear from you! Send us a message or give us a call.
        </p>
        <form className="grid gap-4 mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>
          <button className="btn bg-green-600 text-white hover:bg-green-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;