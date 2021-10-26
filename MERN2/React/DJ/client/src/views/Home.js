import React, { useState } from 'react';
import { Router, Link } from '@reach/router';


const Home = (props) =>{
    return(
        
            <div>
                <h1>Home</h1>
                <div><Link to ="/about">About</Link></div>
                <div><Link to ="/services">Services</Link></div>
                <div><Link to="/register">Register</Link></div>
                
            </div>
    )
}

export default Home