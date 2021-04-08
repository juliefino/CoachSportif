import React, {  useState } from 'react';
import './Form.css';

const FormSignin = () => {

    // Met le state des inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        // envoi les données des inputs onSubmit

  const getUtilisateur = async (event) => {
    event.preventDefault();
    try{
        let resultat =  await fetch('http://127.0.0.1:5000/connexion_utilisateur', {
        method: 'GET',
        mode:'no-cors',
        headers: {
            'Content-type': 'application/json',
            'accept':'application/json'
          },
        body: JSON.stringify({email, password})
      })
        console.log("ok")
        console.log(resultat)

    }
    catch(e){
        console.log(e);
      }
  }


       return (
           <>
            <div className='form-content'>
                <form className="form" onSubmit={(event) => {getUtilisateur(event)}}>

                    <div className='form-inputs'>
                      <label className='form-label'>EMAIL</label>
                      <input
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Entrez votre e-mail'
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }

                      />
                      </div>
                    <div className='form-inputs'>
                      <label className='form-label'>MOT DE PASSE</label>
                      <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Entrez mot de passe'
                        value={password}
                        onChange={ (e) => setPassword(e.target.value) }
                        />
                    </div>

                    <button type="submit" className='form-input-btn'>SE CONNECTER</button>
                </form>

            </div>
        </>
   );

}

export default FormSignin;