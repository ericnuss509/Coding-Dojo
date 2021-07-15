import './App.css';
import React, { useState } from 'react';
import { Router, navigate } from '@reach/router';
import People from './componets/People';
import Planets from './componets/Planets'

function App() {
  const [starWars, setStarWars] = useState("people")

  const [id, setId] = useState(0)

const go = (e) =>{
  e.preventDefault();
  console.log("inside go function")
  navigate(`/${starWars}/${id}`)
}

  return (
    <div className="App">
      <form onSubmit={go}>
      <select onChange={(e) => setStarWars (e.target.value) }>
        <option value="planets">Planet</option>
        <option value="people">People</option>
      </select>
      <input type='text' onChange={(e) => setId (e.target.value)  } value={id}/>
      <input type='submit' value="search"/>
      
      </form>
      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
