import React from "react";

import twitter from "../assets/image/Twitter.svg";
import facebook from "../assets/image/Facebook.svg";
import fiverr from "../assets/image/Fiverr.svg";
import instagram from "../assets/image/Instagram.svg";



const Footer = () => {
  return (
    <>
      <div className="contact text-white mb-32">
        <div className="flex md:container md:mx-auto">
          <div className="flex-auto ml-40 mt-28">
            <h3 className="text-4xl mb-5">Get in Touch</h3>
            <p>If you find our works interesting, and want to <br /> collaborate, don't hesitate to contact us.</p>
          </div>
          <div className="flex-auto lg:mr-40">
            <form action="" className="mt-6">
              <div className="md:w-full px-3 mb-6 md:mb-4">
                <input className="w-full bg-white bg-opacity-20 text-black border-b-4 border-white-600 rounded-t-lg py-3 px-4 mb-3" type="text" placeholder="Your Name*" />
              </div>
              <div className="md:w-full px-3 mb-6 md:mb-4">
                <input className="w-full bg-white bg-opacity-20 text-black border-b-4 border-white-600 rounded-t-lg py-3 px-4 mb-3" type="text" placeholder="Your Email*" />

              </div>
              <div className="md:w-full px-3 mb-6 md:mb-4">
                <textarea className="w-full bg-white bg-opacity-20 text-black border-b-4 border-white-600 rounded-t-lg py-3 px-4 mb-3" placeholder="Message*"></textarea>
              </div>
              <button class="bg-gradient-to-b from-blue-nebula to-nebula hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>



      <div className="flex flex-col justify-center items-center text-white">
        <h1 className="text-2xl">Catch us on</h1>
        <div className="icon-social grid grid-cols-4 p-10">
          <img className="pl-3 pr-3" src={twitter} alt="" />
          <img className="pl-3 pr-3" src={instagram} alt="" />
          <img className="pl-3 pr-3" src={facebook} alt="" />
          <img className="pl-3 pr-3" src={fiverr} alt="" />
        </div>
        <footer className="font-semibold  pb-10">
          <h2>© 2020 Omorphia Visual</h2>
        </footer>
      </div>


    </>
  );
};

export default Footer;

