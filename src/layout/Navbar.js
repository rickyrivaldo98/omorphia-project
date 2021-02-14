import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/logo-brand.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-16 bg-transparent text-white relative pt-10 ">
        <Link to="/" className="2xl:pl-72 xl:pl-64 lg:pl-28 md:pl-20 pl-10">
          <img src={Logo} alt="" />
        </Link>
        <div className="px-10 cursor-pointer md:hidden">
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
          <Link className="p-4" to="/">
            Home
          </Link>
          <Link className="p-4" to="/about">
            About
          </Link>
          <Link className="p-4" to="/services">
            Services
          </Link>
          <Link className="p-4" to="/works">
            Works
          </Link>
          <Link className="p-4" to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
