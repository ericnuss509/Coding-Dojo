import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Button from '@material-ui/core/Button';


const Home = (props) =>{
    return(
        
            <div>
                <Button 
                    a href="/contact"
                    size = "large"
                    variant ="contained" 
                    color = "secondary">
                        Register for an Event
                </Button>
                <h1>Home</h1>


                <div><Link to ="/about">About</Link></div>
                <div><Link to ="/services">Services</Link></div>
                <div><Link to="/contact">Contact</Link></div>
                
            </div>
    )
}

export default Home