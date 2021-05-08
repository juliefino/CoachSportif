import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './FormDonnees.css';
import ReactNotification, {store} from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const FormDonnees = () => {

    // Met le state des inputs

    const [alias, setAlias] = useState('');
    const [taille, setTaille] = useState(null)
    const [email, setEmail] = useState('');
    const [poids, setPoids] = useState(null)
    const [premium, setPremium] = useState(null)


    useEffect(() => {
        const id = localStorage.getItem('id')
        const apiUrl = `/api/utilisateurs/`;
        fetch(apiUrl + localStorage.getItem("id"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then((res) => res.json())
            .then((response) => {
                setAlias(response[id].alias)
                setEmail(response[id].email)
                setTaille(response[id].taille)
                setPoids(response[id].poids)
                setPremium(response[id].premium)
            });
    }, []);

    const handleClick = (e) => {
        e.preventDefault()
        console.log("Modification des données")

        fetch('/api/utilisateurs/' + localStorage.getItem("id"), {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            },
            body: JSON.stringify({alias, email, taille, poids})
        }).then((response) => {
            if (response.status === 200) {

                store.addNotification({
                    title: "PARFAIT!",
                    message: "Votre profil a bien été sauvegarder",
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
                    message: "Votre profil n'a pas pu être mis à jour",
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
            } else {
                document.getElementById("solution").innerHTML = "";
            }

        }).catch(() => {
            console.log("erreur")
        })
    }


    switch (premium) {
        case null:
            return (
                <div>
                    <div className="spinner-border" role="status">

                    </div>


                </div>
            )
            break;
        case true:
            return (


                <div>
                    <ReactNotification/>
                    <h1>VOS DONNÉES</h1>

                    <div className='form-content-don'>


                        <form className="form-don">
                            <h3 id="solution"></h3>


                            <div className='form-inputs-don'>

                                <label className='form-label-don'>ALIAS</label>
                                <input
                                    className='form-input-don'
                                    type='text'
                                    name='text'
                                    placeholder=''
                                    value={alias}
                                    onChange={(e) => setAlias(e.target.value)}

                                />
                            </div>
                            <div className='form-inputs-don'>
                                <label className='form-label-don'>TAILLE</label>
                                <input
                                    className='form-input-don'
                                    type='number'
                                    name='number'
                                    placeholder=''
                                    value={taille}
                                    onChange={(e) => setTaille(e.target.value)}
                                />
                            </div>
                            <div className="form-inputs-don">
                                <label className='form-label-don'>POIDS</label>
                                <input
                                    className='form-input-don'
                                    type='number'
                                    name='alias'
                                    placeholder=''
                                    value={poids}
                                    onChange={(e) => setPoids(e.target.value)}
                                />
                            </div>
                            <div className='form-inputs-don'>
                                <label className='form-label-don'>EMAIL</label>
                                <input
                                    className='form-input-don'
                                    type='email'
                                    name='email'
                                    placeholder=''
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <button onClick={handleClick} className='form-input-btn-don'>MODIFIER</button>


                        </form>

                    </div>
                </div>
            );
            break;
        case false:
            return (

                <div>
                    <h1>VOS DONNÉES</h1>
                    <div className='form-content-don'>

                        <form className="form-don">
                            <h3 id="solution"></h3>

                            <div className='form-inputs-don'>

                                <label className='form-label-don'>ALIAS</label>
                                <input
                                    className='form-input-don'
                                    type='text'
                                    name='text'
                                    placeholder=''
                                    value={alias}
                                    onChange={(e) => setAlias(e.target.value)}

                                />
                            </div>
                            <div className='form-inputs-don'>
                                <label className='form-label-don'>TAILLE</label>
                                <input
                                    className='form-input-don'
                                    type='number'
                                    name='number'
                                    placeholder=''
                                    value={taille}
                                    onChange={(e) => setTaille(e.target.value)}
                                />
                            </div>
                            <div className="form-inputs-don">
                                <label className='form-label-don'>POIDS</label>
                                <input
                                    className='form-input-don'
                                    type='number'
                                    name='alias'
                                    placeholder=''
                                    value={poids}
                                    onChange={(e) => setPoids(e.target.value)}
                                />
                            </div>
                            <div className='form-inputs-don'>
                                <label className='form-label-don'>EMAIL</label>
                                <input
                                    className='form-input-don'
                                    type='email'
                                    name='email'
                                    placeholder=''
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <button onClick={handleClick} className='form-input-btn-don'>MODIFIER</button>

                            <button className='form-input-btn-prem'><Link className='form-input-btn-prem' to='/premium'>DEVENIR
                                PREMIUM</Link></button>

                        </form>

                    </div>
                </div>
            );

            break;
        default:
            break;

    }
}

export default FormDonnees;