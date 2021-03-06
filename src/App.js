import "./App.css";
import React, { useState, useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import LandingPage from "./LandingPages";
import About from "./About";
import Services from "./Services";

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/about">
          <About />
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
