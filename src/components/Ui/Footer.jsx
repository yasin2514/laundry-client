import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Navbar Section */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <a href="#home" className="hover:text-green-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-us" className="hover:text-green-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#service" className="hover:text-green-500">
                  Services
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-green-500">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#contact-us" className="hover:text-green-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 mx-4"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-600 mx-4"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 mx-4"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 mx-4"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Footer Copyright Section */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Laundry Service. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
