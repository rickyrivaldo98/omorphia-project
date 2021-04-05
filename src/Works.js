import React, { useState, useEffect } from "react";
import GalleryLayout from "./components/GalleryLayout";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import star from "./assets/image/worksicon.png";
import "./App.css";
import Dropdown from "./components/Dropdown";

const Works = () => {
  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar

  return (
    <>
      <div className="bg-stars">
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <div className="mt-36">
          <div className="flex flex-col justify-center items-center text-white py-20">
            <img src={star} alt="" />
            <p className="lg:text-4xl font-bold text-2xl text-center mb-10">
              Works
            </p>
            <div className="md:w-1/3 "></div>
            <div className="text-white text-center md:w-1/3 font-bold text-md md:text-xl">
              We’ve been passionately producing over 100 high-quality background
              assets from popular anime visual styles such as virtual YouTuber
              and video games projects.
            </div>
            <div className="md:w-1/3"></div>
          </div>
          <GalleryLayout />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Works;
