import React, { useState, useEffect } from "react";
import axios from "axios";
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

// udah ga kepake lagi halaman ini !!!!

const Pin = (props) => {
  // const [loading, setLoading] = useState(false);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   setLoading(true);
  //   axios.get("http://localhost:3001/images/gallery").then((res) => {
  //     setData(res.data);
  //   });
  //   setLoading(false);
  // }, []);

  // let Image = () => {
  //   data.map((x) => x.file);
  // };
  // console.log( data);
  const styles = {
    pin: {
      margin: "15px 10px",
      padding: 0,
      borderRadius: "16px",
      // backgroundColor: 'red'
      backgroundSize: "cover",
      backgroundPosition: "center center",
    },
    small: {
      gridRowEnd: "span 26",
    },
    medium: {
      gridRowEnd: "span 33",
    },
    large: {
      gridRowEnd: "span 45",
    },
  };
  return (
    <>
      <div
        style={{
          ...styles.pin,
          ...styles[props.size],
          // ...styles[props.image],
        }}
      ></div>
    </>
  );
};

export default Pin;
