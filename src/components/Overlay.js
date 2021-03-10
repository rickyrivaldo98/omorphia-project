// import "../App.css";
import React, { useState, useEffect } from "react";
import OverlayStart from "../assets/image/overlays/overlay-start.svg";
import OverlayLoad from "../assets/image/overlays/overlay.svg";
import OverlayEnd from "../assets/image/overlays/overlay-end.svg";
import EndOverlay from "../assets/image/overlays/endof-overlay.svg";
import "../overlay.css";

const Overlay = () => {
  const [isOverlayStart, setOverlayStart] = useState(true);
  const [isOverlayEnd, setOverlayEnd] = useState(false);
  const [isOverlayLoad, setOverlayLoad] = useState(false);

  useEffect(() => {
    // console.log(isOverlayStart);
    // console.log(isOverlayEnd);
    // setOverlayStart(true);

    // console.log(isOverlayStart);
    setTimeout(() => {
      setOverlayStart(false);
      setOverlayEnd(true);
    }, 2000);

    setTimeout(() => {
      setOverlayEnd(false);
      setOverlayLoad(true);
    }, 2000);

    // console.log(isOverlayStart);
    // setOverlayEnd(true);

    // console.log(isOverlayEnd);
    // setTimeout(() => {
    //   setOverlayEnd(false);
    // }, 3000);
    console.log(isOverlayStart);
    console.log(isOverlayEnd);
    console.log(isOverlayLoad);
  });

  return (
    <>
      {isOverlayStart && (
        <div className="overlay-start">
          <img src={OverlayStart} alt="" />
        </div>
      )}
      {isOverlayEnd && (
        <div className="overlay-load">
          <img src={OverlayEnd} alt="" />
        </div>
      )}
      {isOverlayLoad && (
        <div className="overlay-load">
          <img src={OverlayLoad} alt="" />
        </div>
      )}
    </>
  );
};

export default Overlay;
