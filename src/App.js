import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import LandingPage from "./LandingPages";
import About from "./About";
import GalleryLayout from "./components/GalleryLayout";
import Works from "./Works";
import Services from "./Services";
import Contacts from "./Contacts";
import Admin from "./Admin";
import DetailWorks from "./DetailWorks";
import Services_mobile from "./Services_mobile";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/contact">
          <Contacts />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/works">
          <Works />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/detailworks">
          <DetailWorks />
        </Route>
        <Route path="/servicesmobile">
          <Services_mobile />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
