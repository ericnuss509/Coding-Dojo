import React from 'react';

const Form = (props) =>{
    const {color, setColor, list, setList} = props;

    const submitHandler = (e) =>{
        e.preventDefault()
        let colorArr = [...list]
        colorArr.push(color)
        setList(colorArr)
//setting color input back to a blank input.
        setColor("")
    }

    const changeHandler = (e) =>{
        setColor(e.target.value)
    }
    return(
        <div>
            <form onSubmit = {submitHandler}>
                <label htmlFor="addcolor">Write a color to add to the list</label>
                <input type="text" name="addcolor" onChange = {changeHandler} value = {color}/>
                <input type="submit" name="submitHandler"/>
            </form>
        </div>
    )
    
}

export default Form