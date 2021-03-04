import React from 'react';
import SimpleReactLightbox from 'simple-react-lightbox';
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
                <div className="flex md:container md:mx-auto">
                    <div className="flex-auto ml-10 md:ml-40 mt-28">
                        <h3 className="text-4xl mb-5">Works</h3>
                        <Link className="" to="/">
                            <p className="underline"> Explore more works {'>>'} </p>
                        </Link>

                    </div>
                </div>
            </div>
    
            {/* <div style={{ transform: 'rotate(-2deg)' }}>
                <div className="popup-gallery pb-5 flex flex-nowrap">
                    <div className="px-3 items-center">
                        <div className="gallery-container gallery " style={{ backgroundImage: `url(${Image1})` }}>
                            <img src={Image1} alt="" />
                        </div>
                    </div>
                    <div className=" px-3 items-center">
                        <div className="gallery-container2 gallery " style={{ backgroundImage: `url(${Image2})` }}>
                            <img src={Image2} alt="" />
                        </div>
                    </div>
                    <div className=" px-3 items-center">
                        <div className="gallery-container gallery " style={{ backgroundImage: `url(${Image1})` }}>

                        </div>
                    </div>
                    <div className=" px-3 items-center">
                        <div className="gallery-container2 gallery " style={{ backgroundImage: `url(${Image2})` }}>

                        </div>
                    </div>
                </div>
              
            </div> */}

         


        </>
    );
};

export default ImageGallery;