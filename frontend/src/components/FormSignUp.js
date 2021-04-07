import React, {  useState } from 'react';
import './Form.css';

const FormSignup = () => {

    // Met le state des inputs
    const [alias, setAlias] = useState('');
    const [email, setEmail] = useState('');
    const [naissance, setNaissance] = useState('');
    const [taille, setTaille] = useState(160);
    const [poids, setPoids] = useState(40);
    const [password, setPassword] = useState('');
        // envoi les données des inputs onSubmit

  const send = async (event) => {
    event.preventDefault();
    try{
        let resultat =  await fetch('http://127.0.0.1:5000/ajout_utilisateur', {
        method: 'POST',
        mode:'no-cors',
        headers: {
            'Content-type': 'application/json',
            'accept':'application/json'
          },
        body: JSON.stringify({alias, email, naissance, taille, poids, password})
      })
        console.log("ok")
        console.log(resultat)

    }
    catch(e){
        console.log(e);
      }
  }


       return (
            <div className='form-content'>
                <form className="form" onSubmit={(event) => {send(event)}}>
                    <div className="form-inputs">
                    <label className='form-label'>ALIAS</label>
                      <input
                        className='form-input'
                        type='text'
                        name='alias'
                        placeholder='Entrez votre alias'
                        value={alias}
                        onChange={ (e) => setAlias(e.target.value) }

                      />
                    </div>
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
                      <label className='form-label'>NAISSANCE</label>
                      <input
                        className='form-input'
                        type='date'
                        name='naissance'
                        value={naissance}
                        onChange={ (e) => setNaissance(e.target.value) }
                      />
                    </div>
                    <div className="form-inputs">
                    <label className='form-label'>TAILLE</label>
                      <input
                        className='form-input'
                        type='number'
                        name='alias'
                        placeholder='Entrez votre taille'
                        value={taille}
                        onChange={ (e) => setTaille(e.target.value) }
                      />
                    </div>
                    <div className="form-inputs">
                    <label className='form-label'>POIDS</label>
                      <input
                        className='form-input'
                        type='number'
                        name='alias'
                        placeholder='Entrez votre poids'
                        value={poids}
                        onChange={ (e) => setPoids(e.target.value) }
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

                    <button type="submit" className='form-input-btn'>S'INSCRIRE</button>
                </form>

            </div>
   );

}

export default FormSignup;