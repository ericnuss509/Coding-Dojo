import React, { useState } from 'react';
import { Router, Link } from '@reach/router';



const Home = (props) =>{
        return(
        
        <div>

                <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                <div class="collapse navbar-collapse" id="navbarNav">
                
        <ul class="navbar-nav">
                
        <li class="nav-item">
                
                <a class="nav-link active" aria-current="page" >
                <Link to ="/rental">Greenhouse Rental Information</Link></a>
        </li>
                </ul>

                <ul class="navbar-nav">
                
                <li class="nav-item">
                
                <a class="nav-link active" aria-current="page" >
                <Link to ="/calendar">Calendar</Link></a>
        </li>
                </ul>




                <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" >
                <Link to ="/contact">Contact</Link></a>
                </li>
                </ul>

                <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" >
                <Link to ="/examples">Ideas on How to Use The Greenhouse</Link></a>
                </li>
                </ul>

                <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" >
                <Link to ="/build">How We Built The Greenhouse</Link></a>
                </li>
                </ul>
        
                </div>
                </nav>
        </div>
        )
}

export default Home