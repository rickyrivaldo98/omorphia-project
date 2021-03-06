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

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/contact">
          <Contacts />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/works">
        <Works/>
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/works"></Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
