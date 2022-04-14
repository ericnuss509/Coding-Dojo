import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const Rental = (props) =>{
    return(
        
            <div>
                <h1>Greenhouse Rental Information</h1>
                    <Button 
                        a href="/"
                        size = "small"
                        variant ="contained" 
                        color = "secondary">
                        Return to Home
                    </Button>
                
            </div>
            
    )
}

export default Rental