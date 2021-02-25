import React, { useState, useEffect } from "react";
import star1 from "../assets/image/bintang1.svg";
import star2 from "../assets/image/bintang2.svg";

const Hero = (props) => {
  const [image1, setImage] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);

  let changeImage = (e) => {
    e.preventDefault();
    setImage(!image1);
    setImage2(false);
    setImage3(false);
  };

  let changeImage2 = (e) => {
    e.preventDefault();
    setImage2(!image2);
    setImage(false);
    setImage3(false);
  };
  let changeImage3 = (e) => {
    e.preventDefault();
    setImage3(!image3);
    setImage(false);
    setImage2(false);
  };

  useEffect(() => {
    props.callImage1(image1);
    props.callImage2(image2);
    props.callImage3(image3);
  });
  return (
    <>
      <div className="z-10 relative ">
        <img
          src={star1}
          alt=""
          className="absolute xl:right-40 xl:top-64 lg:right-40 lg:top-10 md:right-20 md:w-20"
          onClick={changeImage}
        />
        <img
          src={star2}
          alt=""
          className="absolute right-1/3 top-80 lg:top-32 md:w-20 md:top-28"
          onClick={changeImage2}
        />
        <img
          src={star1}
          alt=""
          className="absolute xl:right-1/3 xl:top-1/3 lg:top-72 lg:w-12 md:w-12 md:top-40 md:right-32"
          onClick={changeImage3}
        />
        <div className="h-auto flex flex-col text-white ">
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
            className="text-sm text-center font-normal italic pt-10 mb-1 hidden
        2xl:text-xl  2xl:pl-72 2xl:text-left 2xl:mb-96
        xl:text-xl  xl:pl-64 xl:text-left xl:mb-96
        lg:text-lg  lg:pl-28 lg:text-left lg:mb-96
        md:text-md md:pl-20 md:text-left md:mb-80
        sm:text-left sm:block"
          >
            *Try to Press The Star
          </div>
          <div
            className="text-2xl text-center font-normal pt-28 
        2xl:text-5xl 2xl:pt-96 2xl:mt-72 2xl:pl-72 2xl:text-left 
        xl:text-5xl xl:pt-80 xl:pl-64 xl:text-left 
        lg:text-4xl lg:pt-18 lg:pl-28 lg:text-left 
        md:text-3xl md:pt-1 md:pl-20 md:text-left 
        sm:text-3xl sm:text-left"
          >
            Omorphia
          </div>
          <div
            className="text-sm text-center font-normal pt-5 w-full px-10
        2xl:text-xl  2xl:pl-72 2xl:text-left 2xl:w-2/5 
        xl:text-sm  xl:pl-64 xl:text-left xl:w-3/6
        lg:text-sm  lg:pl-28 lg:text-left lg:w-3/6
        md:text-xs md:pl-20 md:text-left md:w-4/6
        sm:text-left sm:block"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
