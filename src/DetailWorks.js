import React, { useState, useEffect } from "react";
// import OnePiece from "../src/assets/image/works/onepiece.png";
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
import { css } from "glamor";
import Footer from "./layout/Footer";

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
  const [namaImage, setNamaImage] = useState();

  let history = useHistory();

  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar

  //mendapatkan value dari api, urutan gambar detail setelah di klik, id gallery, id category, gallery untuk detail
  useEffect(() => {
    setLoadingFull(true);
    axios.get(`https://api.sarafdesign.com/images/${imageId}`).then((res) => {
      setData(res.data[0]);
      setImageBG(res.data[0].file);
      setNamaImage(res.data[0].images_nama);
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
  // selesai API

  // style untuk container tampilan gambar medium large small
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
  // akhir dari membuat container gambar

  // set variable untuk random size image
  var myArray = [Size.small, Size.medium, Size.large];

  // ketika di klik setiap gambar akan reload
  const clickHandle = (e) => {
    history.push(`/detailworks/${e}`);
    window.location.reload();
  };

  // fungsi untuk tampilan detail gambar saat mobile
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
  // selesai fungsi tampilan detail gambar mobile

  // style untuk hover image
  var content = "belum bisa untuk hover tulisan, kemungkinan malam mas";

  const styleHover = css({
    ":hover::after": {
      content: `${content}`,
      color: "white",
      position: "absolute",
      // background: "red",
      top: "0",
      left: "0",
      height: "100%",
      width: " 100%",
      // background: radial-gradient(90.94% 80.15% at 50.13% 7.12%,#5d27ab 0%,#0d1632 100%),
      borderRadius: "16px",
      opacity: " 0.8",
    },
  });

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
              // menampilkan gambar ketika di klik
              style={{
                backgroundImage: `url(https://api.sarafdesign.com/uploads/${imageBG})`,
              }}
            >
              <div className="hidden lg:block">
                <Navbar toggle={toggle} />
                <Dropdown isOpen={isOpen} toggle={toggle} />
              </div>
              <div className="container p-3 mx-auto ">
                <div className="  mt-32 ml-32  ">
                  <button
                    style={{ cursor: "context-menu" }}
                    disabled
                    className="category-display  text-white text-center px-8 py-2"
                  >
                    {data3.category_nama}
                  </button>
                  <p className="text-shadow text-shadow-md text-white text-5xl mt-2 font-semibold">
                    {namaImage}
                  </p>
                  <p className="text-shadow text-shadow-md text-white w-1/3 mt-6 font-normal">
                    {data2.deskripsi}
                  </p>
                  {data5.length < 3 ? (
                    <button
                      style={{ cursor: "context-menu" }}
                      disabled
                      className="flex flex-nowrap overflow-x-scroll  xl:mt-20 mt-32 rounded-lg  text-white bg-opacity-20  bg-gray-900"
                    >
                      {loading && <div>loading...</div>}
                      {!loading &&
                        // menampilkan semua gambar pada project
                        data5.map((x) => (
                          <>
                            <img
                              className={
                                namaImage === x.images_nama
                                  ? "w-32 p-2 box-image visited"
                                  : "w-32 p-3 box-image "
                              }
                              onClick={() => {
                                setImageBG(x.file);
                                setNamaImage(x.images_nama);
                              }}
                              key={x.images_nama}
                              src={`https://api.sarafdesign.com/uploads/${x.file}`}
                              alt=""
                            />
                          </>
                        ))}
                    </button>
                  ) : (
                    <div className="flex flex-nowrap overflow-x-scroll md:w-1/4 xl:mt-20 mt-32 rounded-lg p-3  text-white bg-opacity-20  bg-gray-900">
                      {loading && <div>loading...</div>}
                      {!loading &&
                        // menampilkan semua gambar pada project
                        data5.map((x) => (
                          <>
                            <img
                              className={
                                namaImage === x.images_nama
                                  ? "w-32 p-2 box-image visited"
                                  : "w-32 p-3 box-image "
                              }
                              onClick={() => {
                                setImageBG(x.file);
                                setNamaImage(x.images_nama);
                              }}
                              key={x.images_nama}
                              src={`https://api.sarafdesign.com/uploads/${x.file}`}
                              alt=""
                            />
                          </>
                        ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="footer-works h-screen mb-auto absolute bottom-0 text-white bg-white w-full bg-opacity-50 p-5 flex items-center justify-between ">
                <p>© Copyright 2020 Omorphia Visual All rights reserved.</p>
                <div className="icon-social flex float-right">
                  <a
                    href="https://www.instagram.com/omorphiavisual/"
                    target="_blank"
                  >
                    <img className="px-1 md:px-3" src={instagram} alt="" />
                  </a>
                  <a href="https://twitter.com/omorphia1 " target="_blank">
                    <img className="px-1 md:px-3" src={twitter} alt="" />
                  </a>
                  <a to={{ pathname: "" }} target="_blank">
                    <img className="px-1 md:px-3" src={facebook} alt="" />
                  </a>
                  <a
                    href="https://www.fiverr.com/omorphiavisual"
                    target="_blank"
                  >
                    <img className="px-1 md:px-3" src={fiverr} alt="" />
                  </a>
                  <a
                    href="https://www.inprnt.com/gallery/omorphia/#"
                    target="_blank"
                  >
                    <img className="px-1 md:px-3" src={inprnt} alt="" />
                  </a>
                  <a href="https://ko-fi.com/omorphia" target="_blank">
                    <img className="px-1 md:px-3" src={kofi} alt="" />
                  </a>
                  <a
                    href="https://www.artstation.com/omorphia "
                    target="_blank"
                  >
                    <img className="px-1 md:px-3" src={artstation} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:hidden">
              <Navbar toggle={toggle} />
              <Dropdown isOpen={isOpen} toggle={toggle} />
            </div>

            {/*t tampilan untuk mobile  */}
            <div className="lg:hidden mt-10 overflow-hidden">
              <Slider {...settings}>
                {loading && <div>loading...</div>}
                {!loading &&
                  // menampilkan gambar mobile satu per satu
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
                            backgroundImage: `url(https://api.sarafdesign.com/uploads/${img.file})`,
                          }}
                        ></div>
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

            {/* ini untuk menampilkan gambar container yang berhubungan dengan gambar yang sudah di klik */}
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
                        className={`${styleHover} relative ImageWorks`}
                        onClick={() => clickHandle(x.id_images)}
                        key={x.nama_image}
                        style={{
                          ...myArray[
                            Math.floor(Math.random() * myArray.length)
                          ],
                          backgroundImage: `url(https://api.sarafdesign.com/uploads/${x.file})`,
                        }}
                      ></div>
                    </>
                  ))}
            </div>
            <div className="mt-10">
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailWorks;
