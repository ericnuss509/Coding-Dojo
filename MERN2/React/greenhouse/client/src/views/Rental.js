import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const Rental = (props) =>{
    return(
        
            <div>
                <h1>Greenhouse Rental Information</h1>
                <p> FAQ’s 
                    How much is it to book per hour? 
                    Our regular rate is $100/hr. Follow us on Instagram, Facebook and TikTok to stay up to date on sales we might be running. We also offer sliding scale, should you not be able to afford our regular rate. We want everyone to enjoy the greenhouse who wants to!
                    Do you have a minimum? 
                    Our minimum is one hour. However, We suggest you book 2 hours if you think you might go over. We keep a very punctual schedule as we are booked with only time for cleaning in between!
                    Can we use your entire backyard? Yes! Please enjoy any backdrops for your use, our garden shed, greenhouse, deck area; it’s all up for use!
                    Can you fill up the bath? Is it an extra charge? Is the water warm? 
                    Yes we can! No extra charge, just please make sure you let me know you’d like it filled! And yes, the water can be anywhere from warm to hot! Or cold for those Wim Hoffer’s out there.
                    Is there* an extra charge?
                    How many people can I bring to my event? Our limit is 25 people. If you have a want for more than that, please message me and we can chat about it!
                    Is there parking? There are ample amounts of free street parking in our neighborhood. Expect to park within a couple blocks of the greenhouse. We also have a back alley way where you can unload and load but not park. 
                    Do you have a bathroom? We reserve bathroom use for folks booking 2+ hours at the greenhouse. It’s inside our house so we do our best to limit the back and forth of bathroom use. </p>
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