import React, { useState } from 'react';
import { Router, Link } from '@reach/router';



const Home = (props) =>{
        return(
        
                <div>
                <h1></h1>

                <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <div class="collapse navbar-collapse" id="navbarNav">
                
                <ul class="navbar-nav">
                
                <li class="nav-item">
                
                <a class="nav-link active" aria-current="page" >
                <Link to ="/about">About</Link></a>
        </li>
                </ul>

                <ul class="navbar-nav">
                
                <li class="nav-item">
                
                <a class="nav-link active" aria-current="page" >
                <Link to ="/services">Services</Link></a>
        </li>
                </ul>

                <ul class="navbar-nav">
                
                <li class="nav-item">
                
                <a class="nav-link active" aria-current="page" >
                <Link to ="/contact">Contact</Link></a>
        </li>
                </ul>
                </div>
                </nav>
            </div>
    )
}

export default Home