import React from 'react'

const Results = props =>{

    const {task, tasks, setTasks, index} = props;

    const handleSubmit = (e,i) => {
        e.preventDefault();
            setTasks([...tasks.slice(0,i)].concat(tasks.slice(i+1)))
    }
    return(
        <div>
            {
                    
                        <div>
                                <>
                                {task} <input type="checkbox"/>
                                </>
                                <input type="submit" className="input-group "value= "Delete" onClick={(e)=>handleSubmit(e,index)} />
                        </div>
                    
                }
            
    </div>
    )
}

export default Results
