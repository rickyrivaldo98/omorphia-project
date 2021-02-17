import React from 'react';
import { Link } from "react-router-dom";
import Image1 from "../assets/image/image1.png";
import Image2 from "../assets/image/image2.png";

const Gallery = () => {
    return (
        <>
            <div className="contact text-white mb-10">
                <div className="flex md:container md:mx-auto">
                    <div className="flex-auto ml-40 mt-28">
                        <h3 className="text-4xl mb-5">Works</h3>
                        <Link className="" to="/">
            <p> Explore more works {'>>'} </p>
          </Link>
                        
                    </div>
                </div>
            </div>
            <div className="gallery mb-20" style={{ transform: 'rotate(-2deg)' }}>
                <img className="mb-10" src={Image1} alt="" />
                <img src={Image2} alt="" />
            </div>


        </>
    );
};

export default Gallery;