import Navbar from "./components/Ui/Navbar";
import Footer from "./components/Ui/Footer";
import Banner from "./Sections/Home/Banner";
import Service from "./Sections/Home/Service";
import AboutUs from "./Sections/Home/AboutUs";
import Reviews from "./Sections/Home/Reviews";
import ContactUs from "./Sections/Home/ContactUs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Service />
      <AboutUs />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
