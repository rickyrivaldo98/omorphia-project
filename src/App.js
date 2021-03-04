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
import Bgatas2 from "./assets/image/bg2.png";
import Pic1 from "./assets/image/pic1.jpg";
import Pic2 from "./assets/image/pic2.png";
import Pic3 from "./assets/image/pic3.jpg";
import bgmobile from "./assets/image/bg_mobile.png";
import Timeslide from "./components/Timeslide";
import Testimonial from "./components/Testimonial";
import Image from "./components/Image";
import SimpleReactLightbox from 'simple-react-lightbox'

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  useEffect(() => {
    Aos.init({ duration: 2000 });
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
  return (
    <>
      <div className="w-full relative ">
        {image1 ? (
          <img
            data-aos="fade-up"
            className=" absolute -z-1 w-full"
            src={Pic1}
            alt=""
          />
        ) : image2 ? (
          <img
            data-aos="fade-up"
            className=" absolute -z-1 w-full"
            src={Pic2}
            alt=""
          />
        ) : image3 ? (
          <img
            data-aos="fade-up"
            className=" absolute -z-1 w-full"
            src={Pic3}
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
        />

        <div className="overflow-hidden 2xl:pt-px xl:pt-28 bg-gradient-to-b from-colorbg1 via-colorbg1 to-colorbg2">
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
            <SimpleReactLightbox >
              <Image />
            </SimpleReactLightbox>
          </div>
          <br />
          <br />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
