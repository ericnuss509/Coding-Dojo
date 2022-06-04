import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';


const Rental = (props) =>{
    return(


        <div className="bg-image parallax"  style={
            { 
            backgroundImage: "url(/legs.png", 
            height: "200vh", 
            width: "auto", 
            backgroundSize: "contain", 
            // backgroundRepeat: "no-repeat", 
            backgroundAttachment: 'fixed'
            
            }}>
            <div></div>


            <nav class="navbar navbar-light" style= {{fontFamily: "Courier New", fontSize:"33px", backgroundColor:"rgb(176,161,147)", opacity:"80%"}}>
                <h1>Greenhouse Rental Information</h1>
                <h2>FAQ’s</h2>
                
                <li>How much is it to book per hour? 
                    Our regular rate is $100/hr.</li>
                    <li> Do you have a minimum? 
                    Our minimum is one hour. However, We suggest you book 2 hours if you think you might go over. We keep a very punctual schedule as we are booked with only time for cleaning in between!</li>
                    <li>Can we use your entire backyard? Yes! Please enjoy any backdrops for your use, our garden shed, greenhouse, deck area; it’s all up for use!</li>
                    <li>Can you fill up the bath? Is there an extra charge? Is the water warm? 
                    Yes we can! No extra charge, just please make sure you let me know you’d like it filled! And yes, the water can be anywhere from warm to hot! Or cold for those Wim Hoffer’s out there.</li>
                    <li>How many people can I bring to my event? Our limit is 25 people. If you have a want for more than that, please message me and we can chat about it!</li>
                    <li>Is there parking? There are ample amounts of free street parking in our neighborhood. Expect to park within a couple blocks of the greenhouse. We also have a back alley way where you can unload and load but not park. </li>
                    <li>
                    Do you have a bathroom? We reserve bathroom use for folks booking 2+ hours at the greenhouse. It’s inside our house so we do our best to limit the back and forth of bathroom use.</li>
                    
                                <Button 
                                    a href="/"
                                    size = "small"
                                    variant ="contained" 
                                    color = "secondary">
                                    Return to Home
                                </Button>
                    </nav>
            </div>
        
    )
}

export default Rental