import React, { useState } from 'react';
import Button from '@material-ui/core/Button';


const Build = (props) =>{
    return(
        
            <div className="font">
                <h1>How The Seattle Greenhouse Was Built</h1>
                <h2>When Sommer-Rae and Eric found out they were expecting a baby in October of 2020, they thought, “Yah! It’s a great time to build a greenhouse!” But in all seriousness, once Loveday was born, so was the idea of turning a pile of found reclaimed antique windows into a greenhouse. They started with an old concrete foundation that once housed a garage, made plans using tiny cutouts of each antique window, and started building with whichever hands weren’t holding little newborn Loveday. The build in entirety took about a month. Once complete, the bathtub was found and installed as well as the wood stove. The wood stove has quite a story if you have a couple extra minutes, make sure to ask the owners about it! Once the wood stove was installed, the greenhouse was filled with shelving and over 250 tropical plants. It’s been up and running since March of 2022.
                </h2>
                
                <img className="build" src="foundation.png" alt="" />
                <img className="build" src="prep.png" alt="" />
                <img className="build" src="michael.png" alt="" />
                
                
                <img className="build" src="edit.png" alt="" />



                <img className="build" src="tub.png" alt="" />
                <br />
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

export default Build