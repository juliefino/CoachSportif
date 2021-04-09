import React, {  useState } from 'react';
import './Form.css';
import {login, useAuth, logout} from "./auth.js"

const FormSignin = () => {

    // Met le state des inputs
    const [logged] = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const token = localStorage.getItem("token") //localstorage

        // envoi les données des inputs onSubmit
    const handleClick =  (e)=>{
        e.preventDefault()
        console.log("Se connecter")
        let options = {
          'email': email,
          'password': password
        }
        console.log(options)
        fetch('/api/login', {
            method: 'post',
            body: JSON.stringify(options)
            }).then(r => r.json())
                .then(token => {
                    if (token.access_token){
                        login(token)
                        console.log(token)
                    }
                    else {
                    console.log("Please type in correct username/password")
                     }
                })
         /*fetch('/api/login', {
          method: 'post',
          body: JSON.stringify(options)
        }).then(resp => {
            console.log(resp)
            return resp.json();
         }).then(data => {
                console.log("Ça vient du backend ", data.result)
                localStorage.setItem("token", data.result.access_token)
                //console.log(data.result.access_token, " hola")
                ;
          }).catch(error => {console.error("Il y a une erreur", error)})*/
  }



       return (
            <div>
               {!logged?
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
                   :  <h1>BIENVENU</h1>}
            </div>
   );

}

export default FormSignin;