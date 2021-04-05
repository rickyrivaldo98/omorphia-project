import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <>
      <div
        className={
          isOpen
            ? "grid grid-rows-5 text-center items-center bg-transparent text-white pt-5"
            : "hidden"
        }
        onClick={toggle}
      >
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
    </>
  );
};

export default Dropdown;
