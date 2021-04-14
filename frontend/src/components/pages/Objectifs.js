import React, {useState} from 'react';

import '../Objectifs.css'
import Select from 'react-select';
import { Box } from "@chakra-ui/react"

const FormulaireVitesse =() =>{
   const [vitesse, setVitesse] = useState(0.05)

    return(
    <div className='form-content'>
          <form className="formulaire">
              <div className='form-inputs'>

              <label className='form-label'>Vitesse</label>
              <input
                required
                className='form-input'
                type='number'

                step="0.01"
                name='number'
                placeholder='Entrez votre distance souhaité'
                value={vitesse}
                  onChange={(e) => setVitesse(e.target.value) }

              />
              </div>


                        <button className='btn-objectif'>SAUVEGARDER OBJECTIF</button>
                    </form>
                     </div>
    );
}
const FormulaireTemps =() =>{

    const [temps, setTemps] = useState(0.05)

    return(
    <div className='form-content'>
          <form className="formulaire">
              <div className='form-inputs'>

              <label className='form-label'>Temps</label>
              <input
                required
                className='form-input'
                type='number'

                step="0.01"
                name='number'
                placeholder='Entrez votre distance souhaité'
                value={temps}
                  onChange={(e) => setTemps(e.target.value) }

              />
              </div>


                        <button className='btn-objectif'>SAUVEGARDER OBJECTIF</button>
                    </form>
                     </div>
    );
}

const FormulaireDistance =() =>{

    const [distance, setDistance] = useState(0.05)

    return(
    <div className='form-content'>
          <form className="formulaire">
              <div className='form-inputs'>

              <label className='form-label'>Distance</label>
              <input
                required
                className='form-input'
                type='number'

                step="0.01"
                name='number'
                placeholder='Entrez votre distance souhaité'
                value={distance}
                  onChange={(e) => setDistance(e.target.value) }

              />
              </div>


                        <button className='btn-objectif'>SAUVEGARDER OBJECTIF</button>
                    </form>
                     </div>
    );
}

export default function Objectifs() {

  const data = [
    {
      value: 1,
      label: "Vitesse"
    },
    {
      value: 2,
      label: "Temps"
    },
    {
      value: 3,
      label: "Distance"
    }
  ];
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState(3);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
  }
   return (
       <>
        <h1 className='objectifs'>OBJECTIFS</h1>
           <div className='App'>

            <Box maxW="960px" mx="auto" borderWidth="1px" display="flex"  overflow="hidden"  borderColor="gray" >

                    <Box  w="50%" p={6} l='left' alignItems="center" border="50px" borderColor="gray">
                        <h3 style={{textAlign:"center"}}>Definissez un objectif à atteindre</h3>
                        <Select
                        placeholder="Select Option"
                        className="selection"
                        style={{display: 'block'}}
                        value={data.find(obj => obj.value === selectedValue)}
                        options={data}
                        onChange={handleChange}
                        />
                        {selectedValue && <div>
                            {selectedValue === 1 ? <FormulaireVitesse/>
                                : selectedValue === 2 ? <FormulaireTemps/>
                                : <FormulaireDistance/>
                            }</div>}
                  </Box>
                <Box  w="50%" p={6} l='right' alignItems="center" border="50px" borderColor="gray">
                        <h3 style={{textAlign:"center"}}>Voilà votre barre de progression</h3>
                        <div className="progressbar-container">
                          <div className="progressbar-complete" style={{width: `25%`}}>
                            <div className="progressbar-liquid"></div>
                          </div>
                          <span className="progress">25%</span>
                        </div>

                  </Box>




                </Box>

            </div>
       </>
   );

}