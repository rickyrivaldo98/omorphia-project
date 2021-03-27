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
  const [data3, setData3] = useState([]);

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

  console.log("isi category" + data3.map((x) => x.id_category));
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
      <div className="flex flex-col justify-center items-center text-white ">
        <div className="py-10">
          <button class="btn-filter bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full">
            All
          </button>
          {data2.map((x) => (
            <button class="btn-filter bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full border border-white-500 hover:border-transparent rounded">
              {x.category_nama}
            </button>
          ))}
          {/* <button class="btn-filter bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full border border-white-500 hover:border-transparent rounded">
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
          </button> */}
        </div>
      </div>
      <div style={styles.pin_container}>
        {loading && <div>loading...</div>}
        {!loading &&
          data
            //           .filter((y)=>{
            //             for (let i = 0; i < data2.length; i++) {
            //             if (data.id_category[i].includes(y.)) {
            //               return articles.id;
            //             }
            //           }
            //           }
            // )
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
