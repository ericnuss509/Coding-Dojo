
import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Services from "./views/Services.js";
import Button from '@material-ui/core/Button';
import Contact from './views/Contact.js';
// import 'fontsource-roboto'


const nodemailer = require('nodemailer');

function App() {
  return (
    <div className="App">
{/*       
      <>
      <Form username = {username} setUsername = {setUsername} help = {help} setHelp = {setHelp}/>
    </> */}
  
      <Router>
        <Home path="/"/>
        <About path="/about"/>
        <Services path="/services"/>
        <Contact1 path="/contact"/>
        
      </Router>
    </div> 
  );
}

export default App;
