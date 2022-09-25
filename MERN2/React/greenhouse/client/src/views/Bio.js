import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const Bio = (props) => {
    return (

        
        <div class="contianer">
                {/* <nav class="navbar navbar-expand-lg navbar-light Light link" style={{ fontFamily: "Courier New", fontSize: "20px", backgroundColor: "white" }}> */}
                <h1>Bio</h1>
                <div class="icons">
                <img class="icon1" src="SommerBTS-1.jpeg" width="60%" alt="icon"/>
                        <p> Hva Skjer! My name is Sommer-Rae, I’m a third generation Norwegian, born and raised in Seattle and Miami, taking documentary-style photos with a consent-tration in capturing personality and telling stories through light and shadow. My undergrad major from Cornish College of the Arts was in Film Photography and I’m slowly getting back into developing and scanning all of my own negatives once again. I style all my photoshoots as well and have always been very passionate about the malleable vibe of what’s in front of my lens. I’m especially drawn to capturing candid or almost candid photos; first and foremost, it has to be authentic. 
                            You can expect the ritual of a therapeutic check-in and intention setting at the beginning of our session. As well as a clear idea and thoughtful agreement of how we use our film during our shoot. 
                            The woosh of hair, the stillness of hands placed on top of one another like logs of a cabin. I am a detail oriented gal with a lot of joy to share and absolutely love helping others find a new corner of art; to share with their clients, family, or just for themselves. I take pictures for you, of you and with you. I will always make the most of our time together because I can’t help but be heartfelt and efficient! Photography will always be worth it, especially when the memories are captured on film; there is truly nothing like it.🤙🏼
                        </p>
                        </div>
                        
                    <Button
                        a href="/"
                        size="small"
                        variant="contained"
                        color="secondary">
                        Return to Home
                    </Button>
                {/* </nav> */}
            
                <div class="icons">
                <img class="icon2" src="IMG_0035.JPG "width="60%" alt="icon"/>
                <img class="icon3" src="IMG_0045.JPG "width="60%" alt="icon"/>
                <img class="icon4" src="IMG_0046.JPG "width="60%" alt="icon"/>
                <img class="icon5" src="IMG_0273.jpeg "width="60%" alt="icon"/>
                <img class="icon6" src="IMG_0901.JPG "width="60%" alt="icon"/>
                <img class="icon7" src="IMG_0925.jpeg "width="60%" alt="icon"/>
            </div>
            </div>
        


        
    )
}


export default Bio