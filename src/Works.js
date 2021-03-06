import React from 'react';
import GalleryLayout from './components/GalleryLayout';
import Footer from './layout/Footer';
import Navbar from './layout/Navbar';


const Works = () => {
    return ( 

        <>
            <Navbar/>
            <div className="mt-36">

            <GalleryLayout/>
            </div>
            <Footer/>
                
        </>
     );
}
 
export default Works;