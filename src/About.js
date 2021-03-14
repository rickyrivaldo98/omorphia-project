import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import LogoAbout from "./assets/image/logoabout.svg";

import LargeSpace from "./assets/image/about/large-space.jpg";
import SmallSpace from "./assets/image/about/small-space.jpg";

import Star from "./assets/image/about/Star2.svg";

import Aria from "./assets/image/testimonial/aria.jpg";
import Rhys from "./assets/image/testimonial/rhys.jpg";
import Mumu from "./assets/image/testimonial/mumu.jpg";
import Jae from "./assets/image/testimonial/jae.jpg";
import Arven from "./assets/image/testimonial/arven.jpg";
import testingImage from "./assets/image/testimonial/testimoni_arven.jpg";

const About = () => {
  return (
    <>
      <div className="bg-stars">
        <Navbar />
        <div className="section-about mt-36  mb-20">
          <div className="w-full px-5 py-12 justify-center items-center flex flex-col">
            <img src={LogoAbout} alt="" className="mb-5" />
            <div className="text-white  md:text-4xl text-center font-bold my-12">
              <h1>Omorphia Studio</h1>
            </div>
            <div className="md:w-1/5 "></div>
            <div className="text-white text-center md:w-3/5 font-normal md:text-2xl ">
              <div className="mb-5">
                Born in 2020, Omorphia Studio is 2D background art illustration
                specialist team based on Bandung, Indonesia. It’s all started
                when our founder, Ahmad Saefudin Ferdiansyah, wanted to
                reimagine the nostalgic emotion of his childhood memories and
                his admiration towards Japanese art and culture.
              </div>
              <div className="mb-5">
                Since then, we’ve been passionately producing over 100
                high-quality background assets from popular anime visual styles
                such as virtual YouTuber and video games projects.
              </div>
              <div className="mb-5">
                By marrying between interior design and pop culture visuals, we
                believe that background art is not just a complementary but
                could be meaningful too.
              </div>
              <div className="mb-5">
                So, buckle up and get ready to have a rollercoaster feeling!
              </div>
            </div>
            <div className="md:w-1/5"></div>
          </div>
        </div>
        <div className="sec-about-services mb-20">
          <div className="w-full py-12 justify-center items-center flex flex-col">
            <div className="text-white text-2xl  md:text-4xl text-center font-bold md:my-12">
              <img src={Star} alt="" className="mx-auto" />
              <h1>Our Services</h1>
            </div>
          </div>
          <div className="justify-center text-center items-center md:flex ">
            <div className="md:w-1/2 p-10 md:p-32  ">
              <img className="rounded-lg " src={LargeSpace} alt="" />
              <div className="text-white  md:text-2xl text-center font-bold mt-12 mb-4">
                Large Space
              </div>
              <div className="textlarge-space md:text-xl font-bold text-center">
                Landscape / Architectural / Enviroment
              </div>
            </div>
            <div className="md:w-1/2 p-10 md:p-32 ">
              <img className="rounded-lg" src={SmallSpace} alt="" />
              <div className="text-white  md:text-2xl text-center font-bold mt-12  mb-4">
                Small Space
              </div>
              <div className="textsmall-space md:text-xl font-bold text-center">
                Small Unit / House / Room
              </div>
            </div>
          </div>
        </div>
        <div className="sec-about-client mb-20 pb-3">
          <div className="w-full  justify-center items-center flex flex-col">
            <div className=" text-2xl text-white  md:text-4xl text-center font-bold my-12">
              <h1>Our Clients</h1>
            </div>
          </div>
          <div className="justify-center text-center items-center md:flex mb-20 ">
            <div className="w-28 mx-auto md:mx-5">
              <img className=" rounded-full" src={Aria} alt="" />
              <div className="text-xs md:text-normal text-white text-center font-bold my-5">
                @AriaSchnuffel (China)
              </div>
            </div>
            <div className="w-28 mx-auto md:mx-5">
              <img className=" rounded-full" src={Rhys} alt="" />
              <div className="text-xs md:text-normal text-white text-center font-bold my-5">
                @RhysCyfnos (United States)
              </div>
            </div>
            <div className="w-28 mx-auto md:mx-5">
              <img className=" rounded-full" src={Mumu} alt="" />
              <div className="text-xs md:text-normal text-white text-center font-bold my-5">
                @MumuGaVT (Japan)
              </div>
            </div>
            <div className="w-28 mx-auto md:mx-5">
              <img className=" rounded-full" src={Jae} alt="" />
              <div className="text-xs md:text-normal text-white text-center font-bold my-5">
                @jaejoonah_vt (Korea)
              </div>
            </div>
            <div className="w-28 mx-auto md:mx-5">
              <img className=" rounded-full" src={Arven} alt="" />
              <div className="text-xs md:text-normal text-white text-center font-bold my-5">
                @arventisgontera (German)
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default About;
