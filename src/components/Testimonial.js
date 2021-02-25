import React from 'react';
import { Carousel } from '3d-react-carousal';
import testimonialSeo from "../assets/image/gallery/10.png";
import testimonialNam from "../assets/image/gallery/2.png";
import testimonialJohn from "../assets/image/testimonial/testimoni_john.jpg";
import seo from "../assets/image/testimonial/seo.png";
import { Link } from 'react-router-dom';
import "../App.css";
import { render } from '@testing-library/react';



const Testimonial = () => {
        const card =
           (
               
                    <div className=" bg-white rounded-lg w-2/3 md:px-4 lg:px-6 py-5 mb-20" >
                        <img src={testimonialNam} className="w-full" alt="" />
                        <div className="py-4">
                            <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
                                <img src={seo} className="photo-testiomonial rounded-full w-14 " alt="" />
                                <h3 className="font-bold w-full">Nam Do San <br /> <span className="font-normal text-xs">South Korea - Samsan Tech</span> </h3>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                            </div>
                        </div>
                    </div>
            );
            const card2 = 
            (
                    <div className=" bg-white rounded-lg w-2/3  md:px-4 lg:px-6 py-5 mb-20" >
                        <img src={testimonialSeo} className=" w-full" alt="" />
                        <div className=" py-4">
                            <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
                                <img src={seo} className="photo-testiomonial rounded-full w-14 " alt="" />
                                <h3 className="font-bold w-full">Nam Do San <br /> <span className="font-normal text-xs">South Korea - Samsan Tech</span> </h3>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                            </div>
                        </div>
                    </div>
            );
            const card3 =
             (
                    <div className=" bg-white rounded-lg w-2/3 md:px-4 lg:px-6 py-5 mb-20" >
                        <img src={testimonialJohn} className=" w-full" alt="" />
                        <div className=" py-4">
                            <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
                                <img src={seo} className="photo-testiomonial rounded-full w-14 " alt="" />
                                <h3 className="font-bold w-full">Nam Do San <br /> <span className="font-normal text-xs">South Korea - Samsan Tech</span> </h3>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                            </div>
                        </div>
                    </div>
               
            );
    
    let slides = [
        card,card2,card3
    ];
    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
            <div className="flex flex-col justify-center items-center text-white">
                <p className="lg:text-4xl py-20 text-center">What our clients <br /> say about us</p>
            </div>
            <div className=" mx-auto px-4 pb-36">
            <Carousel slides= {slides}  interval={1000} />
                {/* <div className="flex flex-nowrap ">
                 
                </div> */}
            </div>
        </>
    );
};

export default Testimonial;