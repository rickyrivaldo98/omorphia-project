import React, { useState, useEffect } from "react";

import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import LogoServices from "./assets/image/services/services-logo.png";
import Small from "./assets/image/services/small.jpg";
import Small2 from "./assets/image/services/small2.jpg";
import Small3 from "./assets/image/services/small3.png";
import Large from "./assets/image/services/large.jpg";
import Large2 from "./assets/image/services/large2.jpg";
import Large3 from "./assets/image/services/large3.jpg";
import "./App.css";

import "./services.css";
import Dropdown from "./components/Dropdown";

const Services_mobile = () => {
  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar

  return (
    <>
      <div className="services-bg">
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
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
            <div className="services-right p-8">
              <div className="text-white text-3xl  md:text-4xl  font-semibold mt-12 mb-4">
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
                +40$ for commercial rate ( streams, Video Games) <br /> <br />{" "}
                *)Prices may increase defending complexity
              </p>
              <div className="w-full flex mt-10 mb-10 ">
                <div className="w-1/2 my-auto">
                  <img className="rounded-lg mb-3" src={Small2} alt="" />
                  <img className="rounded-lg" src={Small} alt="" />
                </div>
                <div className="w-full">
                  <div
                    className="services-img container-img ml-3"
                    style={{ backgroundImage: `url(${Small3})` }}
                  ></div>
                </div>

                <button className="items-center justify-center button-services bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white  rounded-full hover:border-transparent rounded absolute bottom-4 right-32">
                  See Related Works
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-56 w-full flex">
          <div className="w-full pb-9">
            <div className="services-left p-8">
              <div className="text-white text-3xl  md:text-4xl  font-semibold mt-12 mb-4">
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
                +40$ for commercial rate ( streams, Video Games) <br /> <br />
                *) Prices may increase defending complexity
              </p>
              <div className="w-full flex mt-10 mb-10 ">
                <div className="w-full">
                  <div
                    className="services-img container-img"
                    style={{ backgroundImage: `url(${Large2})` }}
                  ></div>
                </div>
                <div className="w-1/2 my-auto ml-3">
                  <img className="rounded-lg mb-3" src={Large3} alt="" />
                  <img className="rounded-lg" src={Large} alt="" />
                </div>

                <button className="items-center justify-center button-services bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white  rounded-full hover:border-transparent rounded absolute bottom-4 right-32">
                  See Related Works
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Services_mobile;
