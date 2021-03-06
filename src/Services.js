import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="mt-56 w-full justify-center items-center flex flex-col mb-96">
        {/* <img src={LogoAbout} alt="" className="mb-5" /> */}
        <div className="md:w-1/3 "></div>
        <div className="text-white text-center md:w-1/3 font-bold md:text-2xl ">
          We are digging tunnels in creativity and paving the way for
          aesthetics. The Phantom rules. We follow him crafting brands,
          packaging, books – illustrating all the way into this occult
          pilgrimage. How we do it.
        </div>
        <div className="md:w-1/3"></div>
      </div>
      <div className="mt-56 w-full h-full flex mb-96">
        <div className="md:w-1/5  bg-black">
          <div className="mr-10 mb-10 bg-white"> Hai </div>
          <div className="mr-10 bg-white"> Hai </div>
        </div>
        <div className="md:w-1/5  bg-white"></div>
        <div className="md:w-3/5  bg-black"></div>
      </div>
      <div className="mt-56 w-full h-full flex mb-96">
        <div className="md:w-3/5  bg-black"></div>
        <div className="md:w-1/5  bg-white"></div>
        <div className="md:w-1/5  bg-black">
          <div className="ml-10 mb-10 bg-white"> Hai </div>
          <div className="ml-10 bg-white"> Hai </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
