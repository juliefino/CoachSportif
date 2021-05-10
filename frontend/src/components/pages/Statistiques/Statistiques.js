import React, {useEffect, useState} from 'react'
import {Bar} from 'react-chartjs-2'
import {Line} from 'react-chartjs-2';

import {jsPDF} from "jspdf"
import html2canvas from "html2canvas";
import Select from "react-select";
import {Box} from "@chakra-ui/react";

const pdfConverter = require("jspdf");

function Distance () {
    const [valeurs, setValeurs] = useState(false)
    const [donnees, setDonnees] = useState(null)
    const [keys, setKeys] = useState(null)
    const [button, setButton] = useState(false)
    const don = []
    const [hori, setHori] = useState("Barres");
    const [verti, setVertical] = useState("Ligne");
    useEffect(() => {
        const apiUrl = `/api/statistiques/`;
        fetch(apiUrl + localStorage.getItem("id"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then((res) => res.json())
            .then((response) => {
                //console.log(response)
                setKeys(Object.keys(response))

                setDonnees(response)
                console.log(response)

                //console.log(don)
                setValeurs(true)
            });
    }, []);

    let label = ["Barres", "Ligne"];
    let show = "";

    const handleClick = () => {
        setButton(!button);
        if (button === true) {
            show = label[0];
            setHori(hori)
        } else {
            show = label[1];
            setVertical(verti)
        }
    }


    switch (valeurs) {
        case false:
            return (<div>Holaa</div>)
            break;
        case true:
            for (let i = 1; i < 13; i++) {
                if (keys.find(key => +key === i)) {

                    don.push(donnees[i].distance)
                } else {
                    don.push(0)
                }
            }
            console.log(don)
            const label = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', "Aout"]
            const data = {
                labels: label,
                datasets: [{
                    label: 'Nombre de KM par mois',
                    backgroundColor: '#C29B61',
                    hoverBackgroundColor: '#663300',
                    hoverBorderColor: '#FF0000',
                    data: don,
                    borderColor: '#C29B61',
                    tension: 0.1
                }]
            };
            const options = {
                maintainAspectRatio: false,
                responsive: true
            }

            const divPDF = () => {
                html2canvas(document.querySelector('html'), {scale: 1}).then(canvas => {
                    const orientation = window.screen.msOrientation || window.screen.mozOrientation || (window.screen.orientation || {}).type;
                    let pdf;
                    if (orientation.indexOf('portrait') >= 0) {
                        pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
                    } else {
                        pdf = new jsPDF('l', 'pt', [canvas.width, canvas.height]);
                    }
                    pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, canvas.width, canvas.height);
                    pdf.save(); //-> download pdf file
                })
            };
            return (
                <>
                   <button className='btns' onClick={handleClick}>{button ? verti :  hori}</button>
                    {button ? <div className="Stats" style={{width: "100%", height: "500px"}}>
                        <Bar data={data} options={options}/>
                    </div> :
                    <div className="Stats" style={{width: "100%", height: "500px"}}>
                        <Line data={data} options={options}/>
                    </div>
                    }

                    <button style={{'margin-left':"20px"}} className='form-input-btn' onClick={divPDF}>Télécharger PDF</button>

                </>
            )
            break;
        default:
            break;
    }

}
function Vitesse () {
    const [valeurs, setValeurs] = useState(false)
    const [donnees, setDonnees] = useState(null)
    const [keys, setKeys] = useState(null)
    const don = []
    const [button, setButton] = useState(false)
    const [hori, setHori] = useState("Barres");
    const [verti, setVertical] = useState("Ligne");
    useEffect(() => {
        const apiUrl = `/api/statistiques/`;
        fetch(apiUrl + localStorage.getItem("id"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            }
        })
            .then((res) => res.json())
            .then((response) => {
                //console.log(response)
                setKeys(Object.keys(response))

                setDonnees(response)
                console.log(response)

                //console.log(don)
                setValeurs(true)
            });
    }, []);

    let label = ["Barres", "Ligne"];
    let show = "";

    const handleClick = () => {
        setButton(!button);
        if (button === true) {
            show = label[0];
            setHori(hori)
        } else {
            show = label[1];
            setVertical(verti)
        }
    }
    switch (valeurs) {
        case false:
            return (<div>Hola</div>)
            break;
        case true:
            for (let i = 1; i < 13; i++) {
                if (keys.find(key => +key === i)) {

                    don.push(donnees[i].vitesse)
                } else {
                    don.push(0)
                }
            }
            console.log(don)
            const label = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', "Aout"]
            const data = {
                labels: label,
                datasets: [{
                    label: 'Meilleure vitesse moyenne par mois',
                    backgroundColor: '#C29B61',
                    hoverBackgroundColor: '#663300',
                    hoverBorderColor: '#FF0000',
                    data: don,
                    borderColor: '#C29B61',
                    tension: 0.1
                }]
            };
            const options = {
                maintainAspectRatio: false,
                responsive: true
            }
            const divPDF = () => {
                html2canvas(document.querySelector('html'), {scale: 1}).then(canvas => {
                    const orientation = window.screen.msOrientation || window.screen.mozOrientation || (window.screen.orientation || {}).type;
                    let pdf;
                    if (orientation.indexOf('portrait') >= 0) {
                        pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
                    } else {
                        pdf = new jsPDF('l', 'pt', [canvas.width, canvas.height]);
                    }
                    pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, canvas.width, canvas.height);
                    pdf.save(); //-> download pdf file
                })
            };
            return (
                <>

                    <button className='btns' onClick={handleClick}>{button ? verti :  hori}</button>
                    {button ? <div className="Stats" style={{width: "100%", height: "500px"}}>
                        <Bar data={data} options={options}/>
                    </div> :
                    <div className="Stats" style={{width: "100%", height: "500px"}}>
                        <Line data={data} options={options}/>
                    </div>
                    }
                    <button style={{'margin-left':"20px"}} className='form-input-btn' onClick={divPDF}>Télécharger PDF</button>
                </>
            )
            break;
        default:
            break;
    }

}
const BarChart = () => {

    const [button, setButton] = useState(true);
    const [distance, setDistance] = useState("Distance");
    const [vitesse, setVitesse] = useState("Vitesse Moyenne");
    let label = ["Distance", "Vitesse"];
    let show = "";

    const handleClick = () => {
        setButton(!button);
        if (button === true) {
            show = label[0];
            setDistance(distance);
        } else {
            show = label[1];
            setVitesse(vitesse);

        }
    }

    return (
        <div>
            <h1>VOS STATISTIQUES</h1>
            <button className='btns' onClick={handleClick}>{button ? vitesse : distance}</button>
            {button ? <Distance/> : <Vitesse/>}
        </div>
    );
}


export default BarChart;
/*
const BarChart = () => {

    return (
        <>
            <Box w="50%" p={6} l='left' alignItems="center" border="50px" borderColor="gray">
                <h3 style={{textAlign: "center"}}>Choisir statistiques à voir</h3>
                <Select
                    placeholder="Select Option"
                    className="selection"
                    style={{display: 'block'}}

                />
            </Box>
            <Distance/>
        </>
    )
}

export default BarChart*/