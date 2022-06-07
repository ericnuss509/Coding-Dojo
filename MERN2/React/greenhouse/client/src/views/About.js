import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const About = (props) =>{
    return(
        <div>
        

            <div></div>
            <nav class="navbar navbar-expand-lg navbar-light Light link" style= {{fontFamily: "Courier New", fontSize:"20px", backgroundColor: "white"}}>
                <h1>The About Page</h1>
                    <p>Welcome to The Seattle Greenhouse! We are an inclusive event venue which hosts photo/video shoots, elopement’s, birthday parties, and much more. 
                        We built our greenhouse by hand using close to 100% reclaimed materials. Inside you’ll find a bathtub, antique couch, ceramic tile wood stove and over 300 plants. It stays a consistent 70 degrees for you and the plants all year round.
                        We have around 8,000 sq ft of outdoor space full of flowers and greenery to act as a colorful, living backdrop to your special festivity. 
                        We have also built quite the aesthetic garden shed using reclaimed materials as well. It couples as a changing room; giving you more options and looks for you shoots! 
                        At The Seattle Greenhouse, we host workshops for gardening, building, painting and much more. Give us a follow on Instagram, Facebook and TikTok to stay up to date on all that’s going on! </p>
                    <Button 
                        a href="/"
                        size = "small"
                        variant ="contained" 
                        color = "secondary">
                        Return to Home
                    </Button>
                    </nav>
                    <img className="about" src="IMG_5714.jpg" alt="" />
            </div>
    )
}


export default About