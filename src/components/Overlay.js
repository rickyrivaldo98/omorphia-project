// import "../App.css";
import React, { useState, useEffect } from "react";
import OverlayStart from "../assets/image/overlays/loading.gif";

import "../overlay.css";
import { Transition } from "react-transition-group";
const Overlay = ({ in: inProp }) => {
  const [isOverlayStart, setOverlayStart] = useState(true);
  const [isOverlayEnd, setOverlayEnd] = useState(false);
  const [isOverlayLoad, setOverlayLoad] = useState(false);
  const [isOverlayOver, setOverlayOver] = useState(false);

  // useEffect(() => {
  //   const loading1 = setTimeout(() => {
  //     setOverlayStart(true);
  //     // setOverlayEnd(true);
  //   }, 2000);
  //   return () => clearTimeout(loading1);
  // });

  // useEffect(() => {
  //   const loading2 = setTimeout(() => {
  //     setOverlayStart(false);

  //     setOverlayEnd(true);
  //   }, 2000);
  //   return () => clearTimeout(loading2);
  // });

  // useEffect(() => {
  //   const loading3 = setTimeout(() => {
  //     setOverlayLoad(true);
  //     // setOverlayOver(true);
  //     setOverlayEnd(false);
  //   }, 2000);
  //   return () => clearTimeout(loading3);
  // });

  // useEffect(() => {
  //   const loading4 = setTimeout(() => {
  //     setOverlayLoad(false);
  //     setOverlayEnd(true);
  //   }, 2000);
  //   return () => clearTimeout(loading4);
  // });

  useEffect(() => {
    const loading1 = setTimeout(() => {
      setOverlayStart(false);
      // setOverlayEnd(true);
    }, 6000);
    return () => clearTimeout(loading1);
  });

  return (
    <>
      {isOverlayStart && (
        <Transition in={true} timeout={6000} appear>
          {(status) => (
            <div
              className={`overlay-${status} fixed bottom-0 top-0 left-0 right-0 flex h-screen`}
            >
              <img className="m-auto" src={OverlayStart} alt="" />
            </div>
          )}
        </Transition>
      )}
      {/* {isOverlayEnd && (
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
      )} */}
    </>
  );
};

export default Overlay;
