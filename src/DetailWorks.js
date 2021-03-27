import React, { useState, useEffect } from "react";
import OnePiece from "../src/assets/image/works/onepiece.png";
import "./works.css";
import axios from "axios";

import twitter from "./assets/image/Twitter.svg";
import facebook from "./assets/image/Facebook.svg";
import fiverr from "./assets/image/Fiverr.svg";
import instagram from "./assets/image/Instagram.svg";
import inprnt from "./assets/image/inprnt.svg";
import kofi from "./assets/image/mug.svg";
import artstation from "./assets/image/artstation.svg";
import { Link, useParams, useHistory } from "react-router-dom";

const DetailWorks = () => {
  let { imageId } = useParams();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  // console.log("ini adalah" + id);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://api.sarafdesign.com/images/${imageId}`).then((res) => {
      setData(res.data[0]);

      axios
        .get(`https://api.sarafdesign.com/gallery/${res.data[0].id_gallery}`)
        .then((res2) => {
          setData2(res2.data[0]);
          axios
            .get(
              `https://api.sarafdesign.com/category/${res2.data[0].id_category}`
            )
            .then((res3) => {
              setData3(res3.data[0]);
              // console.log(res3.data[0]);
              axios
                .get(
                  `https://api.sarafdesign.com/images/gallery/${res2.data[0].id_gallery}`
                )
                .then((res4) => {
                  setData4(res4.data);
                  // console.log(res4.data);
                });
            });
        });
    });
    setLoading(false);
  }, []);
  // console.log(data);
  return (
    <>
      <div
        className="bg-detailWorks relative"
        style={{
          backgroundImage: `url(https://api.sarafdesign.com/${data.file})`,
        }}
      >
        <div className="container mx-auto">
          <div className="transform translate-y-64">
            <p className="category-display xs:w-2/3 md:w-1/3 lg:w-1/6 text-center px-8 py-2">
              {data3.category_nama}
            </p>
            <p className="text-white text-5xl mt-2 font-semibold">
              {data.images_nama}
            </p>
            <p>{data2.deskripsi}</p>
          </div>
          <div className="flex flex-wrap absolute bottom-96 text-white bg-opacity-20  bg-gray-900">
            {loading && <div>loading...</div>}
            {!loading &&
              data4.map((x) => (
                <>
                  <img
                    className="w-32 p-3 box-image  "
                    key={x.images_nama}
                    src={`https://api.sarafdesign.com/${x.file}`}
                    alt=""
                  />
                </>
              ))}
          </div>
        </div>
        <div className="footer-works absolute bottom-0 text-white bg-white w-full bg-opacity-50 p-5 flex items-center justify-between ">
          <p>© Copyright 2020 Omorphia Visual All rights reserved.</p>
          <div className="icon-social flex float-right">
            <Link
              to={{
                pathname: "https://www.instagram.com/omorphiavisual/",
              }}
              target="_blank"
            >
              <img className="px-1 md:px-3" src={instagram} alt="" />
            </Link>
            <Link
              to={{ pathname: "https://twitter.com/omorphia1 " }}
              target="_blank"
            >
              <img className="px-1 md:px-3" src={twitter} alt="" />
            </Link>
            <Link to={{ pathname: "" }} target="_blank">
              <img className="px-1 md:px-3" src={facebook} alt="" />
            </Link>
            <Link
              to={{
                pathname: "https://www.fiverr.com/omorphiavisual",
              }}
              target="_blank"
            >
              <img className="px-1 md:px-3" src={fiverr} alt="" />
            </Link>
            <Link
              to={{
                pathname: "https://www.inprnt.com/gallery/omorphia/#",
              }}
              target="_blank"
            >
              <img className="px-1 md:px-3" src={inprnt} alt="" />
            </Link>
            <Link
              to={{ pathname: "https://ko-fi.com/omorphia" }}
              target="_blank"
            >
              <img className="px-1 md:px-3" src={kofi} alt="" />
            </Link>
            <Link
              to={{
                pathname: "https://www.artstation.com/omorphia ",
              }}
              target="_blank"
            >
              <img className="px-1 md:px-3" src={artstation} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailWorks;
