import React, {useState} from 'react';
import './Form.css';
import {Link} from "react-router-dom";

const FormSignup = () => {

    // Met le state des inputs
    const [alias, setAlias] = useState('');
    const [email, setEmail] = useState('');
    const [naissance, setNaissance] = useState('');
    const [taille, setTaille] = useState(160);
    const [poids, setPoids] = useState(40);
    const [password, setPassword] = useState('');
    const [confirmation, setConfirmation] = useState('');
    const [agree, setAgree] = useState(false)


    const checkBox = () => {
        // if agree === true, it will be set to false
        // if agree === false, it will be set to true
        setAgree(!agree);
    }
    // envoi les données des inputs onSubmit

    const send = async (event) => {
        let now = new Date();
        let input = new Date(naissance);
        let age = Math.floor((now - input) / 31557600000);
        event.preventDefault();
        if (age < 18) {
            let errorMessageAge =
                "<p>Pour pouvoir vous enregistrer, vous devez avoir plus de 18 ans! </p>";
            document.getElementById("date_error").innerHTML = errorMessageAge;
        } else if (password.length < 6) {
            let errorMessage =
                "<p>Le mot de passe de contenir au minimum 6 caractères!</p>";
            document.getElementById(
                "newpassword_error"
            ).innerHTML = errorMessage;

        } else if (password !== confirmation) {
            let errorMessage = "<p>Les mots de passe ne coincident pas!</p>";
            document.getElementById("password_error").innerHTML = errorMessage;
        } else {
            try {
                let resultat = await fetch('/api/inscription', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                        'accept': 'application/json'
                    },
                    body: JSON.stringify({alias, email, naissance, taille, poids, password})
                })
                console.log("ok")
                console.log(resultat)
                console.log(resultat.status) //pour afficher le bon status, il faut retirer le mode no-cors
                window.location.replace("/login")
            } catch (e) {
                console.log(e);
            }
        }
    }


    return (
        <div className='form-content'>
            <form className="form" onSubmit={(event) => {
                send(event)
            }}>
                <div className="form-inputs">
                    <label className='form-label'>ALIAS</label>
                    <input
                        className='form-input'
                        type='text'
                        required
                        name='alias'
                        placeholder='Entrez votre alias'
                        value={alias}
                        onChange={(e) => setAlias(e.target.value)}

                    />

                </div>
                <div className='form-inputs'>
                    <label className='form-label'>EMAIL</label>
                    <input
                        className='form-input'
                        type='email'
                        required
                        name='email'
                        placeholder='Entrez votre e-mail'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <span className="error" id="email_error"></span>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>NAISSANCE</label>
                    <input
                        className='form-input'
                        type='date'
                        required
                        name='naissance'
                        value={naissance}
                        onChange={(e) => setNaissance(e.target.value)}
                    />
                    <span className="error" id="date_error"></span>
                </div>
                <div className="form-inputs">
                    <label className='form-label'>TAILLE</label>
                    <input
                        className='form-input'
                        type='number'
                        required
                        name='alias'
                        placeholder='Entrez votre taille'
                        min='100'
                        value={taille}
                        onChange={(e) => setTaille(e.target.value)}
                    />
                </div>
                <div className="form-inputs">
                    <label className='form-label'>POIDS</label>
                    <input
                        className='form-input'
                        type='number'
                        required
                        name='alias'
                        placeholder='Entrez votre poids'
                        min='30'
                        value={poids}
                        onChange={(e) => setPoids(e.target.value)}
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>MOT DE PASSE</label>
                    <input
                        className='form-input'
                        type='password'
                        required
                        name='password'
                        placeholder='Entrez mot de passe de plus de 6 caractères'

                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="error" id="newpassword_error"></span>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>CONFIRMATION MOT DE PASSE</label>
                    <input
                        className='form-input'
                        type='password'
                        required
                        name='password'
                        placeholder='Entrez mot de passe de plus de 6 caractères'

                        value={confirmation}
                        onChange={(e) => setConfirmation(e.target.value)}
                    />
                    <span className="error" id="password_error"></span>
                </div>
                <div class="form-check form-switch">
                    <input type="checkbox" id="agree" onChange={checkBox} required/>
                    <label htmlFor="agree">
                        J'ACCEPTE <b><Link to='/conditions' style={{color: 'white'}}> LES CONDITIONS GÉNÉRALES ET LA
                        POLITIQUE DE CONFIDENTIALITÉ </Link></b>
                    </label>
                </div>

                <button type="submit" className='form-input-btn'>S'INSCRIRE</button>
            </form>

        </div>
    );

}

export default FormSignup;