import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import LogoAbout from "./assets/image/logoabout.svg";
import Youtube from "./assets/image/about/youtube.svg";
import Reddit from "./assets/image/about/reddit.svg";
import Snapchat from "./assets/image/about/snapchat.svg";
import Pack from "./assets/image/about/pack.svg";
import Octo from "./assets/image/about/octocat.svg";

import Ps from "./assets/image/about/ps.svg";
import Discord from "./assets/image/about/discord.svg";
import Github from "./assets/image/about/github.svg";
import Twitch from "./assets/image/about/twitch.svg";
import Slack from "./assets/image/about/slack.svg";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mt-56 w-full justify-center items-center flex flex-col mb-96">
        <img src={LogoAbout} alt="" className="mb-5" />
        <div className="md:w-1/3 "></div>
        <div className="text-white text-center md:w-1/3 font-bold md:text-2xl ">
          We are digging tunnels in creativity and paving the way for
          aesthetics. The Phantom rules. We follow him crafting brands,
          packaging, books – illustrating all the way into this occult
          pilgrimage. How we do it.
        </div>
        <div className="md:w-1/3"></div>
      </div>
      <div className="w-full mb-40 flex bg-black py-24">
        <div className="md:w-2/5 pl-80 text-white text-6xl font-medium">
          Who We Are
        </div>
        <div className="md:w-2/5 text-white text-xl font-medium">
          Roaming this world in his creative paths, exploring the inevitable
          limits of the human perception and artificial creativity.
          <br />
          <br /> The fear of white paper, the anxiety of a deadline, the blood
          rush of creation, the happiness of production; all of them embodied in
          an airy, mystical and mysterious form. <br />
          <br /> We are pilgrims, devoted disciples in all creative projects of
          the phantom. All the way. Phantom choose us. We obey.
        </div>
        <div className="md:w-1/5"></div>
      </div>
      <div className="w-full mb-40 py-24 flex bg-black">
        <div className="md:w-2/5 pl-80 text-white text-6xl font-medium">
          Selling Point
        </div>
        <div className="md:w-2/5 text-white text-xl font-medium">
          Phantom provides design solutions aesthetic supremacy and unique
          character in the fields of branding, packaging and web interfaces.
          Skilfully combining our craft in traditional and modern mediums – like
          new age artisans, we deliver exquisite and to the point outcomes.
          Looking at the bigger picture and tackling each issue with a holistic
          approach, here at Phantom we are have an eye on detail as well.
          Details make the difference; both in print and digital design, usually
          the small things are the most impactful. Founded in 2017 by Marios
          Georntamilis.
        </div>
        <div className="md:w-1/5"></div>
      </div>
      <div className="w-full mb-40 py-24 flex bg-black">
        <div className="md:w-2/5 pl-80 text-white text-6xl font-medium">
          Our Client
        </div>
        <div className="md:w-2/5">
          <div className="flex">
            <img className="pr-24" src={Youtube} alt="" />
            <img className="pr-24" src={Reddit} alt="" />
            <img className="pr-24" src={Snapchat} alt="" />
            <img className="pr-24" src={Pack} alt="" />
            <img className="pr-24" src={Octo} alt="" />
          </div>
          <div className="flex mt-14">
            <img className="pr-24" src={Ps} alt="" />
            <img className="pr-24" src={Discord} alt="" />
            <img className="pr-24" src={Github} alt="" />
            <img className="pr-24" src={Twitch} alt="" />
            <img className="pr-24" src={Slack} alt="" />
          </div>
        </div>
        <div className="md:w-1/5"></div>
      </div>

      <Footer />
    </>
  );
};

export default About;
