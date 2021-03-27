import React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from "react-router-dom";
import Image1 from "../assets/image/gallery/10.png";
import Image2 from "../assets/image/gallery/9.png";
import Image3 from "../assets/image/gallery/2.png";
import Image4 from "../assets/image/gallery/4.png";

const ImageGallery = () => {
  return (
    <>
      <div className="contact text-white mb-10">
        <div className="w-full  justify-center items-center flex flex-col">
          <div className="  text-xl text-white text-center font-bold mb-8 mt-24">
            <div>
              Over 100 high-quality background assets <br /> from popular anime
              visual
            </div>
          </div>
          <Link className="" to="/works">
            <button className="text-sm bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white  rounded-full hover:border-transparent rounded  ">
              See Related Works
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
