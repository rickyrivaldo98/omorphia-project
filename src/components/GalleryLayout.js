import React from 'react';
import Pin from './Pin.js';
import Image1 from "../assets/image/gallery/1.png";
import Navbar from '../layout/Navbar.js';
import Footer from '../layout/Footer.js';

const GalleryLayout = () => {

   
    return(
        <>
            <div style={styles.pin_container}>
                <Pin size='small' image='ImageBackground' />
                <Pin size='medium'image='ImageBackground2' />
                <Pin size='small' image='ImageBackground3' />
                <Pin size='medium' image='ImageBackground4' />
                <Pin size='small' image='ImageBackground5' />
                <Pin size='medium' image='ImageBackground6' />
                <Pin size='large'  image='ImageBackground7'/>
                <Pin size='large' image='ImageBackground8' />
                <Pin size='small' image='ImageBackground9' />
                <Pin size='medium' image='ImageBackground10'  />
                <Pin size='large' image='ImageBackground1' />
                <Pin size='large' image='ImageBackground2' />

            </div>
        </>
    )
}

const styles = {
    pin_container: {
        margin: 0,
        padding: 0,
        width: '80vw',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, 250px)',
        gridAutoRows: '10px',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
        justifyContent: 'center',
        // backgroundColor: 'black'
    }
}

export default GalleryLayout;