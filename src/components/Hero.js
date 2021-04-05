import React, { useState, useEffect } from "react";
import star1 from "../assets/image/bintang1.png";
import star2 from "../assets/image/bintang4.png";
import star3 from "../assets/image/bintang3.png";

const Hero = (props) => {
  // set gambar dalam usestate false (tidak ditampilkan)
  const [image1, setImage] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);
  const [image5, setImage5] = useState(false);

  // fungsi untuk mengganti gambar bacgkeound pada landing page ketika di klik
  let changeImage = (e) => {
    e.preventDefault();
    setImage(!image1);
    setImage2(false);
    setImage3(false);
    setImage4(false);
    setImage5(false);
  };

  let changeImage2 = (e) => {
    e.preventDefault();
    setImage2(!image2);
    setImage(false);
    setImage3(false);
    setImage5(false);
    setImage4(false);
  };
  let changeImage3 = (e) => {
    e.preventDefault();
    setImage3(!image3);
    setImage(false);
    setImage2(false);
    setImage5(false);
    setImage4(false);
  };

  let changeImage4 = (e) => {
    e.preventDefault();
    setImage4(!image4);
    setImage3(false);
    setImage5(false);
    setImage(false);
    setImage2(false);
  };

  let changeImage5 = (e) => {
    e.preventDefault();
    setImage5(!image5);
    setImage4(false);
    setImage3(false);
    setImage(false);
    setImage2(false);
  };
  // akhir fungsi gambar klik pada landing page

  // fungsi untuk memanggil gambar yang di klik
  useEffect(() => {
    props.callImage1(image1);
    props.callImage2(image2);
    props.callImage3(image3);
    props.callImage4(image4);
    props.callImage5(image5);
  });
  return (
    <>
      <div className="z-10 relative">
        <img
          src={star3}
          alt=""
          className="star-click star-hover absolute transform w-8 z-50 xl:right-40 xl:top-32 lg:right-40 md:top-3 md:right-20 md:w-12 right-10 top-44"
          onClick={changeImage}
        />
        <img
          src={star2}
          alt=""
          className="star-click star-hover absolute w-8 md:right-1/3 right-10 top-80 lg:top-64 md:w-12 md:top-28"
          onClick={changeImage2}
        />
        <img
          src={star1}
          alt=""
          className="star-click star-hover absolute xl:right-60 xl:top-96 lg:top-72 lg:w-12 md:w-12 md:top-40 md:right-32 right-24 w-8"
          onClick={changeImage3}
        />

        <img
          src={star1}
          alt=""
          className="star-click star-hover absolute transform rotate-90 xl:left-40 xl:top-64 lg:right-40 md:top-3 md:left-20 md:w-12 w-8 top-72 left-10"
          onClick={changeImage4}
        />
        <img
          src={star3}
          alt=""
          className="star-click star-hover absolute left-1/3 top-60 lg:top-10 md:w-12 md:top-10 w-8"
          onClick={changeImage5}
        />
        <div className="h-auto flex flex-col text-white ">
          <div
            data-aos="fade-right"
            className="text-2xl text-center font-medium mt-28 
        2xl:text-5xl 2xl:mt-96 2xl:pl-72 2xl:text-left 
        xl:text-5xl xl:mt-96 xl:pl-64 xl:text-left 
        lg:text-4xl lg:mt-72 lg:pl-28 lg:text-left 
        md:text-3xl md:mt-40 md:pl-20 md:text-left 
        sm:text-3xl sm:text-left"
          >
            Everything you can <br /> imagine is real
          </div>
          <div
            data-aos="fade-down"
            className="invisible md:visible text-sm text-center font-normal italic pt-2 mb-1 
        2xl:text-xl  2xl:pl-72 2xl:text-left 2xl:mb-96
        xl:text-xl  xl:pl-64 xl:text-left xl:mb-96
        lg:text-lg  lg:pl-28 lg:text-left lg:mb-96
        md:text-md md:pl-20 md:text-left md:mb-80 md:pt-10
        sm:text-left sm:block"
          >
            *Try to Press The Star
          </div>
          <div
            data-aos="fade-right"
            className="text-2xl text-left font-medium pt-96 mt-36 pl-10
        2xl:text-5xl 2xl:pt-96 2xl:mt-72 2xl:pl-72 2xl:text-left 
        xl:text-5xl xl:pt-80 xl:pl-64 xl:text-left 
        lg:text-4xl lg:pt-18 lg:pl-28 lg:text-left 
        md:text-3xl md:pt-1 md:pl-20 md:text-left md:mt-0 
        sm:text-3xl sm:text-left"
          >
            Omorphia
          </div>
          <div
            data-aos="fade-right"
            className="text-md text-left font-normal pt-20 w-full px-10 
        2xl:text-xl  2xl:pl-72 2xl:text-left 2xl:w-2/5 
        xl:text-sm  xl:pl-64 xl:text-left xl:w-3/6
        lg:text-sm  lg:pl-28 lg:text-left lg:w-3/6
        md:text-xs md:pl-20 md:text-left md:w-4/6 md:pt-5 
        sm:text-left sm:block"
          >
            Born in 2020, Omorphia Studio is 2D background art illustration
            specialist team based on Bandung, Indonesia. We’ve been passionately
            producing over 100 high-quality background assets from popular anime
            visual styles such as virtual YouTuber and video games projects.
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
