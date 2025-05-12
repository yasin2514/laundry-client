import React from "react";
import Main from "./Layout/Main";
import Navbar from "./components/Ui/Navbar";
import Footer from "./components/Ui/Footer";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Main />
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default App;
