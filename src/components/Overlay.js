// import "../App.css";
import React, { useState, useEffect } from "react";
import OverlayStart from "../assets/image/overlays/overlay-start.svg";
import OverlayLoad from "../assets/image/overlays/overlay.svg";
import OverlayEnd from "../assets/image/overlays/overlay-end.svg";
import EndOverlay from "../assets/image/overlays/endof-overlay.svg";
import "../overlay.css";



const Overlay = () => {
    return(
        <>
      <div className="overlay-start">
          <img src={OverlayStart} alt="" />
      </div>
      {/* <div className="overlay-load">
          <img src={OverlayLoad} alt="" />
      </div> */}
        </>
    )
}


export default Overlay;
