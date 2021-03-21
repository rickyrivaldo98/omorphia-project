import React from "react";
import OnePiece from "../src/assets/image/works/onepiece.png";
import "./works.css";

const DetailWorks = () => {
  return (
    <>
      <div
        className="bg-detailWorks"
        style={{ backgroundImage: `url(${OnePiece})` }}
      >
        <div className="container mx-auto">
          <div className=" mt-60">
            <p className=" category-display text-center px-8 py-2">
              Project Non Commisions
            </p>
            <p className="text-white text-5xl mt-2 font-semibold">
              One Piece's Ship
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailWorks;
