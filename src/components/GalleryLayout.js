import React, { useState, useEffect } from "react";
import axios from "axios";
import Pin from "./Pin.js";
import Navbar from "../layout/Navbar.js";
import Footer from "../layout/Footer.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  // console.log(data.map((x) => x.file));
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
              <Link
                to={`/detailworks/${x.id_images}`}
                key={x.nama_image}
                style={{
                  ...myArray[Math.floor(Math.random() * myArray.length)],
                  backgroundImage: `url(https://api.sarafdesign.com/${x.file})`,
                }}
              ></Link>
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
