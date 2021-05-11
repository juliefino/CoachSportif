import React, {useState, useEffect} from 'react';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {deleteTokens, isLoggedIn} from "./auth.js"
import {faHome, faBars, faDumbbell, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


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
    const Log = () => {
        if (isLoggedIn() && localStorage.getItem("premium") != "false") {
            return (
                <nav className='navbar'>

                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            COACH SPORTIF
                            <i className='fab fa-typo3'/>
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <FontAwesomeIcon icon={click ? faDumbbell : faBars} style={{color: 'white'}}/>
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
                                    to='/nutrition'
                                    className='nav-links'
                                    onClick={closeMobileMenu}
                                >
                                    NUTRITION
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

                        </ul>
                        {button && <Button buttonStyle='btn--outline' onClick={() => {
                            deleteTokens();
                            window.location.replace("/")
                        }}
                        >SE DÉCONNECTER</Button>}

                    </div>

                </nav>

            )

        } else if (isLoggedIn()) {
            return (

                <nav className='navbar'>

                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            COACH SPORTIF
                            <i className='fab fa-typo3'/>
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <FontAwesomeIcon icon={click ? faDumbbell : faBars} style={{color: 'white'}}/>
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


                        </ul>
                        {button && <Button buttonStyle='btn--outline' onClick={() => {
                            deleteTokens();
                            window.location.replace("/")
                        }}
                        >SE DÉCONNECTER</Button>}

                    </div>

                </nav>


            )
        } else {
            return (
                <nav className='navbar'>

                    <div className='navbar-container'>
                        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                            COACH SPORTIF
                            <i className='fab fa-typo3'/>
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            <FontAwesomeIcon icon={click ? faDumbbell : faBars} style={{color: 'white'}}/>
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

                            </li>


                        </ul>
                        {button && < Button buttonStyle='btn--outline' style={{color: "white"}}><Link to="/login"
                                                                                                      className="login">SE
                            CONNECTER</Link></Button>}

                    </div>

                </nav>

            )
        }
    }
    return (
        <>
            <Log/>
        </>

    );
}

export default Navbar;
