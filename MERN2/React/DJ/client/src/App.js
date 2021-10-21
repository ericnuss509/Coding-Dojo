
import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Services from "./components/Services.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/"/>
        <About path="/about"/>
        <Services path="/services"/>
        
      </Router>
    </div>
  );
}

export default App;
