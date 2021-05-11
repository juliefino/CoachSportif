import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import '../Encodage.css'
import ReactNotification, {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

export default function Distance() {

// Met le state des inputs
  const [id_user, setUser] = localStorage.getItem("id")
  const [id_activite] = localStorage.getItem("id_activite")
  const [date, setDate] = useState('')
  const [heure, setHeure] = useState('')
  const [distance, setDistance] = useState('')
  const [duree, setDuree] = useState('')
  const [vitesse_moyenne, setVitesse_moyenne] = useState('')
  const nom_team_1 = null
  const score_team_1 = null
  const nom_team_2 = null
  const score_team_2 = null

  function set_vitesse() {

      var element_distance = parseInt(document.getElementById("distance").value);
      console.log("Distance : " + element_distance)
      // console.log(element_distance);
      var element_duree = document.getElementById("duree").value;
      console.log("Duree : " + element_duree);

      var secondes = (parseInt(element_duree.substring(0, 2) * 3600) + (parseInt(element_duree.substring(3, 5)) * 60)
            + parseInt(element_duree.substring(6, 8)));
      console.log("En secondes : " + secondes);

      var element_vitesse_secondes = parseInt(Math.round(secondes / element_distance));
      Number.prototype.toHHMMSS = function() {
            var hours = Math.floor(this / 3600) < 10 ? ("00" + Math.floor(this / 3600)).slice(-2) : Math.floor(this / 3600);
            var minutes = ("00" + Math.floor((this % 3600) / 60)).slice(-2);
            var seconds = ("00" + (this % 3600) % 60).slice(-2);
            return minutes + ":" + seconds;
      }
      var element_vitesse = element_vitesse_secondes.toHHMMSS();

      console.log("Vitesse moyenne en minutes:secondes par km : " + element_vitesse);

      if (element_distance && element_duree) {
        console.log(typeof(document.getElementById("vitesse_moyenne").value));
        setVitesse_moyenne(element_vitesse);
      }
  }

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
                        <input className='form-input' type="number" placeholder="1.0" step="0.01" min="0.01" id="distance" required value={distance} name="distance"
                            onChange={ (e) => setDistance(e.target.value) }/>
                    </div>

                    <div className='form-inputs'>
                       <label className='form-label'>Durée totale de l'activité<bdi> heure : minutes : secondes </bdi></label>
                         <input className='form-input' type="time" step="2" required value={duree} name="duree" id="duree"
                            onChange={ (e) => setDuree(e.target.value) }/>
                    </div>

                    <div className='form-inputs'>
                       <label className='form-label'>Vitesse moyenne <bdi> minutes : secondes / km </bdi></label>
                         <input required className='form-input' type="time" value={vitesse_moyenne} name="vitesse_moyenne" id="vitesse_moyenne"
                            onClick={ (e) => set_vitesse(e.target.value) }/>
                    </div>

                    <button type="submit" className='form-input-btn'>VALIDER</button>
                </form>
            </div>
       </>
   );
}