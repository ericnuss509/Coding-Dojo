
import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import Home from "./views/Home.js";
import Rental from "./views/Rental.js";
import Calendar from "./views/Calendar.js";
import Contact from './views/Contact.js';
import Examples from './views/Examples.js';
import Build from './views/Build.js';
import About from './views/About.js';
import React, { Component }  from 'react';
// import { ParallaxProvider } from 'react-scroll-parallax';


function App() {


  return (
      <Router>
        <Home path="/"/>
        <Rental path="/rental"/>
        <Calendar path="/calendar"/>
        <Examples path="/examples"/>
        <Build path="build"/>
        <Contact path="/contact"/>
        <About path="/about"/>
      </Router>


  );
}

export default App;
