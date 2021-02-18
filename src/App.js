import "./App.css";
import React, { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div className="bg-black">
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
 
}

export default App;
