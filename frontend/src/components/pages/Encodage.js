import React, {useState} from 'react';
import {Link} from "react-router-dom";
import '../../App.css'
import '../Encodage.css'


export default function Encodage() {

  const [vitesse, setVitesse] = useState(0)
  const [distance, setDistance] = useState(0)
  const [temps, setTemps] = useState(0)
   return (
       <>
            <div className='form-content'>
              <h1 className='objectifs'>PERFORMANCE</h1>
                <form className="form" >

                    <div className="form-inputs">
                    <label className='form-label'>Date </label>
                      <input className='form-input' type='date' required />
                    </div>

                    <div className="form-inputs">
                      <label className='form-label'>Heure </label>
                        <input className='form-input' type='time' required />
                    </div>

                    <div className="form-inputs">
                      <label className='form-label'>Distance parcourue ( km ) </label>
                        <input className='form-input' type="number" placeholder="1.0" step="0.01" min="0" />
                    </div>

                    <div className='form-inputs'>
                       <label className='form-label'>Durée totale de l'activité (" HH : MM : SS ")</label>
                         <input className='form-input' type="time" step="1" placeholder="HH:MM:SS"/>
                    </div>

                    <div className='form-inputs'>
                       <label className='form-label'>Vitesse moyenne (minutes / km) </label>
                         <input className='form-input' type="time"/>
                    </div>

                    <button type="submit" className='form-input-btn'>VALIDER</button>
                </form>

            </div>
       </>
   );
}