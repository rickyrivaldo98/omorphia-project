import React, { useState, useEffect } from "react";
import axios from "axios";
import Pin from "./Pin.js";
import Navbar from "../layout/Navbar.js";
import Footer from "../layout/Footer.js";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { css } from "glamor";

const GalleryLayout = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState("");
  const [activeCat, setActiveCat] = useState("");
  const [activeAll, setActiveAll] = useState(true);

  // fungsi mendapatkan data dari API dimulai dari gambar, dan category
  useEffect(() => {
    setLoading(true);
    axios.get("https://api.sarafdesign.com/images/gallery").then((res) => {
      setData(res.data);
      axios.get("https://api.sarafdesign.com/category").then((res2) => {
        setData2(res2.data);
        // axios
        //   .get("https://api.sarafdesign.com/gallery/category/")
        //   .then((res3) => {
        //     setData3(res3.data);
        //   });
      });
    });
    setLoading(false);
  }, []);

  // fungsi untuk set container pada gambar size small medium large
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

  // fungsi untuk klik per category
  const isActivecat = (e) => {
    // e.preventDefault(e);
    setData3(e);
    setActiveCat(e);
    setActiveAll(false);
  };

  // fungsi untuk semua category
  const isActiveall = (e) => {
    // e.preventDefault(e);
    setData3("");
    setActiveCat("");
    setActiveAll(true);
  };
  // style untuk hover image

  const styleHover = ({ content }) =>
    css({
      ":hover::after": {
        content: `${content}`,
        position: "absolute",
        // background: "red",
        top: "0",
        left: "0",
        height: "100%",
        width: " 100%",
        // background: radial-gradient(90.94% 80.15% at 50.13% 7.12%,#5d27ab 0%,#0d1632 100%),
        borderRadius: "16px",
        opacity: " 0.8",
      },
    });
  const Testis = styled.div`
    &:hover::after {
      content: "hehehehe";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border-radius: 16px;
      opacity: 0.8;
    }
  `;
  var content = "hwhhw";
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white ">
        <div className="py-10">
          <button
            onClick={() => isActiveall()}
            class={
              activeAll
                ? "btn-filter bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
                : "btn-filter bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full border border-white-500 hover:border-transparent rounded"
            }
          >
            All
          </button>
          {data2.map((x) => (
            <button
              key={x.id_category}
              onClick={() => isActivecat(x.id_category)}
              class={
                activeCat === x.id_category
                  ? "btn-filter bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
                  : "btn-filter bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full border border-white-500 hover:border-transparent rounded"
              }
            >
              {x.category_nama}
            </button>
          ))}
        </div>
      </div>
      <div style={styles.pin_container}>
        {loading && <div>loading...</div>}
        {!loading && data3 === ""
          ? data.map((x) => (
              <>
                <Link
                  className={`${styleHover(content)} relative ImageWorks`}
                  to={`/detailworks/${x.id_images}`}
                  key={x.nama_image}
                  style={{
                    ...myArray[Math.floor(Math.random() * myArray.length)],
                    backgroundImage: `url(https://api.sarafdesign.com/uploads/${x.file})`,
                  }}
                ></Link>
              </>
            ))
          : data
              // .filter((y) => {
              //   //   for (let i = 0; i < data2.length; i++) {
              //   // if (data.id_category[i].includes(y.)) {
              //   //   return articles.id;
              //   // }
              //   // }
              //   y.id_category === data3;
              // })
              .filter((y) => y.id_category === data3)
              .map((x) => (
                <>
                  <Link
                    to={`/detailworks/${x.id_images}`}
                    key={x.nama_image}
                    style={{
                      ...myArray[Math.floor(Math.random() * myArray.length)],
                      backgroundImage: `url(https://api.sarafdesign.com/uploads/${x.file})`,
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
