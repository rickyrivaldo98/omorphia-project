import React from "react";
import Navbar_admin from "./components/Admin/Navbar_admin";
import { Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./components/Admin/Sidebar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./admin.css";
import Dashboard from "./components/Admin/Dashboard";
import AdminWorks from "./components/Admin/Admin_Works";
import CardDashboard from "./components/Admin/Cards/CardDashboard";
import AdminContact from "./components/Admin/Admin_Contact";
import AdminWorksDetail from "./components/Admin/Admin_WorksDetail";
import AddImages from "./components/Admin/Form/AddImages";
import styled from "styled-components";

const StyledAdmin = styled.div`
  font-family: "Nunito";
`;

const Admin = () => {
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
              <Route path="/admin/addimages">
                <AddImages />
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
