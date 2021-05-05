import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import '../Encodage_aquatique.css'


export default function Aquatique() {

  const [id_user, setUser] = localStorage.getItem("id")
  const [id_activite] = localStorage.getItem("id_activite")
  const [date, setDate] = useState('')
  const heure = null
  const [distance, setDistance] = useState('')
  const [duree, setDuree] = useState('')
  const vitesse_moyenne = null
  const nom_team_1 = null
  const score_team_1 = null
  const nom_team_2 = null
  const score_team_2 = null

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
            nom_team_1, score_team_1, nom_team_2, score_team_2})
      })
        console.log("Done")
        console.log(result.status) //pour afficher le bon status, il faut retirer le mode no-cors
    }

    catch(e){
        console.log(e);
      }
    }
    return (
        <> <h1>PERFORMANCE AQUATIQUE</h1>
        <div className='form-content-enco-aq'>
            <form className="form-enco-aq" onSubmit={(event) => {send(event)}}>
            <p className="introduction-aq"> Veuillez introduire les différentes données correspondant à l'activité que vous avez réalisée dans les champs proposés</p>
                <div className="form-inputs-enco-aq">
                <label className='form-label-enco-aq'>Date </label>
                  <input className='form-input-enco-aq' type='date' required value={date} name="date"
                    onChange={ (e) => setDate(e.target.value) } />
                </div>

                <div className="form-inputs-enco-aq">
                      <label className='form-label-enco-aq'>Distance parcourue<bdi> km </bdi> </label>
                        <input className='form-input-enco-aq' type="number" placeholder="1.0" step="0.01" min="0.01" required value={distance} name="distance"
                            onChange={ (e) => setDistance(e.target.value) }/>
                </div>

                <div className='form-inputs-enco-aq'>
                       <label className='form-label-enco-aq'>Durée totale de l'activité<bdi> heure : minutes : secondes </bdi></label>
                         <input className='form-input-enco-aq' type="time" step="2" required value={duree} name="duree"
                            onChange={ (e) => setDuree(e.target.value) }/>
                </div>
                <button type="submit" className='form-input-btn'>VALIDER</button>
            </form>
        </div>
        </>
    );
}