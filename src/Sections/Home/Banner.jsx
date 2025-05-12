import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import b from "../../assets/banner.jpg";

const Banner = () => {
  const primaryColor = "#4b3f6e";

  return (
    <section
      id="banner"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${b})`, height: "calc(100vh - 80px)" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-white"
        >
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]"
          >
            Fresh & Flawless Laundry Care
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-2 text-white-50"
          >
            Your clothes deserve royal treatment — we deliver it.
          </motion.p>

          {/* Sub-line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.9 }}
            className="text-sm sm:text-base md:text-lg italic mb-4 text-purple-300 font-bold"
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
            href="https://wa.me/8801774647257"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="group inline-flex items-center justify-center gap-2 font-semibold py-3 px-6 rounded-full transition-all duration-300 border-2 text-white relative overflow-hidden"
            style={{
              backgroundColor: primaryColor,
              borderColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.borderColor = "white";
              e.currentTarget.style.color = "white";
              e.currentTarget.querySelector("span").style.transform =
                "rotate(45deg)";
              e.currentTarget.querySelector("span").style.top = "-12px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = primaryColor;
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.querySelector("span").style.transform =
                "rotate(0deg)";
              e.currentTarget.querySelector("span").style.top = "0";
            }}
          >
            <span
              className="absolute top-0 left-0 w-4 h-4 bg-white opacity-30 rounded-full transform origin-top-right transition-all duration-300"
              style={{
                zIndex: -1,
              }}
            ></span>
            <FaWhatsapp className="text-inherit text-lg" />
            <span className="ml-2">Contact Us on WhatsApp</span>
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
