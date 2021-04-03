import React, { useState, useEffect } from "react";
import { Carousel } from "3d-react-carousal";

import testimonialAria from "../assets/image/testimonial/testimoni_aria.jpg";
import testimonialRhys from "../assets/image/testimonial/testimoni_rhys.jpg";
import testimonialMumu from "../assets/image/testimonial/testimoni_mumu.jpg";
import testimonialJae from "../assets/image/testimonial/testimoni_jae.jpg";
import testimonialArven from "../assets/image/testimonial/testimoni_arven.jpg";
import Aria from "../assets/image/testimonial/aria.jpg";
import Rhys from "../assets/image/testimonial/rhys.jpg";
import Mumu from "../assets/image/testimonial/mumu.jpg";
import Jae from "../assets/image/testimonial/jae.jpg";
import Arven from "../assets/image/testimonial/arven.jpg";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import "../App.css";

const Testimonial = () => {
  // membuat fungsi untuk card testimonial
  const card = (
    <div className=" bg-white rounded-lg w-full md:w-3/5 md:px-4 lg:px-6 p-1 md:py-5 mb-20">
      <img src={testimonialAria} className="w-full" alt="" />
      <div className="pt-4 pb-2">
        <div className="lg:flex items-center px-1  sm:space-x-5 lg:space-x-3.5 xl:space-x-3.5">
          <div className="pb-4">
            <div className="grid grid-cols-5 md:grid-cols-4">
              <img
                src={Aria}
                className=" photo-testiomonial w-10 rounded-full md:w-14 "
                alt=""
              />
              <h3 className="pl-2 md:pl-4 text-sm font-bold w-full">
                @AriaSchnuffel <br />
                <span className="font-normal text-xs">China</span>
              </h3>
            </div>
          </div>

          <div className="pb-4">
            <p className="text-xs md:text-sm">
              Huge thanks to <span className="font-bold">@Omorphia1</span> Thank
              you very much for your work~ And sorry for all the inconvenience.
              I hope we can work together again in the future
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  const card2 = (
    <div className=" bg-white rounded-lg w-full md:w-3/5 md:px-4 lg:px-6 p-1 md:py-5 mb-20">
      <img src={testimonialRhys} className="w-full" alt="" />
      <div className="pt-4 pb-2">
        <div className="lg:flex items-center px-1  sm:space-x-5 lg:space-x-3.5 xl:space-x-3.5">
          <div className="pb-4">
            <div className="grid grid-cols-5 md:grid-cols-4">
              <img
                src={Rhys}
                className=" photo-testiomonial w-10 rounded-full md:w-14 "
                alt=""
              />
              <h3 className="pl-2 md:pl-4 text-sm font-bold w-full">
                @RhysCyfnos <br />
                <span className="font-normal text-xs">United States</span>
              </h3>
            </div>
          </div>
          <div className="pb-4">
            <p className="text-xs md:text-sm">
              Would like to thank <span className="font-bold">@Omorphia1</span>
              again, for this lovely BG commission that I have used on my debut.
              Go check out his other works!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  const card3 = (
    <div className=" bg-white rounded-lg w-full md:w-3/5  md:px-4 lg:px-6 p-1 md:py-5 mb-20">
      <img src={testimonialMumu} className="w-full" alt="" />
      <div className="pt-4 pb-2">
        <div className="lg:flex items-center px-1  sm:space-x-5 lg:space-x-3.5 xl:space-x-3.5">
          <div className="pb-4">
            <div className="grid grid-cols-5 md:grid-cols-4">
              <img
                src={Mumu}
                className=" photo-testiomonial w-10 rounded-full md:w-14 "
                alt=""
              />
              <h3 className="pl-2 md:pl-4 text-sm font-bold w-full">
                @MumuGaVT <br />
                <span className="font-normal text-xs">Japan</span>
              </h3>
            </div>
          </div>
          <div className="pb-4">
            <p className="text-xs md:text-sm">
              Thank you very much to
              <span className="font-bold">@Omorphia1</span> for creating such a
              beautiful bedroom and perfectly encapturing my request. They were
              very easy to work with and very kind. I highly recommend them to
              you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  const card4 = (
    <div className=" bg-white rounded-lg w-full md:w-3/5  md:px-4 lg:px-6 p-1 md:py-5 mb-20">
      <img src={testimonialJae} className="w-full" alt="" />
      <div className="pt-4 pb-2">
        <div className="lg:flex items-center px-1  sm:space-x-5 lg:space-x-3.5 xl:space-x-3.5">
          <div className="pb-4">
            <div className="grid grid-cols-5 md:grid-cols-4">
              <img
                src={Jae}
                className=" photo-testiomonial w-10 rounded-full md:w-14 "
                alt=""
              />
              <h3 className="pl-2 md:pl-4 text-sm font-bold w-full">
                @jaejoonah_vt <br />
                <span className="font-normal text-xs">Korea</span>
              </h3>
            </div>
          </div>
          <div className="pb-4">
            <p className="text-xs md:text-sm">
              I can't thank
              <span className="font-bold">@Omorphia1</span> enough for doing
              such an amazing job on my #Vtuber background! They were extremely
              easy to work with, so if they're open to commissions I can't
              recommend them enough!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const card5 = (
    <div className=" bg-white rounded-lg w-full md:w-3/5   md:px-4 lg:px-6 p-1 md:py-5 mb-20">
      <img src={testimonialArven} className="w-full" alt="" />
      <div className="pt-4 pb-2">
        <div className="lg:flex items-center px-1  sm:space-x-5 lg:space-x-3.5 xl:space-x-3.5">
          <div className="pb-4">
            <div className="grid grid-cols-5 md:grid-cols-4">
              <img
                src={Arven}
                className=" photo-testiomonial w-10 rounded-full md:w-14 "
                alt=""
              />
              <h3 className="pl-2 md:pl-4 text-sm font-bold w-full">
                @arventisgontera <br />
                <span className="font-normal text-xs">German</span>
              </h3>
            </div>
          </div>
          <div className="pb-4">
            <p className="text-xs md:text-sm">
              Credits
              <span className="font-bold">@Omorphia1</span>
              You were an absolute bliss to work with and did an amazing job!
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // memasukkan card ke dalam variable card agar bisa dipanggil dalam array
  let cards = [card, card2, card3, card4, card5];

  // fungsi untuk next
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaChevronRight />
      </div>
    );
  };
  // fungsi untuk previous
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaChevronLeft />
      </div>
    );
  };

  return (
    <>
      {/* before revision */}
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
        crossorigin="anonymous"
      ></link>
      <div className="flex flex-col justify-center items-center text-white">
        <p className="lg:text-4xl py-20 text-center">
          What our clients <br /> say about us
        </p>
      </div>
      <div className=" md:mx-auto md:px-4 mt-10 md:pb-36">
        <Carousel slides={cards} interval={1000} />
      </div>

      {/* after revision */}
      {/* <div className="flex flex-col justify-center items-center text-white">
        <p className="lg:text-4xl py-20 text-center">
          What our clients <br /> say about us
        </p>
      </div>
      <div className="md:mx-auto md:px-4 md:pb-36">
        <Slider {...settings}>
          {cards.map((card, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <div className="slider variable-width">{card}</div>
            </div>
          ))}
        </Slider>
      </div> */}
    </>
  );
};

export default Testimonial;
