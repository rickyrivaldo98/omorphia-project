import React, { useState, useEffect } from "react";
import OnePiece from "../src/assets/image/works/onepiece.png";
import "./works.css";
import axios from "axios";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import twitter from "./assets/image/Twitter.svg";
import facebook from "./assets/image/Facebook.svg";
import fiverr from "./assets/image/Fiverr.svg";
import instagram from "./assets/image/Instagram.svg";
import inprnt from "./assets/image/inprnt.svg";
import kofi from "./assets/image/mug.svg";
import artstation from "./assets/image/artstation.svg";
import { Link, useParams, useHistory } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Dropdown from "./components/Dropdown";
import Loader from "react-loader-spinner";

const DetailWorks = () => {
  let { imageId } = useParams();
  const [loadingFull, setLoadingFull] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [imageBG, setImageBG] = useState();

  let history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLoadingFull(true);
    axios.get(`https://api.sarafdesign.com/images/${imageId}`).then((res) => {
      setData(res.data[0]);
      setImageBG(res.data[0].file);
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
              axios
                .get("https://api.sarafdesign.com/images/gallery")
                .then((res4) => {
                  setData4(res4.data);
                  // console.log(res3.data[0]);
                  axios
                    .get(
                      `https://api.sarafdesign.com/images/gallery/${res2.data[0].id_gallery}`
                    )
                    .then((res5) => {
                      setData5(res5.data);
                      // console.log(res4.data);
                    });
                });
            });
        });
      setTimeout(() => {
        setLoadingFull(false);
      }, 2000);
    });
  }, []);

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

  const clickHandle = (e) => {
    history.push(`/detailworks/${e}`);
    window.location.reload();
  };
  // var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  // console.log("ini " + data4);
  // console.log("isi " + imageBG);
  // console.log("isi api " + data.file);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,

    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <>
      {loadingFull ? (
        <div className="loading-screen">
          <Loader
            className="flex items-center justify-center mx-auto text-center mt-10 mb-10"
            type="Oval"
            color="#00BFFF"
            height={80}
            width={80}
          />
        </div>
      ) : (
        <>
          <div className="bg-stars">
            <div
              className="hidden lg:block bg-detailWorks relative overflow-hidden"
              style={{
                backgroundImage: `url(https://api.sarafdesign.com/${imageBG})`,
              }}
            >
              <div className="container p-3 mx-auto">
                <div className="transform md:translate-x-24 translate-y-64">
                  <p className="category-display xs:w-2/3 md:w-1/3 lg:w-1/6 text-white text-center px-8 py-2">
                    {data3.category_nama}
                  </p>
                  <p className="text-white text-5xl mt-2 font-semibold">
                    {data.images_nama}
                  </p>
                  <p className="text-white  mt-6 font-normal">
                    {data2.deskripsi}
                  </p>
                </div>
                <div className="flex flex-wrap absolute md:bottom-48 lg:bottom-96 text-white bg-opacity-20  bg-gray-900">
                  {loading && <div>loading...</div>}
                  {!loading &&
                    data5.map((x) => (
                      <>
                        <img
                          className="w-32 p-3 box-image  "
                          onClick={() => setImageBG(x.file)}
                          key={x.images_nama}
                          src={`https://api.sarafdesign.com/${x.file}`}
                          alt=""
                        />
                      </>
                    ))}
                </div>
              </div>
              <div className="footer-works h-screen mb-auto absolute bottom-0 text-white bg-white w-full bg-opacity-50 p-5 flex items-center justify-between ">
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
            <div className="lg:hidden">
              <Navbar toggle={toggle} />
              <Dropdown isOpen={isOpen} toggle={toggle} />
            </div>
            <div className="lg:hidden mt-10">
              <Slider {...settings}>
                {loading && <div>loading...</div>}
                {!loading &&
                  data5.map((img, idx) => (
                    <>
                      <div
                        className={
                          idx === imageIndex ? "slide activeSlide" : "slide"
                        }
                      >
                        <div
                          onClick={() => setImageBG(img.file)}
                          key={img.images_nama}
                          className="bg-mobileDetail"
                          style={{
                            backgroundImage: `url(https://api.sarafdesign.com/${img.file})`,
                          }}
                        ></div>
                        {/* <img
                        onClick={() => setImageBG(img.file)}
                        key={img.images_nama}
                        src={`https://api.sarafdesign.com/${img.file}`}
                        alt=""
                      /> */}
                      </div>
                    </>
                  ))}
              </Slider>
              <div className="container mx-auto mt-10 p-10">
                <p className="category-display xs:w-2/3 md:w-1/3 lg:w-1/6 text-white text-center px-8 py-2">
                  {data3.category_nama}
                </p>
                <p className="text-white text-5xl mt-2 font-semibold">
                  {data.images_nama}
                </p>
                <p className="text-white  mt-6 font-normal">
                  {data2.deskripsi}
                </p>
              </div>
            </div>

            <div style={styles.pin_container}>
              {loading && <div>loading...</div>}
              {!loading &&
                data4
                  .filter((y) => y.id_category === data3.id_category)
                  .map((x) => (
                    <>
                      {/* <Link
                  to={`/detailworks/${x.id_images}`}
                  key={x.nama_image}
                  style={{
                    ...myArray[Math.floor(Math.random() * myArray.length)],
                    backgroundImage: `url(https://api.sarafdesign.com/${x.file})`,
                  }}
                ></Link> */}
                      <div
                        onClick={() => clickHandle(x.id_images)}
                        key={x.nama_image}
                        style={{
                          ...myArray[
                            Math.floor(Math.random() * myArray.length)
                          ],
                          backgroundImage: `url(https://api.sarafdesign.com/${x.file})`,
                        }}
                      ></div>
                    </>
                  ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailWorks;
