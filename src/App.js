import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import LandingPage from "./LandingPages";
import About from "./About";
import GalleryLayout from "./components/GalleryLayout";
import Works from "./Works";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services"></Route>
        <Route path="/works">
        <Works/>
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </>
  );
};

export default App;
