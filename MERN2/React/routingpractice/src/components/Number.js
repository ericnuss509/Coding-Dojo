import React from 'react';

const Number = (props) => {
    const {id} = props

    if(isNaN(id)){
    
        return(
            <h3>Needs to be a number</h3>
        )
    }else{
        
    }
    return(
        <>
            <h1>
                Number Page for Rounting Practice
            </h1>
            <h3>This is your number: {id}</h3>
        </>
    )
}

export default Number