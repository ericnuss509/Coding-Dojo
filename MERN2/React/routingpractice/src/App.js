import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import Color from './components/Color';
import Hello from './components/Hello';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Number path="/number/:id" />
        <Hello path="/word/:hello"/>
        <Color path= "/combo/:hello/:fontColor/:backgroundColor"/>
      </Router>
    </div>
  );
}

export default App;
