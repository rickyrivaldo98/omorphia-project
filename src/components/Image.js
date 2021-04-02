import React, { useState, useEffect } from "react";
import axios from "axios";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from "react-router-dom";

const Mycomponent = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // fungsi untuk memunculkan gambar di hlaman landing page menggunakan API
  useEffect(() => {
    setLoading(true);
    axios.get("https://api.sarafdesign.com/images/gallery").then((res) => {
      setData(res.data);
    });
    setLoading(false);
  }, []);

  // fungsi untuk set setiap container gambar pada landing page
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

  var randomSize = [Size.square, Size.long];

  return (
    <div style={{ transform: "rotate(-2deg)" }}>
      <div className="animate-translateX">
        <div className="popup-gallery pb-5 flex">
          {loading && <div>loading...</div>}
          {!loading &&
            // memunculkan data gambar hanya 10 gambar saja yang terdapat pada API
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
