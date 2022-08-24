import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const Bio = (props) => {
    return (
        <div>


            <div></div>
            <nav class="navbar navbar-expand-lg navbar-light Light link" style={{ fontFamily: "Courier New", fontSize: "20px", backgroundColor: "white" }}>
                <h1>The Bio</h1>
                <p>Im Sommer! </p>
                <Button
                    a href="/"
                    size="small"
                    variant="contained"
                    color="secondary">
                    Return to Home
                </Button>
            </nav>
            <img className="about" src="IMG_5714.jpg" alt="" />
        </div>
    )
}


export default Bio