import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Calendar = (props) =>{
    return(
        
            <div>
                <h1>The Calendar Page is Coming Soon!</h1>
                <h2>To book the Seattle Greenhouse go to our contact page and send us an email. We will get back to you shortly to help you with your special event.</h2>
                
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