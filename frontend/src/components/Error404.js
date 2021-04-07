import React from 'react';
import {Link} from "react-router-dom";
import './Error404.css';

const Error404 = () => {
    return (
        <div className='error-container'>
            <img src='/images/img-02.jpg' />
            <h1>Erreur 404</h1>
            <p>La page demandée n'existe plus, cliquez <Link to='/'>ici</Link> pour revenir à l'accueil !</p>
        </div>
    );
};

export default Error404;