import React, {useState} from 'react';
import '../../App.css';
import {Link} from "react-router-dom";

export default function Objectifs() {

  const [vitesse, setVitesse] = useState(0)
  const [distance, setDistance] = useState(0)
  const [temps, setTemps] = useState(0)
   return (
       <>

            <div className='form-content'>
              <h1 className='objectifs'>OBJECTIFS</h1>
                <form className="form" >
                    <div className="form-inputs">
                    <label className='form-label'>Vitesse</label>
                      <input
                        className='form-input'
                        type='text'
                        required
                        name='alias'
                        placeholder='Entrez votre alias'
                        value={vitesse}
                        onChange={ (e) => setVitesse(e.target.value) }

                      />
                    </div>
                    <div className='form-inputs'>
                      <label className='form-label'>DISTANCE</label>
                      <input
                        className='form-input'
                        type='email'
                        required
                        name='email'
                        placeholder='Entrez votre e-mail'
                        value={distance}
                        onChange={ (e) => setDistance(e.target.value) }

                      />
                      </div>
                    <div className='form-inputs'>
                      <label className='form-label'>NAISSANCE</label>
                      <input
                        className='form-input'
                        type='date'
                        required
                        name='naissance'
                        value={temps}
                        onChange={ (e) => setTemps(e.target.value) }
                      />
                    </div>



                    <button type="submit" className='form-input-btn'>S'INSCRIRE</button>
                </form>

            </div>
       </>
   );

}