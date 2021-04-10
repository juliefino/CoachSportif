import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {logout, useAuth} from "./auth.js"
import {faHome, faBars, faDumbbell} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [logged] = useAuth();

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
       {!logged?
      <nav className='navbar'>

        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            COACH SPORTIF
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faDumbbell : faBars } style={{color: 'white'}}/>
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
                to='/partage'
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
                       to='/login'
                       className='nav-links-mobile'
                       onClick={closeMobileMenu}
                   >
                     SE CONNECTER
                   </Link>
                 </li>


          </ul>
          {button && <Button buttonStyle='btn--outline'>SE CONNECTER</Button>}

        </div>

      </nav> : <nav className='navbar'>

             <div className='navbar-container' >
               <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                 COACH SPORTIF
                 <i className='fab fa-typo3'/>
               </Link>
               <div className='menu-icon' onClick={handleClick}>

                 <FontAwesomeIcon icon={click ? faDumbbell : faBars } style={{color: 'white'}}/>
               </div>
               <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                 <li className='nav-item' >
                   <Link to='/' className='nav-links' onClick={closeMobileMenu} s>
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
                 <li className='nav-item'>
                   <Link
                       to='/objectifs'
                       className='nav-links '
                       onClick={closeMobileMenu}
                   >
                     OBJECTIFS
                   </Link>

                 </li>
                 <li className='nav-item'>
                   <Link
                       to='/partage'
                       className='nav-links '
                       onClick={closeMobileMenu}
                   >
                     PARTAGE
                   </Link>

                 </li>

                 <li className='nav-item'>
                   <Link
                       to='/compte'
                       className='nav-links '
                       onClick={closeMobileMenu}
                   >
                     <FontAwesomeIcon icon={faHome} style={{color: 'white'}}/>
                   </Link>

                 </li>


               </ul>
               {button && <Button onClick={() => logout()} buttonStyle='btn--outline'>SE DECONNECTER</Button>}


             </div>

           </nav>} </>

  );
}

export default Navbar;
