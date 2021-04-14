import './FormContact.css';
import React, {useState} from "react";
import {MdTextFields} from "@react-icons/all-files/md/MdTextFields";



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
        <form className="form" onSubmit={(event) => {
            /*send(event)*/
        }}>
            <div className="inputs">
                <label className='labels'>ADRESSE E-MAIL : <br></br></label>
                <input
                    className='input'
                    type='email'
                    required
                    name='email'
                    placeholder='Entrez votre adresse e-mail'
                    /*value={email}
                    onChange={(e) => setAlias(e.target.value)} */

                />
            </div>
            <div className="inputs">
                <label className='labels'>SUJET : <br></br> </label>
                <input
                    className='input'
                    type='text'
                    required
                    name='subject'
                    placeholder='Sujet de la demande'
                    /*value={subject}
                    onChange={(e) => setTaille(e.target.value)}*/
                />
            </div>
            <div className='inputs'>
                <label className='labels'>DÉCRIVEZ VOTRE DEMANDE : <br></br> </label>
                <MdTextFields

                    id="outlined-multiline-static"
                    multiline
                    rows={6}
                    defaultValue="Ecrivez votre demande ici"
                    variant="outlined"

                    className='input'
                    required
                    name='demande'
                    /*value={demande}
                    onChange={(e) => setPassword(e.target.value)}*/
                />
            </div>
            <button type="submit" className='form-input-btn'>ENVOYER LA DEMANDE</button>
        </form>

    </div>
    );
}
export default FormContact;