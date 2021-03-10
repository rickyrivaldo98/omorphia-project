import React from 'react';
import GalleryLayout from './components/GalleryLayout';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';
import star from "./assets/image/star-works.svg";



const Works = () => {
    return (

        <>
            <Navbar />
            <div className="mt-36">
                <div className="flex flex-col justify-center items-center text-white py-20">
                <img src={star} alt="" />
                    <p className="lg:text-4xl font-bold text-2xl text-center mb-10">Works</p>
                    <div className="md:w-1/3 "></div>
                    <div className="text-white text-center md:w-1/3 font-bold text-md md:text-xl">
                        We’ve been passionately producing over 100 high-quality background assets from popular anime visual styles such as virtual YouTuber and video games projects.
                    </div>
                    <div className="md:w-1/3"></div>
                    <div className="py-10">
                        <button class="btn-filter bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
                            All
                    </button>
                    <button class="btn-filter bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full border border-white-500 hover:border-transparent rounded">
                            Large Space
                    </button>
                    <button class="btn-filter bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full border border-white-500 hover:border-transparent rounded">
                            Small Space
                    </button>
                    <button class="btn-filter bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full border border-white-500 hover:border-transparent rounded">
                            Project Commission
                    </button>
                    <button class="btn-filterbg-transparent hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full border border-white-500 hover:border-transparent rounded">
                            Project Non Commission
                    </button>
                    <button class="btn-filter bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full border border-white-500 hover:border-transparent rounded">
                          Games
                    </button>
                    <button class="btn-filter bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full border border-white-500 hover:border-transparent rounded">
                          Ect.
                    </button>
                    </div>

                </div>
                <GalleryLayout />
            </div>
            <Footer />

        </>
    );
}

export default Works;