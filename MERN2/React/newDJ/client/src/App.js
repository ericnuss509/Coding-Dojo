
import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Services from "./views/Services.js";
import Button from '@material-ui/core/Button';
import Contact from './views/Contact.js';






function App() {
  return (

  

    <div className="bg-image parallax"  style={{ backgroundImage: "url(/river.jpg", height: "100vh", width: "100%", backgroundSize: "cover", position: "" }}>

      <Router>
        <Home path="/"/>
        <About path="/about"/>
        <Services path="/services"/>
        <Contact path="/contact"/>
        
      </Router>
    </div> 
  
    
  );
}

export default App;
