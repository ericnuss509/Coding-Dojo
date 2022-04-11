import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Calendar = (props) =>{
    return(
        
            <div>
                <h1>This is the Calendar Page</h1>
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

export default Calendar