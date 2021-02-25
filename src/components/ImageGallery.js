import React from 'react';

import { Link } from "react-router-dom";
import Image1 from "../assets/image/gallery/1.png";
import Image2 from "../assets/image/gallery/2.png";


import Gallery from 'react-grid-gallery';


const ImageGallery = () => {
    const IMAGES =
    [ 
    {
        src: Image1,
        thumbnail: Image1,
        thumbnailWidth: 1000,
        thumbnailHeight: 452,
        caption: "8H (gratisography.com)",
    },
    {
        src: Image2,
        thumbnail: Image2,
        thumbnailWidth: 452,
        thumbnailHeight: 452,
        caption: "8H (gratisography.com)",
    },
    {
        src: Image1,
        thumbnail: Image1,
        thumbnailWidth: 1000,
        thumbnailHeight: 452,
        caption: "8H (gratisography.com)",
    },
    {
        src: Image2,
        thumbnail: Image2,
        thumbnailWidth: 452,
        thumbnailHeight: 452,
        caption: "8H (gratisography.com)",
    },
    
   
   ]
    return (
        <>
            <div className="contact text-white mb-10">
                <div className="flex md:container md:mx-auto">
                    <div className="flex-auto ml-40 mt-28">
                        <h3 className="text-4xl mb-5">Works</h3>
                        <Link className="" to="/">
                            <p className="underline"> Explore more works {'>>'} </p>
                        </Link>

                    </div>
                </div>
            </div>
            <div className="flex flex-col gallery mb-20" style={{ transform: 'rotate(-2deg)' }}>
            <Gallery images={IMAGES} backdropClosesModal={true} enableImageSelection={false}/>
           
            </div>

        </>
    );
};

export default ImageGallery;