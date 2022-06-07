import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';


const Rental = (props) =>{
    return(


        <div className="bg-image parallax"  style={
            { 
            backgroundImage: "url(/legs.png", 
            height: "300vh", 
            width: "auto", 
            backgroundSize: "contain", 
            backgroundAttachment: 'fixed'
            
            }}>
        


            <nav class="navbar navbar-light" style= {{fontFamily: "Courier New", fontSize:"33px", backgroundColor:"rgb(176,161,147)", opacity:"90%"}}>
                <h1>Greenhouse Rental Information</h1>

                        <p>We rent our greenhouse for all sorts of events! Please see the “Ideas on How to Use the Greenhouse” tab for some ideas. 
                            Here are some details about renting our space. If you have questions please find our FAQ’s tab or contact us. To check our availability</p>
                            <Button 
                                a href="/calendar"
                                size = "large"
                                variant ="contained" 
                                color = "warning">
                                Click HERE
                            </Button>

                        <p>The Seattle Greenhouse is a backyard greenhouse made from reclaimed, antique doors and windows and is filled with over 250 plants as well as a few cacti! 
                            The greenhouse itself is approximately 170 sq ft. Our aesthetic shed is approximately 15 sq ft and is also a great backdrop for photos with lots of light coming in through the antique windows. 
                            Our yard space, in entirety, is around 8,000 sq ft and includes a permaculture garden, large raised beds, climbing roses, benches, a large laurel privacy hedge, a large deck for entertaining, 
                            bamboo, etc. and can host an array of events! We have an in-house photographer should you like to have your event styled or photographed. @iamsisterrain is her instagram if you’d like to check out 
                            her work! She styles most, if not all, of the shoots that are captured at The Seattle Greenhouse. 
                            Please note: Bathroom use is only available for those who book 2 plus hour sessions.</p>

                    <h1>RATE</h1>

                        <p>$100/hr
                        Minimum booking time 1 hr. (Please know we need to be very punctual, so please plan accordingly.)
                        We do offer discounts for booking 4+ hours at 10% off and 8+ hours is 25% off.

                        What your rental includes:
                        The use of our yard in it’s entirety. The greenhouse (which includes a bathtub that can be filled with hot or warm water), 
                        the outdoor shower, large deck, as well as endless backdrop options. 

                        Please note: Your set up and tear down time is included in the hourly rate, please plan accordingly!</p>

                    <h1>PROPS, ETC.</h1>
                        <p>We have tables and chairs that are available for use. There are a few poufs in the greenhouse, 
                            a couch and bathtub. should you need any additional items, please ask, we might have them!
                            If you are styling an event, props from outside are welcomed but please do not move plants without our assistance. 
                            We also have twinkle lights that can be turned upon your request. Please follow us @theseattlegreenhouse 
                            for an up to date look at the greenhouse! </p>

                    <h1>COVID-19 PRECAUTIONS</h1>

                        <p>We thoroughly clean and disinfect in between each booking. We also have a contactless booking system where in 
                            which we don’t need to cross paths unless necessary. Directions will be given to you on how to access the greenhouse
                            upon payment for your booking. We ask that you follow the CDC and King County guidelines for your event. </p>


                    
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