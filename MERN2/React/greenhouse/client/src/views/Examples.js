import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const Examples = (props) =>{
    return(
        
            <div>
                
                <h1>
                    Ideas on How to Use The Greenhouse
                </h1>
                    <h2>We’ve had many creative folks creating all sorts of different events in our greenhouse and backyard space. 
                        The possibilities are truly endless. From photo shoots to birthday parties, elopements and music videos. 
                        Here are some visual examples of some events we’ve hosted here.
                    </h2>
                    
                <a href="https://www.instagram.com/theseattlegreenhouse/">The Seattle Greenhouse Instagram</a>
                    <Button 
                        a href="/"
                        size = "small"
                        variant ="contained" 
                        color = "secondary">
                        Return to Home
                    </Button>
                    <img className="examples" src="IMG_5711.jpg" alt="" />
            </div>
    )
}

export default Examples