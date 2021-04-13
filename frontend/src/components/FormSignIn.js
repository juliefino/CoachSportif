import React, {  useState } from 'react';
import './Form.css';

import { Redirect } from 'react-router-dom';

const FormSignin = () => {

    // Met le state des inputs

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


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
                        //login(token)
                        //localStorage.setItem('token',token.access_token)
                        console.log(token)
                        localStorage.setItem('access_token', token.access_token);
                        localStorage.setItem('id', token.id)
                        localStorage.setItem('username', token.username);

                        if (localStorage.getItem("access_token") !== null && localStorage.getItem("access_token")!=="undefined") {
                            window.location.replace("/")}
                        else{
                            alert("erreur")
                            }
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
            </div>
   );

}

export default FormSignin;