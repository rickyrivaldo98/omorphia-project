import React, { useState, useEffect } from "react";
import axios from "axios";
import Pin from "./Pin.js";
import Navbar from "../layout/Navbar.js";
import Footer from "../layout/Footer.js";
import Image1 from "../assets/image/gallery/1.png";
import Image2 from "../assets/image/gallery/2.png";
import Image3 from "../assets/image/gallery/3.png";
import Image4 from "../assets/image/gallery/4.png";
import Image5 from "../assets/image/gallery/5.png";
import Image6 from "../assets/image/gallery/6.png";
import Image7 from "../assets/image/gallery/7.png";
import Image8 from "../assets/image/gallery/8.png";
import Image9 from "../assets/image/gallery/9.png";
import Image10 from "../assets/image/gallery/10.png";
import styled from "styled-components";

const GalleryLayout = () => {
  const Small = styled.div`
    margin: 15px 10px;
    padding: 0;
    border-radius: 16px;
    background-size: cover;
    background-position: center;
    grid-row-end: span 26;
  `;

  const Medium = styled.div`
    margin: 15px 10px;
    padding: 0;
    border-radius: 16px;
    background-size: cover;
    background-position: center;
    grid-row-end: span 33;
  `;

  const Large = styled.div`
    margin: 15px 10px;
    padding: 0;
    border-radius: 16px;
    background-size: cover;
    background-position: center;
    grid-row-end: span 45;
  `;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("https://api.sarafdesign.com/images/gallery").then((res) => {
      setData(res.data);
    });
    setLoading(false);
  }, []);
  console.log(data.map((x) => x.file));
  const Size = {
    small: {
      margin: "15px 10px",
      padding: "0",
      borderRadius: "16px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      gridRowEnd: "span 26",
    },
    medium: {
      margin: "15px 10px",
      padding: "0",
      borderRadius: "16px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      gridRowEnd: "span 33",
    },
    large: {
      margin: "15px 10px",
      padding: "0",
      borderRadius: "16px",
      backgroundSize: "cover",
      backgroundPosition: "center",
      gridRowEnd: "span 45",
    },
  };
  var myArray = [Size.small, Size.medium, Size.large];

  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  console.log(randomItem);
  return (
    <>
      <div style={styles.pin_container}>
        {loading && <div>loading...</div>}
        {!loading &&
          data.map((x) => (
            <>
              <div
                key={x.nama_image}
                style={{
                  ...myArray[Math.floor(Math.random() * myArray.length)],
                  backgroundImage: `url(https://api.sarafdesign.com/${x.file})`,
                }}
              ></div>
              {/* <Medium style={{ backgroundImage: `url(${Image7})` }}></Medium>
              <Large style={{ backgroundImage: `url(${Image4})` }}></Large>
              <Medium style={{ backgroundImage: `url(${Image3})` }}></Medium> */}
            </>
          ))}
      </div>
    </>
  );
};

const styles = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: "80vw",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 250px)",
    gridAutoRows: "10px",
    position: "relative",
    left: "50%",
    transform: "translateX(-50%)",
    justifyContent: "center",
    // backgroundColor: 'black'
  },
};

export default GalleryLayout;
