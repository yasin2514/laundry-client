import Navbar from "./components/Ui/Navbar";
import Footer from "./components/Ui/Footer";
import Banner from "./Sections/Home/Banner";
import Reviews from "./Sections/Home/Reviews";
import ContactUs from "./Sections/Home/ContactUs";
import Laundry from "./Sections/Home/Laundry";
import Experience from "./Sections/Home/Experience";
import Package from "./Sections/Home/Package";
import Services from "./Sections/Home/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Laundry />
      <Services />
      <Experience />
      <Package />
      <Reviews />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
