import React, { useState, useEffect } from "react";
import Contactinfo from "./components/Contactinfo";
import Dropdown from "./components/Dropdown";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

const Contacts = () => {
  // fungsi navbar untuk dibuka di mobile
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  // akhir fungsi navbar
  return (
    <>
      <div className="bg-stars">
        <div className="mb-40">
          <Navbar toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
        </div>
        <Contactinfo />
      </div>
    </>
  );
};

export default Contacts;
