import React from 'react';

const Color = (props) => {
    const {hello, fontColor, backgroundColor} = props;

    
    return(
        <>
            <h1 style={{color: fontColor, backgroundColor: backgroundColor}}> Color Page for Rounting Practice 
            Here is something you typed: {hello}  </h1>
        </>
    )
}

export default Color