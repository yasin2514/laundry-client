import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import b from "../../assets/b-0.jpg";

const Banner = () => {
  const primaryColor = "#4b3f6e";
  const whatsappMessage =
    "Hello, I would like to inquire about your laundry services.";

  return (
    <section
      id="banner"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${b})`, height: "calc(100vh - 80px)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl text-white"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight text-shadow-lg"
          >
            Fresh & Flawless Laundry Care
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light mb-2 text-white-50"
          >
            Your clothes deserve royal treatment — we deliver it.
          </motion.p>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="text-sm sm:text-base md:text-lg italic mb-6 text-purple-300 font-bold"
          >
            Clock Tower Laundry — Reliable, Quick & Affordable.
          </motion.p>

          {/* Highlights */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="text-xs sm:text-sm md:text-base mb-8 text-white-50"
          >
            24-hour turnaround · Eco-friendly wash · Doorstep pickup · Trusted
            by 5000+ happy customers
          </motion.p>

          {/* WhatsApp Button */}
          <motion.a
            href={`https://wa.me/8801774647257?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="inline-flex justify-center items-center gap-2 bg-[#6a5097] hover:bg-[#584b80] text-white font-medium py-3 px-5 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <FaWhatsapp size={18} />
            Message Us on WhatsApp
          </motion.a>
        </motion.div>
      </div>

      {/* Tailwind custom animation via style tag */}
      <style>{`
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0px ${primaryColor};
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 12px 4px ${primaryColor};
            opacity: 0.8;
          }
          100% {
            box-shadow: 0 0 0px ${primaryColor};
            opacity: 1;
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 1.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Banner;
