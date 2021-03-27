import React, { useState, useEffect } from "react";
import twitter from "../assets/image/Twitter.svg";
import facebook from "../assets/image/Facebook.svg";
import fiverr from "../assets/image/Fiverr.svg";
import instagram from "../assets/image/Instagram.svg";
import inprnt from "../assets/image/inprnt.svg";
import kofi from "../assets/image/mug.svg";
import artstation from "../assets/image/artstation.svg";

import axios from "axios";
import { Link, useHistory } from "react-router-dom";

var Recaptcha = require("react-recaptcha");

const Footer = () => {
  let history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // specifying your onload callback function
  // useEffect(() => {
  // });
  let callback = function () {
    console.log("Done!!!!");
  };
  const [data, setData] = useState(false);

  // specifying verify callback function
  var verifyCallback = function (response) {
    console.log(response);
    if (response) {
      setData(true);
    } else {
      alert("Coud not get recaptcha response");
    }
  };

  const handleChange1 = (e) => setName(e.target.value);
  const handleChange2 = (e) => setEmail(e.target.value);
  const handleChange3 = (e) => setMessage(e.target.value);

  let captcha;
  const resetCaptcha = () => {
    // maybe set it till after is submitted
    captcha.reset();
  };

  const handleContact = (e) => {
    e.preventDefault();
    if (data) {
      // setError(null);
      setLoading(true);
      const contact = {
        name: name,
        email: email,
        message: message,
      };
      axios
        .post("http://api.sarafdesign.com/contact", contact)
        .then((res) => {
          // console.log("Ini Hasil:");
          // console.log(res);
          // console.log("Berhasil Masuk");
          alert("Telah Dikirim");
          setTimeout(() => {
            history.push("/");
            window.location.reload();
          }, 3000);
        })
        .catch((error) => {
          setLoading(false);
          // console.log("salah");
          // console.log(error);
        });
    } else {
      alert("Please verify that you are human!");
    }
  };

  return (
    <>
      {/* {console.log("Nama:" + name)}
      {console.log("Email:" + email)}
      {console.log("Message:" + message)} */}
      <div className="footer-omorphia">
        <div className="contact text-white mb-32">
          <div className="md:flex md:container md:mx-auto">
            <div className="flex-auto 2xl:ml-40 2xl:mt-28 ml-8 mt-20">
              <h3 className="text-4xl mb-5">Get in Touch</h3>
              <p className="md:w-3/5">
                If you find our works interesting, and want to collaborate,
                don't hesitate to contact us.
              </p>
            </div>
            <div className="flex-auto lg:mr-40">
              <form onSubmit={handleContact} className="mt-6">
                <div className="md:w-full px-3 mb-6 md:mb-4">
                  <input
                    className="w-full bg-white bg-opacity-20 text-black border-b-4 border-white-600 rounded-t-lg py-3 px-4 mb-3"
                    type="text"
                    placeholder="Your Name*"
                    id="name"
                    onChange={handleChange1}
                  />
                </div>
                <div className="md:w-full px-3 mb-6 md:mb-4">
                  <input
                    className="w-full bg-white bg-opacity-20 text-black border-b-4 border-white-600 rounded-t-lg py-3 px-4 mb-3"
                    type="text"
                    placeholder="Your Email*"
                    id="email"
                    onChange={handleChange2}
                  />
                </div>
                <div className="md:w-full px-3 mb-6 md:mb-4">
                  <textarea
                    className="w-full bg-white bg-opacity-20 text-black border-b-4 border-white-600 rounded-t-lg py-3 px-4 mb-3"
                    type="text"
                    placeholder="Message*"
                    id="message"
                    onChange={handleChange3}
                  ></textarea>
                </div>
                <div className="md:w-full px-3 mb-6 md:mb-4">
                  <Recaptcha
                    sitekey="6LezuY4aAAAAAHRdlqMgHS7Wf3Z2ng7lX22Z_1C0"
                    render="explicit"
                    verifyCallback={verifyCallback}
                    onloadCallback={callback}
                    onChange={() => resetCaptcha()}
                  />
                </div>
                <div className="flex flex-col justify-center items-center md:flex-none md:justify-start md:items-start">
                  <button
                    className="button-message bg-gradient-to-b from-blue-nebula to-nebula hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="section-footer">
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-2xl">Catch us on</h1>
            <div className="icon-social grid grid-cols-7 p-10">
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
            <footer className="font-semibold  pb-10">
              <h2>© 2020 Omorphia Visual</h2>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
