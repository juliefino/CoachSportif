import React from 'react';
import '../App.css';
import { Button } from './Button';
import {Link} from "react-router-dom";
import './HeroSection.css';
import {isLoggedIn} from './auth.js';
import {Sidebar} from './sidebar'
function HeroSection() {

    if(isLoggedIn()){
        return (

        <div className='hero-container'>
          <img src='/images/img-02.jpg' />

          <h1>WORK HARDER, GET STRONGER</h1>
          <p>What are you waiting for?</p>

        </div>)
    }else{
        return(
        <div className='hero-container'>
          <img src='/images/img-02.jpg' />
          <h1>WORK HARDER, GET STRONGER</h1>
          <p>What are you waiting for?</p>
          <div className='hero-btns'>
            <Button
              className='form-input-btn'
            ><Link to="/sign-up">
              S'INSCRIRE</Link>
            </Button>

          </div>
        </div>)
    }

}

export default HeroSection;
