import React, {  useState } from 'react';
import './Form.css';

const FormSignin = () => {

    // Met le state des inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const token = sessionStorage.getItem("token") //localstorage
    console.log("Voila le token ", token)
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
        }).then(resp => {
            console.log(resp)
            return resp.json();
         }).then(data => {
                console.log("Ça vient du backend ", data.result)
                //sessionStorage.setItem("token", data.access_token.access_tokent)
                //console.log(data.result.access_token, " hola")
                ;
          }).catch(error => {console.error("Il y a une erreur", error)})
  }
  /*
        fetch('http://127.0.0.1:5000/token', {
            method: 'POST',
            mode:'no-cors',
            headers: {
                'Content-type': 'application/json',
                'accept':'application/json'
              },
            body: JSON.stringify({email, password})
          }).then(data => {
                //console.log("Ça vient du backend", data)
                //sessionStorage.setItem("token", data)
                console.log(data.access_token)
                ;}
                ).catch(error => {console.error("Il y a une erreur", error)})
    }*/



       return (
            <div>
               {token && token!== "" && token !== undefined  && token !== null? ("T'es loggé " + token ) :(
                <><div className='form-content'>
                    <form className="form" action="#">

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
               )}
           </div>
   );

}

export default FormSignin;