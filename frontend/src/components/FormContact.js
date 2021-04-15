import './FormContact.css';
import React, {useState} from "react";


const FormSignup = () => {

    // Met le state des inputs
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [demande, setDemande] = useState('');
}

const FormContact = () => {
    return (
    <div>
        <h1 className='title'>FORMULAIRE DE CONTACT</h1>
        <form className="box" onSubmit={(event) => {
            /*send(event)*/
        }}>
            <div className='pack'>
                <label className='subtitles'>ADRESSE E-MAIL : </label>
                <br></br>
                <input className='entry' type='email' required
                       name='email' placeholder='Entrez votre adresse e-mail'/>
            </div>

            <div className="pack">
                <label className='subtitles'>SUJET : </label>
                <br></br>
                <input className='entry' type='text' required
                       name='subject' placeholder='Sujet de la demande'/>
            </div>

            <div className='pack'>
                <label className='subtitles'>DÉCRIVEZ VOTRE DEMANDE : </label>
                <br></br>
                <textarea placeholder="Ecrivez votre demande ici" className='textbox' required
                          name='demande' maxLength= '300'>
                </textarea>
            </div>

            <button type="submit" className='form-input-btn-contact'>ENVOYER LA DEMANDE</button>
        </form>
    </div>
    );
}
export default FormContact;