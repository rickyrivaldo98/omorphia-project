import React, { useState, useEffect } from "react";
import axios from "axios";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from "react-router-dom";
import Image1 from "../assets/image/gallery/10.png";
import Image2 from "../assets/image/gallery/9.png";
import Image3 from "../assets/image/gallery/2.png";
import Image4 from "../assets/image/gallery/4.png";

const Mycomponent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("https://api.sarafdesign.com/images/gallery").then((res) => {
      setData(res.data);
    });
    setLoading(false);
  }, []);

  const Size = {
    square: {
      position: "relative",
      width: "300px",
      height: "300px",
      backgroundColor: "aqua",
    },
    long: {
      position: "relative",
      width: "670px",
      height: "300px",
      backgroundColor: "aqua",
    },
  };

  console.log(data);
  var randomSize = [Size.square, Size.long];

  return (
    <div style={{ transform: "rotate(-2deg)" }}>
      <div className="animate-translateX">
        <div className="popup-gallery pb-5 flex">
          {loading && <div>loading...</div>}
          {!loading &&
            data.slice(0, 10).map((x) => (
              <div className="px-3 items-center">
                <div
                  key={x.nama_image}
                  className="gallery"
                  style={{
                    ...randomSize[
                      Math.floor(Math.random() * randomSize.length)
                    ],
                    backgroundImage: `url(https://api.sarafdesign.com/${x.file})`,
                  }}
                ></div>
              </div>
            ))}
        </div>
        <div className="popup-gallery transform -translate-x-60 relative flex flex-nowrap">
          {loading && <div>loading...</div>}
          {!loading &&
            data.slice(-10, -1).map((x) => (
              <div className="px-3 items-center">
                <div
                  key={x.nama_image}
                  className="gallery"
                  style={{
                    ...randomSize[
                      Math.floor(Math.random() * randomSize.length)
                    ],
                    backgroundImage: `url(https://api.sarafdesign.com/${x.file})`,
                  }}
                ></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Mycomponent;
