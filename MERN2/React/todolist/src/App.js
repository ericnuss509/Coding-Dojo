import './App.css';
import React, { useState } from 'react'
import ToDo from './components/ToDo';
import Results from './components/Results'

function App() {

  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <ToDo task = {task} setTask = {setTask} tasks = {tasks} setTasks = {setTasks} />
      {tasks.map((task,i) => (
        <Results tasks = {tasks} setTasks = {setTasks} task={task} index={i} key = {i}/>
        // <div key= {i}>task ={task} </div>
      ))}
    </div>
  );
}

export default App;
