import './FormContact.css';
import React, {useState} from "react";


const FormContact = () => {

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [demande, setDemande] = useState('');

    const sendData = async (event) => {
        event.preventDefault();
        try {
            let donnees = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'accept': 'application/json'
                }, body: JSON.stringify({email, subject, demande})
            })
            console.log("ok");
            console.log(donnees.body);
            console.log(donnees.status);
           // window.location.replace("/");
        } catch (jsp) {
            console.log(jsp);
        }
        alert("Nous avons envoyé votre message, vous recevrez une réponse d'ici peu, merci!")
    }
            return(
                <div>
                    <h1 className='title'>FORMULAIRE DE CONTACT</h1>
                    <form className="box" onSubmit={(event) => {sendData(event)}}>
                        <div className='pack'>
                            <label className='subtitles'>ADRESSE E-MAIL : </label>

                            <input className='entry' type='email' required value={email}
                                   name='email' placeholder='Entrez votre adresse e-mail'
                                   onChange={(jsp) => setEmail(jsp.target.value)}
                            />
                        </div>

                        <div className="pack">
                            <label className='subtitles'>SUJET : </label>
                            <br></br>
                            <input className='entry' type='text' required value={subject}
                                   name='subject' placeholder='Sujet de la demande'
                                   onChange={(jsp) => setSubject(jsp.target.value)}
                            />
                        </div>

                        <div className='pack'>
                            <label className='subtitles'>DÉCRIVEZ VOTRE DEMANDE : </label>
                            <br></br>
                            <textarea placeholder="Ecrivez votre demande ici" className='textbox' required
                                      value={demande} name='demande' maxLength='300'
                                      onChange={(jsp) => setDemande(jsp.target.value)}>
                        </textarea>
                        </div>

                        <button type="submit" className='form-input-btn-contact'>ENVOYER LA DEMANDE</button>
                    </form>
                </div>
            );
}

export default FormContact;