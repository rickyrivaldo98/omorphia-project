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
  const [isOverlayOver, setOverlayOver] = useState(false);

  useEffect(() => {
    const loading1 = setTimeout(() => {
      setOverlayStart(false);
      setOverlayEnd(true);
    }, 2000);
    return () => clearTimeout(loading1);
  });

  useEffect(() => {
    const loading2 = setTimeout(() => {
      setOverlayEnd(false);
      setOverlayOver(true);
    }, 2000);
    return () => clearTimeout(loading2);
  });

  useEffect(() => {
    const loading3 = setTimeout(() => {
      setOverlayOver(false);
      setOverlayLoad(true);
    }, 2000);
    return () => clearTimeout(loading3);
  });

  return (
    <>
      {isOverlayStart && (
        <div className="overlay-start">
          <img src={OverlayStart} alt="" />
        </div>
      )}
      {isOverlayEnd && (
        <div className="overlay-end">
          <img src={OverlayEnd} alt="" />
        </div>
      )}
      {isOverlayLoad && (
        <div className="overlay-load">
          <img src={OverlayLoad} alt="" />
        </div>
      )}
      {isOverlayOver && (
        <div className="overlay-over">
          <img src={EndOverlay} alt="" />
        </div>
      )}
    </>
  );
};

export default Overlay;
