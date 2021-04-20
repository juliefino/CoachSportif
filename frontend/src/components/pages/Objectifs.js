import React, {useState, useEffect} from 'react';
import '../Objectifs.css'
import Select from 'react-select';
import { Box, Spinner} from "@chakra-ui/react"
import { Center, Square, Circle } from "@chakra-ui/react"



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
          .then(data => {
              window.location.replace("/objectifs")
          })

    }


    return(
    <div className='form-content-ob'>
          <form className="formulaire">
              <div className='form-inputs-ob'>
                  <h3>{message}</h3>

              <label className='form-label-ob'>Vitesse exprimée en min/km</label>
              <input
                required
                className='form-input-ob'
                type='number'
                min="2"
                step="0.01"
                name='number'
                placeholder='Entrez une vitesse'
                value={vitesse}
                  onChange={(e) => setVitesse(e.target.value) }

              />
              </div>


              <button onClick={handleClick} className='form-input-btn-ob'>SAUVEGARDER OBJECTIF</button>
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
        const id_objectif = 2
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
          .then(data => {
              window.location.replace("/objectifs")
          })
    }

    return(

    <div className='form-content-ob'>
          <form className="formulaire">
              <div className='form-inputs-ob'>
                  <h3>{message}</h3>

              <label className='form-label-ob'>Distance exprimée en mètres</label>
              <input
                required
                className='form-input-ob'
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


               <button onClick={handleClick} className='form-input-btn-ob'>SAUVEGARDER OBJECTIF</button>
                    </form>
                     </div>
    );
}

function Objectifs_Utilisateur() {
    const [valeurs, setValeurs] = useState({})

    useEffect( () => {
        const id = localStorage.getItem('id')
        const apiUrl = `/api/obtenir_objectif_encodage_utilisateur/`;
        fetch(apiUrl + localStorage.getItem("id"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
          .then((res) => res.json())
          .then((response) => {
              setValeurs(response[id])


          });
    }, []);
    const handleClickPerformance = () => {

        window.location.replace('/encodage_distance')
    }
    const handleClickReinitialiser = (e) => {
        e.preventDefault()
        console.log("Se connecter")

        fetch('/api/effacer_objectif_utilisateur/' + localStorage.getItem("id"), {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
            }).then(() => {
                window.location.replace("/objectifs")
        }).catch(() => {console.log("erreur")})
    }

    const pourcentageVitesse = valeurs.vitesse_moyenne * 100 / valeurs.objectif
    const pourcentageDistance = valeurs.distance * 100 / valeurs.objectif

    return(

        <div>
            <h1>Votre objectif est {valeurs.nom_objectif}  </h1>
            <p>Votre objectif a demarré le {valeurs.date}</p>
            {valeurs.nom_objectif === 'Vitesse' ?

                <Center h="300px" >
                <Box  w="55%"  p={150}  alignItems="center" border="500px" >
                        <h3 style={{textAlign:"center"}}>Votre barre de progression</h3>
                        <div className="progressbar-container">

                          <div className="progressbar-complete" style={{width: `${pourcentageVitesse}%`}}>
                            <div className="progressbar-liquid"></div>
                          </div>
                            {pourcentageVitesse >= 100 ?
                                 <span className="progress">Vous avez atteint votre objectif </span> :
                                 <span className="progress">{pourcentageVitesse}%</span>
                            }

                        </div>

                </Box></Center>

            :  <Center>
                <Box  w="55%"  p={150}  alignItems="center" border="500px" >
                        <h3 style={{textAlign:"center"}}>Votre barre de progression </h3>
                        <div className="progressbar-container">
                          <div className="progressbar-complete" style={{width: `${pourcentageDistance}%`}}>
                            <div className="progressbar-liquid"></div>
                          </div>
                            {pourcentageDistance >= 100 ?
                                 <span className="progress">Vous avez atteint votre objectif </span> :
                                 <span className="progress">{pourcentageDistance}%</span>
                            }

                        </div>

                </Box></Center> }
            <Center>
                <button onClick={handleClickReinitialiser} className='form-input-btn-reinitialiser'>EFFACER OBJECTIF</button>
                <button onClick={handleClickPerformance} className='form-input-btn-reinitialiser'>AJOUT PERFORMANCE</button></Center>
        </div>


     )

}


export default function Objectifs() {
    const [donnees, setDonnees] = useState(null)
    const [valeurs, setValeurs] = useState(null)
    const [hasPurpose,setHasPurpose ] = useState(null)

    useEffect(() => {
        const apiUrl = `/api/objectifs`;
        fetch(apiUrl, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
          .then((res) => {console.log(res);

          return res.json()})
          .then((response) => {
                    setDonnees(response)
                    getObjectif()
          });
  }, [setDonnees]);
    const donnee = [];
    for (let i in donnees) {
        donnee.push(donnees[i])

    };


    const getObjectif = () => {
        const apiUrl = `/api/obtenir_objectif_encodage_utilisateur/`;
        fetch(apiUrl + localStorage.getItem("id"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then(async (res) => {
                switch (res.status) {
                    case 200:
                        const data = await res.json()
                        setHasPurpose(true);
                        break;
                    case 400:
                        //400 bad request
                        setHasPurpose(false);
                        break;

                    default:
                        setHasPurpose(null);
                        break;
                }
                /*console.log(res.status)
                if(res.status === 404){
                    setHasPurpose(false)
                }else{
                    setHasPurpose(true)
                    return res.json()
                }*/
            })
            .catch(error => {
                console.log(error);
                setHasPurpose(null);
            });
    };



  // set value for default selection
  const [selectedValue, setSelectedValue] = useState(1);

  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
  }
    switch (hasPurpose) {
        case null:
            return(
                <div>
                    <div className="spinner-border" role="status">

                    </div>


                </div>
            )
            break;
        case true:

            return(
                <div>
                    <Objectifs_Utilisateur/>
                 </div>
            )
            break;
        case false:

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
                                value={donnee.find(obj => obj.value === selectedValue)}
                                options={donnee}
                                onChange={handleChange}
                                />
                                {selectedValue && <div>
                                    {selectedValue === 1 ? <FormulaireVitesse/>
                                        : <FormulaireDistance/>
                                    }</div>}
                          </Box>
                        <Box  w="50%" p={6} l='right' alignItems="center" border="50px" borderColor="gray">
                                <h3 style={{textAlign:"center"}}>Voilà comment devrait se voir votre barre de progression</h3>
                                <div className="progressbar-container">
                                  <div className="progressbar-complete" style={{width: `65%`}}>
                                    <div className="progressbar-liquid"></div>
                                  </div>
                                  <span className="progress">65%</span>
                                </div>

                          </Box>

                        </Box>

                    </div>
               </>
            )
            break;

        default:
            break;

    }



}