import React, {useState, useEffect} from 'react';
import '../Objectifs.css'
import Select from 'react-select';
import { Box } from "@chakra-ui/react"

const FormulaireVitesse =() =>{
   const [vitesse, setVitesse] = useState(2)
    const [message, setMessage] = useState("")
    const handleClick = (e) => {
        e.preventDefault()
        const apiUrl = `/api/objectifs_user`;
        const id_user = localStorage.getItem("id");
        const id_objectif = 1
        const objectif = vitesse
        fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            body: JSON.stringify({id_user, id_objectif, objectif})
        })
          .then((res) => res.json())
          .then(texte => {
              texte = "Vous vous êtes inscrit à l'objectif DISTANCE"
              setMessage(texte)
              console.log("ok")
          })
    }


    return(
    <div className='form-content-ob'>
          <form className="formulaire">
              <div className='form-inputs-ob'>
                  <h3>{message}</h3>

              <label className='form-label-ob'>Vitesse exprimée en km/h</label>
              <input
                required
                className='form-input-ob'
                type='number'
                min="2"
                step="0.01"
                name='number'
                placeholder='Entrez votre distance souhaité'
                value={vitesse}
                  onChange={(e) => setVitesse(e.target.value) }

              />
              </div>


              <button onClick={handleClick} className='form-input-btn-ob'>SAUVEGARDER OBJECTIF</button>
                    </form>
                     </div>
    );
}
const FormulaireTemps =() =>{

    const [temps, setTemps] = useState(1)
    const [message, setMessage] = useState("")
    const handleClick = (e) => {
        e.preventDefault()
        const apiUrl = `/api/objectifs_user`;
        const id_user = localStorage.getItem("id");
        const id_objectif = 2
        const objectif = temps
        fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            body: JSON.stringify({id_user, id_objectif, objectif})
        })
          .then((res) => res.json())
          .then(texte => {
              texte = "Vous vous êtes inscrit à l'objectif DISTANCE"
              setMessage(texte)
              console.log("ok")
          })
    }
    return(
    <div className='form-content'>
        <h3>{message}</h3>
          <form className="formulaire">
              <div className='form-inputs'>

              <label className='form-label'>Temps exprimé en minutes </label>
              <input
                required
                className='form-input'
                type='number'
                min="1"
                step="1"
                max="720"
                name='number'
                placeholder='Entrez votre distance souhaité'
                value={temps}
                  onChange={(e) => setTemps(e.target.value) }

              />
              </div>


             <button onClick={handleClick} className='btn-objectif'>SAUVEGARDER OBJECTIF</button>
                    </form>
                     </div>
    );
}
const FormulaireDistance =() =>{

    const [distance, setDistance] = useState(50)
    const [message, setMessage] = useState("")
    const handleClick = (e) => {
        e.preventDefault()
        const apiUrl = `/api/objectifs_user`;
        const id_user = localStorage.getItem("id");
        const id_objectif = 3
        const objectif = distance
        fetch(apiUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                 'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            body: JSON.stringify({id_user, id_objectif, objectif})
        })
          .then((res) => res.json())
          .then(texte => {
              texte = "Vous vous êtes inscrit à l'objectif DISTANCE"
              setMessage(texte)
              console.log("ok")
          })
    }

    return(

    <div className='form-content'>

          <form className="formulaire">
              <div className='form-inputs'>
                  <p>{message}</p>

              <label className='form-label'>Distance exprimée en mètres</label>
              <input
                required
                className='form-input'
                type='number'
                min="50"
                step="1"
                max="100000"
                name='number'
                placeholder='Entrez votre distance souhaité'
                value={distance}
                  onChange={(e) => setDistance(e.target.value) }

              />
              </div>


              <button onClick={handleClick} className='btn-objectif'>SAUVEGARDER OBJECTIF</button>
                    </form>
                     </div>
    );
}

export default function Objectifs() {
    const [donnees, setDonnees] = useState(null)
    useEffect(() => {
        const apiUrl = `/api/objectifs`;
        fetch(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
          .then((res) => res.json())
          .then((response) => {
                    setDonnees(response)
          });
  }, [setDonnees]);
    const don = [];
    for (let i in donnees) {
        don.push(donnees[i])

    };
    console.log(don)

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
                        value={don.find(obj => obj.value === selectedValue)}
                        options={don}
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