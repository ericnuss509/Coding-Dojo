
import './App.css';
import {Link, Redirect, link, Router } from "@reach/router";
import Home from "./views/Home.js";
import About from "./views/About.js";
import Services from "./views/Services.js";
import Register from "./views/Register.js";
import Button from '@material-ui/core/Button';
// import 'fontsource-roboto'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button 
          a href="/register"
          size = "large"
          variant ="contained" 
          color = "secondary">
            Register for an Event
        </Button>
      </header>



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
