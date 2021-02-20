import React from 'react';
import testimonialSeo from "../assets/image/testimonial/testimoni_seo.jpg";
import testimonialNam from "../assets/image/testimonial/testimoni_nam.jpg";
import testimonialJohn from "../assets/image/testimonial/testimoni_john.jpg";
import seo from "../assets/image/testimonial/seo.jpg";
import { Link } from 'react-router-dom';


const Testimonial = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center text-white">
                <p className="lg:text-4xl py-20 text-center">What our clients <br /> say about us</p>

            </div>
            <div className="container">
                <div className="flex flex-wrap px-6">
                    <div className="bg-white rounded-lg w-full lg:w-1/2 md:px-4 lg:px-6 py-5">
                        <div className=" ">
                            <img src={testimonialNam} className=" w-full" alt="" />
                        </div>
                        <div className=" py-4">
                            <div className="flex items-center space-x-3.5 sm:space-x-5 lg:space-x-3.5 xl:space-x-5">
                                <img src={seo} className="" alt="" />
                                <h3 className="font-bold w-full">Seo Dal mi <br /> <span className="font-normal text-xs mb-32">South Korea - Samsan Tech</span> </h3>
                                <p className="text-sm pl-24">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
   </div>
        </>
    );
};

export default Testimonial;