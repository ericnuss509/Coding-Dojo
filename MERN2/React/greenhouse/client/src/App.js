
import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import Home from "./views/Home.js";
import Rental from "./views/Rental.js";
import Calendar from "./views/Calendar.js";
import Contact from './views/Contact.js';
import Examples from './views/Examples.js';
import Build from './views/Build.js';
import React, { Component }  from 'react';


function App() {
  return (

      <Router>
        <Home path="/"/>
        <Rental path="/rental"/>
        <Calendar path="/calendar"/>
        <Examples path="/examples"/>
        <Build path="build"/>
        <Contact path="/contact"/>
      </Router>
      
  );
}

export default App;
