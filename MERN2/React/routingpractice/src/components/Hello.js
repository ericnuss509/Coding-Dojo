import React from 'react';

const Hello = (props) => {
    const {hello} = props
    return(
        <>
            <h1>
                Hello Page for Rounting Practice
                Here's what you typed in the browser: {hello}
            </h1>
        </>
    )
}

export default Hello