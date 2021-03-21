import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Image1 from "./assets/image/gallery/4.png";
import LogoServices from "./assets/image/services/services-logo.png";
import Small from "./assets/image/services/small.jpg";
import Small2 from "./assets/image/services/small2.jpg";
import Small3 from "./assets/image/services/small3.png";
import Large from "./assets/image/services/large.jpg";
import Large2 from "./assets/image/services/large2.jpg";
import Large3 from "./assets/image/services/large3.jpg";

import "./services.css";

const Services_mobile = () => {
  return (
    <>
      <div className="services-bg">
        <Navbar />
        <div className="mt-56 w-full justify-center items-center flex flex-col">
          {/* <img src={LogoAbout} alt="" className="mb-5" /> */}
          <div>
            <img src={LogoServices} className="mx-auto" alt="" />
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
        <div className="mt-56 w-full flex">
          <div className="w-full pb-9">
            <div className="services-right p-10">
              <div className="text-white  md:text-4xl  font-semibold mt-12 mb-4">
                Small Space
              </div>
              <p className="text-white font-semibold">
                High Quality Image <br /> 1920x1080 pixels <br /> Full Color
                <br />
                <br />
                <span className="textsmall-space">
                  Small Unit / House / Room
                </span>
                <br /> <br /> Start From 110$*
                <br />
                +40$ for commercial rate ( streams, Video Games) <br /> *)Prices
                may increase defending complexity
              </p>
              <div className="w-full flex">
                <div className="w-1/2">
                  <img className="rounded-lg" src={Small2} alt="" />
                  <img className="rounded-lg" src={Small} alt="" />
                </div>
                <div className="w-full">
                  <div
                    className="services-img container-img"
                    style={{ backgroundImage: `url(${Small3})` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 w-full h-full flex mb-96">
          <div className="md:w-3/5 pb-9 pr-9">
            <div className="services-left p-10 text-right">
              <div className="text-white  md:text-4xl  font-semibold mt-12 mb-4">
                Large Space
              </div>
              <p className="text-white font-semibold">
                High Quality Image <br /> 1920x1080 pixels <br /> Full Color
                <br />
                <br />
                <span className="textsmall-space">
                  Landscape / Architectural / Enviroment
                </span>
                <br /> <br /> Start From 180$*
                <br />
                +40$ for commercial rate ( streams, Video Games) <br /> *)Prices
                may increase defending complexity
              </p>
            </div>
          </div>
          <div className="md:w-1/5 rounded-md mr-32">
            <div
              className="servicesImage-large service-image relative"
              style={{ backgroundImage: `url(${Large2})` }}
            >
              <div>
                <button className="button-services bg-transparent hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-black  rounded-full hover:border-transparent rounded absolute bottom-10 left-10">
                  See Related Works
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/5">
            <div className=" mb-10 rounded-md ">
              <img
                className="servicesImage-small service-image "
                src={Large3}
              />
            </div>
            <div className=" mb-10 rounded-md">
              <img className="servicesImage-small service-image " src={Large} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services_mobile;
