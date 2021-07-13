import './App.css';
import React, { useState } from 'react';
import Form from "./components/Form";
import Display from "./components/Display"

function App() {
// this is how we make a new color
  const [color, setColor] = useState('')
// this is the actual color boxes
  const [list, setList] = useState([])

  return (
    <>
      <Form color = {color} setColor = {setColor} list = {list} setList = {setList}/>
      <Display list = {list}/>
    </>
  );
}

export default App;
