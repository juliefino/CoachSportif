import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { Col, Row, Form } from "react-bootstrap";
import '../Encodage.css'
import ReactNotification, {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

export default function Score() {
      // Met le state des inputs
  const [id_user, setUser] = localStorage.getItem("id")
  const [id_activite] = localStorage.getItem("id_activite")
  console.log(typeof(id_activite))
  const [date, setDate] = useState('')
  const [duree, setDuree] = useState('')

  const [nom_team_1, setTeam_1] = useState('')
  const [score_team_1, setScore_1] = useState('')
  const [nom_team_2, setTeam_2] = useState('')
  const [score_team_2, setScore_2] = useState('')
  const heure = null
  const distance = null
  const vitesse_moyenne = null

const send = async (event_score) => {
    event_score.preventDefault();
try {
    console.log("Enter fetch !")
    let result =  await fetch('/api/encodage', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json',
        'accept':'application/json'
      },
    body: JSON.stringify({id_user, id_activite, date, heure, distance, duree, vitesse_moyenne, nom_team_1,
            score_team_1, nom_team_2, score_team_2})
  })/*
  .then((response) => {
        if (response.status === 200) {
            store.addNotification({
                title: "DONE!",
                message: "Les données ont bien été enregistrées",
                type: "success",
                insert: "top",
                container: "top-left",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        } else if (response.status === 400) {
            store.addNotification({
                title: "ERROR!",
                message: "Une erreur est survenue, les données n'est pas été enregistrées",
                type: "danger",
                insert: "top",
                container: "top-left",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });
        }
  })*/
    window.location.replace("/activites")
    console.log("Done")
    console.log(result.status) //pour afficher le bon status, il faut retirer le mode no-cors
}

catch(e){
    console.log(e);
  }
}

      return (
      <>
      <h1>PERFORMANCE SCORE</h1>
      <div className='form-content-enco'>
                <form className="form-enco" onSubmit={(event_score) => {send(event_score)}}>

                <p className="introduction"> Veuillez introduire les différentes données correspondant à l'activité que vous avez réalisée dans les champs proposés</p>
                    <div className="form-inputs-enco">
                    <label className='form-label-enco'> </label>
                      <input className='form-input' type='date' required value={date} name="date"
                            onChange={ (e) => setDate(e.target.value) }/>
                    </div>

                    <div className='form-inputs-enco'>
                       <label className='form-label-enco'>Durée totale de l'activité<bdi>heure : minutes</bdi></label>
                         <input className='form-input' type="time" required value={duree} name="duree"
                            onChange={ (e) => setDuree(e.target.value) }/>
                    </div>

                <p className = "titre"> TEAM 1 </p>
                    <div className="form-inputs-enco">
                      <input className='form-input-enco' type='string' placeholder="Nom team 1"
                             required value={nom_team_1} name="nom_team_1"
                             onChange={ (e) => setTeam_1(e.target.value) }/>
                    </div>
                    <div className="form-inputs-enco">
                      <label className='form-label-enco'>Score</label>
                      <input className='form-input-enco-score' type='number' min="0" max="99" placeholder="0" step="1"
                             required value={score_team_1} name="score_team_1"
                             onChange={ (e) => setScore_1(e.target.value) }/>
                    </div>

                <p className = "titre"> TEAM 2 </p>
                    <div className="form-inputs-enco">
                      <input className='form-input-enco' type='string' placeholder="Nom team 2"
                             required value={nom_team_2} name="nom_team_2"
                             onChange={ (e) => setTeam_2(e.target.value)}/>
                    </div>
                    <div className="form-inputs-enco">
                      <label className='form-label-enco'>Score</label>
                      <input className='form-input-enco-score' type='number' min="0" max="99" placeholder="0" step="1"
                             required value={score_team_2} name="score_team_2"
                             onChange={ (e) => setScore_2(e.target.value) }/>
                    </div>
                <button type="submit" className='form-input-btn'>VALIDER</button>
                </form>
      </div>
      </>
      );
}