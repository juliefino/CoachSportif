import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/img-02.jpg' />
      <h1>WORK HARDER, GET STRONGER</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          S'INSCRIRE
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
