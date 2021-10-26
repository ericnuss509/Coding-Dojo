
import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Services from "./views/Services.js";
import Register from "./views/Register.js";

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
