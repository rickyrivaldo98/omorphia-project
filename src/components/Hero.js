import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-screen flex flex-col text-white ">
        <div
          className="text-2xl text-center font-medium pt-28 
        2xl:text-5xl 2xl:pt-96 2xl:pl-72 2xl:text-left 
        xl:text-5xl xl:pt-96 xl:pl-64 xl:text-left 
        lg:text-4xl lg:pt-72 lg:pl-28 lg:text-left 
        md:text-3xl md:pt-40 md:pl-20 md:text-left 
        sm:text-3xl sm:text-left"
        >
          Everything you can <br /> imagine is real
        </div>
        <div
          className="text-sm text-center font-normal italic pt-10 hidden
        2xl:text-xl  2xl:pl-72 2xl:text-left 
        xl:text-xl  xl:pl-64 xl:text-left 
        lg:text-lg  lg:pl-28 lg:text-left 
        md:text-md md:pl-20 md:text-left 
        sm:text-left sm:block"
        >
          *Try to Press The Star
        </div>
      </div>
    </>
  );
};

export default Hero;
