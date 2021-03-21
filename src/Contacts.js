import React from "react";
import Contactinfo from "./components/Contactinfo";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

const Contacts = () => {
  return (
    <>
      <div className="bg-stars">
        <div className="mb-40">
          <Navbar />
        </div>
        <Contactinfo />
      </div>
    </>
  );
};

export default Contacts;
