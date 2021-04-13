import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import '../../App.css'

const FormEncodage = () => {

// Met le state des inputs
  const [date, setDate] = useState('')
  const [heure, setHeure] = useState('')
  const [distance, setDistance] = useState(5)
  const [duree, setDuree] = useState('')
  const [vitesse_moyenne, setVitesse_moyenne] = useState('')

const send = async (event) => {
    event.preventDefault();
try{
    let result =  await fetch('/api/encodage', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'accept':'application/json'
      },
    body: JSON.stringify({date, heure, distance, duree, vitesse_moyenne})
  })
    console.log("Done")
    console.log(result)
    console.log(result.status) //pour afficher le bon status, il faut retirer le mode no-cors
}

catch(e){
    console.log(e);
  }
}

   return (
       <>
            <div className='form-content'>
              <h1 className='objectifs'>PERFORMANCE</h1>
                <form className="form" onSubmit={(event) => {send(event)}}>

                    <div className="form-inputs">
                    <label className='form-label'>Date </label>
                      <input className='form-input' type='date' required value={date} name="date"
                        onChange={ (e) => setDate(e.target.value) } />
                    </div>

                    <div className="form-inputs">
                      <label className='form-label'>Heure </label>
                        <input className='form-input' type='time' required value={heure} name="heure"
                          onChange={ (e) => setHeure(e.target.value) }/>
                    </div>

                    <div className="form-inputs">
                      <label className='form-label'>Distance parcourue ( km ) </label>
                        <input className='form-input' type="number" placeholder="1.0" step="0.01" min="0" value={distance} name="distance"
                            onChange={ (e) => setDistance(e.target.value) }/>
                    </div>

                    <div className='form-inputs'>
                       <label className='form-label'>Durée totale de l'activité (" HH : MM : SS ")</label>
                         <input className='form-input' type="time" step="1" placeholder="HH:MM:SS" value={duree} name="duree"
                            onChange={ (e) => setDuree(e.target.value) }/>
                    </div>

                    <div className='form-inputs'>
                       <label className='form-label'>Vitesse moyenne (minutes / km) </label>
                         <input className='form-input' type="time" value={vitesse_moyenne} name="vitesse_moyenne"
                            onChange={ (e) => setVitesse_moyenne(e.target.value) }/>
                    </div>

                    <button type="submit" className='form-input-btn'>VALIDER</button>
                </form>
            </div>
       </>
   );
}
export default FormEncodage;