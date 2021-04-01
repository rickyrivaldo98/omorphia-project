import "./App.css";
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero";
import ImageGallery from "./components/ImageGallery";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Bgatas1 from "./assets/image/bg1.png";
import Bgatas2 from "./assets/image/bg2(1).png";
import Pic1 from "./assets/image/hoverbintang1.png";
import Pic2 from "./assets/image/hoverbintang2.jpg";
import Pic3 from "./assets/image/hoverbintang3.png";
import Pic4 from "./assets/image/hoverbintang4.png";
import Pic5 from "./assets/image/hoverbintang5.png";

import Logo from "./assets/image/logo.png";

import bgmobile from "./assets/image/bg_mobile.png";
import Timeslide from "./components/Timeslide";
import Testimonial from "./components/Testimonial";
import Image from "./components/Image";
import SimpleReactLightbox from "simple-react-lightbox";
import Overlay from "./components/Overlay";
import axios from "axios";

export const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const [overlay, setOverlay] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // console.log(data);

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return (
      () => {
        window.removeEventListener("resize", hideMenu);
      },
      setTimeout(() => setOverlay(false), 8000)
    );
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  let handleCallback = (data) => {
    setImage1(data);
  };
  let handleCallback2 = (data) => {
    setImage2(data);
  };
  let handleCallback3 = (data) => {
    setImage3(data);
  };
  let handleCallback4 = (data) => {
    setImage4(data);
  };
  let handleCallback5 = (data) => {
    setImage5(data);
  };
  return (
    <>
      <div className="bg-all">
        <div className="bg-stars">
          <link rel="icon" href={Logo} type="image/icon" />
          {/* {overlay === false ? ( */}
          <div className="w-full relative">
            {image1 ? (
              <img
                className="star-image"
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-easing="ease-in-back"
                className="star-image absolute -z-1 w-full"
                src={Pic1}
                alt=""
              />
            ) : image2 ? (
              <img
                className="star-image"
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-easing="ease-in-back"
                className="star-image absolute -z-1 w-full"
                src={Pic2}
                alt=""
              />
            ) : image3 ? (
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-easing="ease-in-back"
                className="star-image absolute -z-1 w-full"
                src={Pic3}
                alt=""
              />
            ) : image4 ? (
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-easing="ease-in-back"
                className="star-image absolute -z-1 w-full"
                src={Pic4}
                alt=""
              />
            ) : image5 ? (
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-easing="ease-in-back"
                className="star-image absolute -z-1 w-full"
                src={Pic5}
                alt=""
              />
            ) : (
              <>
                <img className="absolute -z-1 w-full" src={Bgatas1} alt="" />
                <img
                  className="absolute -z-1  w-full md:hidden"
                  src={bgmobile}
                  alt=""
                />
              </>
            )}
            <img
              className="absolute -z-1 w-full top-80 md:top-0"
              src={Bgatas2}
              alt=""
            />
            <Navbar toggle={toggle} />
            <Dropdown isOpen={isOpen} toggle={toggle} />
            <Hero
              callImage1={handleCallback}
              callImage2={handleCallback2}
              callImage3={handleCallback3}
              callImage4={handleCallback4}
              callImage5={handleCallback5}
            />
            <div className=" overflow-hidden 2xl:pt-px xl:pt-28">
              <Timeslide />
              <div data-aos="fade-up" className="section-testi">
                <Testimonial />
              </div>
            </div>
            <div className="section-gallery overflow-hidden">
              <div data-aos="fade-right">
                <ImageGallery />
              </div>
              <div data-aos="fade-left">
                <Image />
              </div>
              <br />
              <br />
              <Footer />
            </div>
          </div>
          {/* ) : (
        <Overlay />
      )} */}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
