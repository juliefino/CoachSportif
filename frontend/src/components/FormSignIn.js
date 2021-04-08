import React, {  useState } from 'react';
import './Form.css';

const FormSignin = () => {

    // Met le state des inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        // envoi les données des inputs onSubmit
    const handleClick =  () => {

        fetch('http://127.0.0.1:5000/token', {
            method: 'POST',
            mode:'no-cors',
            headers: {
                'Content-type': 'application/json',
                'accept':'application/json'
              },
            body: JSON.stringify({email, password})
          }).then(resp => {
              if(resp.status === 0) return resp.json();
              else alert("erreur")
        }
            ).then().catch(error => {console.error("Il y a une erreur", error)}) //pour afficher le bon status, il faut retirer le mode no-cors


  }


       return (
           <>
            <div className='form-content'>
                <form className="form">

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

                    <button onClick={handleClick} className='form-input-btn'>SE CONNECTER</button>
                </form>

            </div>
        </>
   );

}

export default FormSignin;