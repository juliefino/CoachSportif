import React, {useEffect} from 'react';
import './ListeEncodage.css';
import axios from 'axios';

const ListeEncodage = () => {
    let idOfUser = localStorage.getItem('id');
    let arrayEncoded = [];
    let listEncoded = "";
    useEffect(() => {
        axios.get('/api/getEncodage').then(
            function (response) {
                for (let i in response.data) {
                    if (response.data[i].id_user == idOfUser) {
                        arrayEncoded.push(response.data[i]);
                    }
                }
                for (let j = 0; j < arrayEncoded.length; j++) {
                    if (arrayEncoded[j]['team1'] == null || arrayEncoded[j]['team1'] == undefined) {
                        arrayEncoded[j]['team1'] = '/';
                    }
                    if (arrayEncoded[j]['team2'] == null || arrayEncoded[j]['team2'] == undefined) {
                        arrayEncoded[j]['team2'] = '/';
                    }
                    if (arrayEncoded[j]['score1'] == null || arrayEncoded[j]['score1'] == undefined) {
                        arrayEncoded[j]['score1'] = '/';
                    }
                    if (arrayEncoded[j]['score2'] == null || arrayEncoded[j]['score2'] == undefined) {
                        arrayEncoded[j]['score2'] = '/';
                    }
                    listEncoded += "<tr><td>" + arrayEncoded[j]['date'] + "</td>" + "<td>" + arrayEncoded[j]['hour']
                        + "</td>" + "<td>" + arrayEncoded[j]['distance'] + "</td>" + "<td>" + arrayEncoded[j]['time'] + "</td>" + "<td>" + arrayEncoded[j]['average_speed'] + "</td>" +
                        "<td>" + arrayEncoded[j]['team1'] + "</td>" + "<td>" + arrayEncoded[j]['team2'] + "</td>" + "<td>" + arrayEncoded[j]['score1'] + "</td>" + "<td>" + arrayEncoded[j]['score2'] + "</td>" +
                        "<td>Partager</td></tr>";

                }
                document.getElementById("tableEncoded").innerHTML = listEncoded;
            }
        )
    })

    return (
        <div className="container-list-encoded">
            <table>
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Heure</th>
                    <th scope="col">Distance</th>
                    <th scope="col">Durée</th>
                    <th scope="col">Vitesse Moyenne</th>
                    <th scope="col">Team 1</th>
                    <th scope="col">Team 2</th>
                    <th scope="col">Score 1</th>
                    <th scope="col">Score 2</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody id="tableEncoded">
                </tbody>
            </table>
        </div>
    );
};

export default ListeEncodage;