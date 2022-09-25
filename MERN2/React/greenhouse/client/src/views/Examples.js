import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const Examples = (props) =>{
    return(
        
            <div>
                
                <h1>
                    Ideas on How to Use The Greenhouse
                </h1>
                    <h2>From photoshoots to birthday parties, the options are endless. We've hosted music videos, had gender reveal parties, elopments, engaments and picnic dates! Please feel free to reach out if you have any questions pertaining to your specific idea. And if you need a photogpraher to shoot your session, we have an in-house photogrpaher here at the greenhouse. Her name is Sommer-Rae. Find her bio and work here.
                    </h2>
                    
                <a href="https://www.instagram.com/theseattlegreenhouse/">The Seattle Greenhouse Instagram</a>
                <Button
                    a href="/"
                    size="small"
                    variant="contained"
                    color="secondary">
                    Return to Home
                </Button>

                <Button
                    a href="/Bio"
                    size="small"
                    variant="contained"
                    color="primary">
                    Sommer-Rae's Work
                </Button>
                    <img className="examples" src="IMG_6111.jpg" alt="" />
            </div>
    )
}

export default Examples