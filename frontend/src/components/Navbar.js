import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //Va update le click du menu et on va mettre la valeur inverse
  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
     <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            COACH SPORTIF
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                ACCUEIL
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/activites'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                ACTIVITÉS
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <Link
                to='/services'
                className='nav-links '
                onClick={closeMobileMenu}
              >
                PARTAGE
              </Link>

            </li>
            <li className='nav-item'>
              <Link
                to='/premium'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                PREMIUM
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                S'INSCRIRE
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>S'INSCRIRE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
