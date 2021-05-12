import React, {useEffect} from 'react';
import './ListeEncodage.css';
import axios from 'axios';

const ListeEncodage = () => {
    let idOfUser = localStorage.getItem('id');
    let arrayEncoded = [];
    let listEncoded_distance = "";
    let listEncoded_score = "";
    let listEncoded_aquatique = "";
    let nom_activite = "";

    useEffect(() => {
        axios.get('/api/getEncodage').then(
            function (response) {
                for (let i in response.data) {
                    if (response.data[i].id_user == idOfUser) {
                        arrayEncoded.push(response.data[i]);
                    }
                }
                for (let j = 0; j < arrayEncoded.length; j++) {
                    if (arrayEncoded[j]['id_activite'] == 1) {
                        nom_activite = "Athlétisme";
                        listEncoded_distance += "<tr><td>" + nom_activite + "</td>" + "<td>" + arrayEncoded[j]['date'] + "</td>" + "<td>" + arrayEncoded[j]['hour']
                            + "</td>" + "<td>" + arrayEncoded[j]['distance'] + "</td>" + "<td>" + arrayEncoded[j]['time'] + "</td>" + "<td>" + arrayEncoded[j]['average_speed'] + "</td>" +
                             "<td><Link to='/partage'><button>Partager</button></Link></td></tr>";
                    }

                    else if (arrayEncoded[j]['id_activite'] == 4) {
                        nom_activite = "Natation";
                        listEncoded_aquatique += "<tr><td>" + nom_activite + "</td>" + "<td>" + arrayEncoded[j]['date'] + "</td>" + "<td>" + arrayEncoded[j]['distance']
                        + "</td>" + "<td>" + arrayEncoded[j]['time'] + "</td>" + "<td><Link to='/partage'><button>Partager</button></Link></td></tr>";
                    }

                    else if (arrayEncoded[j]['id_activite'] == 2 || 3 || 5) {
                        if (arrayEncoded[j]['id_activite'] == 2) {
                            nom_activite = "Basketball";
                        }
                        else if (arrayEncoded[j]['id_activite'] == 3) {
                            nom_activite = "Football";
                        }
                        else if (arrayEncoded[j]['id_activite'] == 5) {
                            nom_activite = "Tennis";
                        }

                        listEncoded_score += "<tr><td>" + nom_activite + "</td>" + "<td>" + arrayEncoded[j]['date'] + "</td>" + "<td>" + arrayEncoded[j]['time'] + "</td>" + "<td>" + arrayEncoded[j]['team1'] + "</td>" + "<td>"
                        + arrayEncoded[j]['team2'] + "</td>" + "<td>" + arrayEncoded[j]['score1'] + "</td>" + "<td>"
                        + arrayEncoded[j]['score2'] + "</td>" + "<td><Link to='/partage'><button>Partager</button></Link></td></tr>";
                    }

                    else {
                        console.log("Error");
                    }
                }
                document.getElementById("tableEncoded_distance").innerHTML = listEncoded_distance;
                document.getElementById("tableEncoded_score").innerHTML = listEncoded_score;
                document.getElementById("tableEncoded_aquatique").innerHTML = listEncoded_aquatique;
            }
        )
    })

    return (
        <div className="container-list-encoded">
            <table class="form-table-first">
                <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Date</th>
                    <th scope="col">Heure</th>
                    <th scope="col">Distance - km</th>
                    <th scope="col">Durée</th>
                    <th scope="col">Allure - min/km</th>
                </tr>
                </thead>
                <tbody id="tableEncoded_distance">
                </tbody>
            </table>

            <table class="form-table-second">
                <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Date</th>
                    <th scope="col">Durée</th>
                    <th scope="col">Team 1</th>
                    <th scope="col">Team 2</th>
                    <th scope="col">Score 1</th>
                    <th scope="col">Score 2</th>

                </tr>
                </thead>
                <tbody id="tableEncoded_score">
                </tbody>
            </table>

            <table class="form-table-third">
                <thead>
                <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Date</th>
                    <th scope="col">Distance - km</th>
                    <th scope="col">Durée</th>
                </tr>
                </thead>
                <tbody id="tableEncoded_aquatique">
                </tbody>
            </table>
        </div>
    );
};

export default ListeEncodage;