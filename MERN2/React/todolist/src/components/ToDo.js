import React, {useState} from 'react'
import Results from './Results';

const ToDo = props => {
    const {task, setTask, tasks, setTasks} = props

    const handleInput = e =>{
        setTask(e.target.value);
        console.log(e.target.value)

    }

    const handleSubmit = e =>{
        e.preventDefault();
    

    setTasks([...tasks, task]);
    setTask('')
    }
    return(
        <>
            <form onSubmit= {handleSubmit}>
                <div className="container">
                    <input type="text"  name="" onChange={handleInput} value={task}/>
                </div>
                <input type="submit" className="btn btn-primary"  value ="Add"/>
            </form>
        </>
    )   
}

export default ToDo;