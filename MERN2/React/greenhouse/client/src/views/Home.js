import React, { useState } from 'react';
import { Router, Link } from '@reach/router';



const Home = (props) =>{
        return(

                <div>
                        


                        <nav class="navbar navbar-expand-lg navbar-light White link" style= {{backgroundColor:"rgb(252,252,252)", fontFamily: "Courier New", fontSize:"20px"}}>
                                <div class="collapse navbar-collapse" id="navbarNav">


                                        <ul class="navbar-nav">
                                        <li class="nav-item">
                                        <a class="btn" aria-current="page"  >
                                        <Link to ="/about">About</Link>
                                        </a>
                                        </li>
                                        </ul>


                                        <ul class="navbar-nav">
                                        <li class="nav-item">
                                        <a class="btn" aria-current="page" >
                                        <Link to ="/rental">Greenhouse Rental Information</Link></a>
                                        </li>
                                        </ul>


                                        <ul class="navbar-nav">
                                        <li class="nav-item">
                                        <a class="btn" aria-current="page" >
                                        <Link to ="/calendar">Calendar</Link></a>
                                        </li>
                                        </ul>


                                        <ul class="navbar-nav">
                                        <li class="nav-item">
                                        <a class="btn" aria-current="page" >
                                        <Link to ="/examples">Ideas on How to Use The Greenhouse</Link></a>
                                        </li>
                                        </ul>

                                        <ul class="navbar-nav">
                                        <li class="nav-item">
                                        <a class="btn" aria-current="page" >
                                        <Link to ="/contact">Contact</Link></a>
                                        </li>
                                        </ul>

                                        <ul class="navbar-nav">
                                        <li class="nav-item">
                                        <a class="btn" aria-current="page" >
                                        <Link to ="/build">How We Built The Greenhouse</Link></a>
                                        </li>
                                        </ul>

                                        <ul class="navbar-nav">
                                        <li class="nav-item">
                                        <a class="btn" aria-current="page" >
                                        <Link to ="/faqs">FAQ</Link></a>
                                        </li>
                                        </ul>
                                </div>
                        </nav>
                                <div>
                                        <img className="gh" src="IMG_5716.jpg"/>
                                </div>
                                <a href="https://www.instagram.com/theseattlegreenhouse/">The Seattle Greenhouse Instagram</a>
                        </div>
        )
}

export default Home