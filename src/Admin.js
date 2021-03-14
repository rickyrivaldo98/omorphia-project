import React from "react";
import Navbar_admin from "./components/Admin/Navbar_admin";
import Sidebar from "./components/Admin/Sidebar";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Admin = () => {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
        <Navbar_admin />
      </div>
    </>
  );
};

export default Admin;
