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
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState("");
  const [activeCat, setActiveCat] = useState("");
  const [activeAll, setActiveAll] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://api.sarafdesign.com/images/gallery").then((res) => {
      setData(res.data);
      console.log("isi gallery" + res.data);
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

  const isActivecat = (e) => {
    // e.preventDefault(e);
    setData3(e);
    setActiveCat(e);
    setActiveAll(false);
  };

  const isActiveall = (e) => {
    // e.preventDefault(e);
    setData3("");
    setActiveCat("");
    setActiveAll(true);
  };
  console.log("isi category: " + data3);

  console.log("nilai data 3: " + data3);
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
                  to={`/detailworks/${x.id_images}`}
                  key={x.nama_image}
                  style={{
                    ...myArray[Math.floor(Math.random() * myArray.length)],
                    backgroundImage: `url(https://api.sarafdesign.com/${x.file})`,
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
