import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar_admin from "./components/Admin/Navbar_admin";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./components/Admin/Sidebar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./admin.css";
import Dashboard from "./components/Admin/Dashboard";
import AdminWorks from "./components/Admin/Admin_Works";
import { useAlert } from "react-alert";
import AdminCategory from "./components/Admin/Admin_Category";

import CardDashboard from "./components/Admin/Cards/CardDashboard";
import AdminContact from "./components/Admin/Admin_Contact";
import AdminWorksDetail from "./components/Admin/Admin_WorksDetail";
import AddImages from "./components/Admin/Form/AddImages";
import styled from "styled-components";
import AddGallery from "./components/Admin/Form/AddGallery";
import EditImages from "./components/Admin/Form/EditImages";
import AddCategory from "./components/Admin/Form/AddCategory";
import EditCategory from "./components/Admin/Form/EditCategory";

const StyledAdmin = styled.div`
  font-family: "Nunito";
`;

const Admin = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  let history = useHistory();

  useEffect(() => {
    // setLoading(true);
    axios
      .get("https://api.sarafdesign.com/checkUser")
      .then((res) => {
        if (res.status === 403) {
          history.push("/login");
          // setTimeout(() => {
          //   history.push("/login");
          // }, 1000);
          alert.show("Anda belum login");
          // console.log(error);
        }
        history.push("/admin");
      })
      .catch((err) => {
        if (err.response) {
          history.push("/login");
          // setTimeout(() => {
          //   history.push("/login");
          // }, 1000);
          alert("Anda belum login");
          // console.log(error);
        }
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="App"></div>;
  }

  return (
    <>
      <StyledAdmin>
        <Sidebar />
        <div className="relative md:ml-64">
          <Navbar_admin />
          <CardDashboard />

          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <Switch>
              <Route path="/admin/dashboard">
                <Dashboard />
              </Route>
              <Route path="/admin/adminworksdetail/:id">
                <AdminWorksDetail />
              </Route>
              <Route path="/admin/addimages/:id">
                <AddImages />
              </Route>
              <Route path="/admin/editimages/:id">
                <EditImages />
              </Route>
              <Route path="/admin/addgallery">
                <AddGallery />
              </Route>
              <Route path="/admin/addcategory">
                <AddCategory />
              </Route>
              <Route path="/admin/admincategory">
                <AdminCategory />
              </Route>
              <Route path="/admin/editcategory/:id">
                <EditCategory />
              </Route>
              <Route path="/admin/adminworks">
                <AdminWorks />
              </Route>

              <Route path="/admin/admincontacts">
                <AdminContact />
              </Route>
            </Switch>
          </div>
        </div>
      </StyledAdmin>
    </>
  );
};

export default Admin;
