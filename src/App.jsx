import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full relative bg-[#5A913B] text-white font-Rakkas">
      <Header />
      <Hero />
      <About />
      <Mics />
      <Footer />
    </div>
  );
};

export default App;
