
import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Services from "./views/Services.js";
import Register from "./views/NewUser.js";
import Button from '@material-ui/core/Button';
// import 'fontsource-roboto'



function App() {
  return (
    <div className="App">
      





      <Router>
        <Home path="/"/>
        <About path="/about"/>
        <Services path="/services"/>
        <Register path="/register"/>
        
      </Router>
    </div> 
  );
}

export default App;
