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
        <div className="md:w-1/5  ">
          <div className="mr-10 mb-10 rounded-md ">
            <img className="servicesImage-small service-image " src={Image1} />
          </div>
          <div className="mr-10 mb-10 rounded-md">
            <img className="servicesImage-small service-image " src={Image1} />
          </div>
        </div>
        <div className="md:w-1/5 rounded-md mr-32">
          <div
            className="servicesImage-large service-image relative"
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <div>
              <button className="bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-black  rounded-full hover:border-transparent rounded absolute bottom-10 right-10">
                See Related Works
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-3/5 ">
          <div className="services-right p-10">
            <div className="text-white  md:text-4xl  font-semibold mt-12 mb-4">
              Small Space
            </div>
            <p className="text-white font-semibold">
              High Quality Image <br /> 1920x1080 pixels <br /> Full Color
              <br />
              <br />
              <span className="textsmall-space">Small Unit / House / Room</span>
              <br /> <br /> Start From 110$*
              <br />
              +40$ for commercial rate ( streams, Video Games) <br /> *)Prices
              may increase defending complexity
            </p>
          </div>
        </div>
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
