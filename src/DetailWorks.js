import React from "react";
import OnePiece from "../src/assets/image/works/onepiece.png";
import "./works.css";

import twitter from "./assets/image/Twitter.svg";
import facebook from "./assets/image/Facebook.svg";
import fiverr from "./assets/image/Fiverr.svg";
import instagram from "./assets/image/Instagram.svg";
import inprnt from "./assets/image/inprnt.svg";
import kofi from "./assets/image/mug.svg";
import artstation from "./assets/image/artstation.svg";
import { Link, useHistory } from "react-router-dom";

const DetailWorks = () => {
  return (
    <>
      <div
        className="bg-detailWorks relative"
        style={{ backgroundImage: `url(${OnePiece})` }}
      >
        <div className="container mx-auto">
          <div className="transform translate-y-64">
            <p className="category-display xs:w-2/3 md:w-1/3 lg:w-1/6 text-center px-8 py-2">
              Project Non Commisions
            </p>
            <p className="text-white text-5xl mt-2 font-semibold">
              One Piece's Ship
            </p>
          </div>
        </div>
        <div className="footer-works absolute bottom-0 text-white bg-white w-full bg-opacity-50 p-5 flex items-center justify-between ">
          <p>© Copyright 2020 Omorphia Visual All rights reserved.</p>
          <div className="icon-social flex float-right">
            <Link
              to={{ pathname: "https://www.instagram.com/omorphiavisual/" }}
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
              to={{ pathname: "https://www.fiverr.com/omorphiavisual" }}
              target="_blank"
            >
              <img className="px-1 md:px-3" src={fiverr} alt="" />
            </Link>
            <Link
              to={{ pathname: "https://www.inprnt.com/gallery/omorphia/#" }}
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
              to={{ pathname: "https://www.artstation.com/omorphia " }}
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
