import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Services = (props) =>{
    return(
        
            <div>
                <h1>This is the Services Page</h1>
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

export default Services