import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          CONTACTEZ-NOUS
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Entrez votre email'
            />
            <Button buttonStyle='btn--outline'>ENVOYER</Button>
          </form>
        </div>
      </section>

    </div>
  );
}

export default Footer;