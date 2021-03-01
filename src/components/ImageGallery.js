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
                thumbnailWidth: 1200,
                thumbnailHeight: 452,
                caption: "omorphia",
            },
            {
                src: Image2,
                thumbnail: Image2,
                thumbnailWidth: 652,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image1,
                thumbnail: Image1,
                thumbnailWidth: 1200,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image2,
                thumbnail: Image2,
                thumbnailWidth: 652,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image1,
                thumbnail: Image1,
                thumbnailWidth: 1200,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image2,
                thumbnail: Image2,
                thumbnailWidth: 652,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
        



        ]
    const IMAGES2 =
        [
            {
                src: Image1,
                thumbnail: Image1,
                thumbnailWidth: 1200,
                thumbnailHeight: 452,
                caption: "omorphia",
            },
            {
                src: Image2,
                thumbnail: Image2,
                thumbnailWidth: 652,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image1,
                thumbnail: Image1,
                thumbnailWidth: 1200,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image2,
                thumbnail: Image2,
                thumbnailWidth: 652,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image1,
                thumbnail: Image1,
                thumbnailWidth: 1200,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image2,
                thumbnail: Image2,
                thumbnailWidth: 652,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image1,
                thumbnail: Image1,
                thumbnailWidth: 1200,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image1,
                thumbnail: Image1,
                thumbnailWidth: 1200,
                thumbnailHeight: 652,
                caption: "omorphia",
            },
            {
                src: Image1,
                thumbnail: Image1,
                thumbnailWidth: 1200,
                thumbnailHeight: 652,
                caption: "omorphia",
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
            <div className="relative">
                 <div className="flex flex-col gallery mb-5" style={{ transform: 'rotate(-2deg)' }}>
                <Gallery images={IMAGES} backdropClosesModal={true} enableImageSelection={false} />
                {/* <ul className="flex items-center w-full py-8">
                    <li className="flex-none">
                        <img src={Image1} width="50%" alt="" />
                    </li>
                    <li className="flex-none">
                        <img src={Image2} width="50%" alt="" />
                    </li>
                </ul> */}
                </div>
                 <div className="flex flex-col-reverse gallery mb-20" style={{ transform: 'rotate(-2deg)' }}>
                <Gallery images={IMAGES} backdropClosesModal={true} enableImageSelection={false} />
                </div>

            </div>
            {/* <div className="flex flex-nowrap gallery mb-20" style={{ transform: 'rotate(-2deg)' }}>
              
                <Gallery images={IMAGES2} backdropClosesModal={true} enableImageSelection={false} />  */}
                {/* <div className="flex overflow-hidden -my-8">
                    <ul className="flex items-center w-full py-8">
                        <li className="px-3 md:px-4 flex-none" >
                            <img src={Image1} alt="" />
                    <Gallery images={IMAGES2} backdropClosesModal={true} enableImageSelection={false} /> 
                        </li>
                    </ul>
                </div> */}
            {/* </div> */}

        </>
    );
};

export default ImageGallery;