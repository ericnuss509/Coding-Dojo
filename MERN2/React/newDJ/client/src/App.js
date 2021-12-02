
import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Services from "./views/Services.js";
import Button from '@material-ui/core/Button';
import Contact from './views/Contact.js';
// import 'fontsource-roboto'





function App() {
  return (
  //   <div className="App">
      <div class="parallax">
        <div class="parallax__layer parallax__layer--back">
        <img src="/client/public/river.jpg" width='1500px'/>
{/*       
      <>
      <Form username = {username} setUsername = {setUsername} help = {help} setHelp = {setHelp}/>
    </> */}
  
      <Router>
        <Home path="/"/>
        <About path="/about"/>
        <Services path="/services"/>
        <Contact path="/contact"/>
        
      </Router>
    </div> 
    </div>
  );
}

export default App;
