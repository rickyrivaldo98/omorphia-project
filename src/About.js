import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import LogoAbout from "./assets/image/logoabout.svg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mt-40 w-full justify-center items-center flex flex-col mb-96">
        <img src={LogoAbout} alt="" className="mb-5" />
        <div className="md:w-1/3 "></div>
        <div className="text-white text-center md:w-1/3 font-bold md:text-2xl ">
          We are digging tunnels in creativity and paving the way for
          aesthetics. The Phantom rules. We follow him crafting brands,
          packaging, books – illustrating all the way into this occult
          pilgrimage. How we do it.
        </div>
        <div className="md:w-1/3"></div>
      </div>

      <Footer />
    </>
  );
};

export default About;
