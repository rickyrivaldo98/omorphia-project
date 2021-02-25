import React, { useState, useEffect } from "react";
import ReactCompareImage from "react-compare-image";
import Compare1 from "../assets/image/compare1.png";
import Compare2 from "../assets/image/compare2.png";

const Timeslide = () => {
  return (
    <>
      <div className="w-full">
        <div className="justify-center items-center flex flex-col">
          <div className="text-2xl mt-28 text-center text-white font-medium">
            A room is not a room <br /> without natural light
          </div>
          <div className="w-1/2 h-auto mt-10 relative">
            <button className="bg-black text-white text-xs px-8 py-1 rounded-full absolute z-10 xl:bottom-10 xl:left-10 bottom-5 left-5  lg:text-base">
              Day
            </button>
            <button className="bg-black text-white text-xs px-8 py-1 rounded-full absolute z-10 xl:bottom-10 xl:right-10 bottom-5 right-5  lg:text-base">
              Night
            </button>
            <ReactCompareImage leftImage={Compare2} rightImage={Compare1} />
          </div>
          <div className="text-md mt-5 text-center text-white font-medium">
            See the different
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeslide;
