import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import '../../App.css'
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Col, Row, Form } from "react-bootstrap";

export default function Distance() {

// Met le state des inputs
  const [id_user, setUser] = localStorage.getItem("id")
  const [id_activite] = useState(2)
  const [date, setDate] = useState('')
  const [heure, setHeure] = useState('')
  const [distance, setDistance] = useState('')
  const [duree, setDuree] = useState('')
  const [vitesse_moyenne, setVitesse_moyenne] = useState('')
  const nothing = null


const send = async (event) => {
    event.preventDefault();
try{
    console.log("Enter fetch !")
    let result =  await fetch('/api/encodage', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'accept':'application/json'
      },
    body: JSON.stringify({id_user, id_activite, date, heure, distance, duree, vitesse_moyenne,
        nothing, nothing, nothing, nothing})
  })
    console.log("Done")
    console.log(result.status) //pour afficher le bon status, il faut retirer le mode no-cors
}

catch(e){
    console.log(e);
  }
}

   return (
       <>   <h1>PERFORMANCE DISTANCE</h1>
            <div className='form-content'>
                <form className="form" onSubmit={(event) => {send(event)}}>
                <p className="introduction"> Veuillez introduire les différentes données correspondant à l'activité que vous avez réalisée dans les champs proposés</p>
                    <div className="form-inputs">
                    <label className='form-label'>Date </label>
                      <input className='form-input' type='date' required value={date} name="date"
                        onChange={ (e) => setDate(e.target.value) } />
                    </div>

                    <div className="form-inputs">
                      <label className='form-label'>Heure <bdi> heure : minutes </bdi></label>
                        <input className='form-input' type='time'  required value={heure} name="heure"
                          onChange={ (e) => setHeure(e.target.value) }/>
                    </div>

                    <div className="form-inputs">
                      <label className='form-label'>Distance parcourue<bdi> km </bdi> </label>
                        <input className='form-input' type="number" placeholder="1.0" step="0.01" min="0.01" required value={distance} name="distance"
                            onChange={ (e) => setDistance(e.target.value) }/>
                    </div>

                    <div className='form-inputs'>
                       <label className='form-label'>Durée totale de l'activité<bdi> heure : minutes : secondes </bdi></label>
                         <input className='form-input' type="time" step="2" required value={duree} name="duree"
                            onChange={ (e) => setDuree(e.target.value) }/>
                    </div>

                    <div className='form-inputs'>
                       <label className='form-label'>Vitesse moyenne <bdi> minutes : secondes / km </bdi></label>
                         <input required className='form-input' type="time" value={vitesse_moyenne} name="vitesse_moyenne"
                            onChange={ (e) => setVitesse_moyenne(e.target.value) }/>
                    </div>

                    <button type="submit" className='form-input-btn'>VALIDER</button>
                </form>
            </div>
       </>
   );
}