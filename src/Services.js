import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Image1 from "./assets/image/gallery/4.png";
const Services = () => {
  return (
    <>
      <Navbar />
      <div className="mt-56 w-full justify-center items-center flex flex-col mb-96">
        {/* <img src={LogoAbout} alt="" className="mb-5" /> */}
        <div>
          <h1 className="text-white text-center font-bold md:text-4xl mb-20">
            Services
          </h1>
        </div>
        <div className="md:w-1/3 "></div>
        <div className="text-white text-center md:w-1/3 font-semibold md:text-2xl ">
          We’ve been passionately producing over 100 high-quality background
          assets from popular anime visual styles such as virtual YouTuber and
          video games projects.
        </div>
        <div className="md:w-1/3"></div>
      </div>
      <div className="mt-56 w-full flex mb-96">
        <div className="md:w-1/5 ">
          <div className="mr-10 mb-10 rounded-lg ">
            <img className="servicesImage-small gallery " src={Image1} />
          </div>
          <div className="mr-10 mb-10 rounded-lg">
            <img className="servicesImage-small gallery " src={Image1} />
          </div>
        </div>
        <div className="md:w-1/5 rounded-lg">
          <div
            className="servicesImage-large gallery"
            style={{ backgroundImage: `url(${Image1})` }}
          ></div>
        </div>
        <div className="md:w-3/5 ">tes</div>
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
