import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Logo from "../assets/image/logo-brand.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-transparent text-white relative pt-10 ">
        <Link to="/" className="2xl:pl-72 xl:pl-64 lg:pl-28 md:pl-20 pl-10">
          <img src={Logo} alt="" />
        </Link>
        <div className="px-10 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <div className="pr-10 hidden md:block 2xl:pr-72 xl:pr-64 lg:pr-28">
          <Link
            className=" text-base lg:text-xl font-medium 
          2xl:mr-10 xl:mr-5 lg:mr-3"
            to="/"
          >
            <button className="py-2 px-4 rounded-full transition duration-500 bg-transparent hover:bg-green-400 ">
              Home
            </button>
          </Link>
          <Link
            className=" text-base lg:text-xl 2xl:mr-10 xl:mr-5 lg:mr-3"
            to="/about"
          >
            <button className="py-2 px-4 rounded-full transition duration-500 bg-transparent hover:bg-green-400 ">
              About
            </button>
          </Link>
          <Link
            className=" text-base lg:text-xl 2xl:mr-10 xl:mr-5 lg:mr-3"
            to="/services"
          >
            <button className="py-2 px-4 rounded-full transition duration-500 bg-transparent hover:bg-green-400 ">
              Services
            </button>
          </Link>
          <Link
            className=" text-base lg:text-xl 2xl:mr-10 xl:mr-5 lg:mr-3"
            to="/works"
          >
            <button className="py-2 px-4 rounded-full transition duration-500 bg-transparent hover:bg-green-400">
              Works
            </button>
          </Link>
          <Link className=" text-base lg:text-xl " to="/contact">
            <button className="py-2 px-4 rounded-full transition duration-500 bg-transparent hover:bg-green-400 ">
              Contact
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
