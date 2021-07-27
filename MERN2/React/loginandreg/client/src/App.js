import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Router, Redirect} from '@reach/router';



function App() {
  return (
    <div className="App">
      <Router>
        <Register Path="/api/user"/>


      </Router>

    </div>
  );
}

export default App;
