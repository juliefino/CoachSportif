import React, {useEffect, useState} from 'react';
import './Cards.css';
import './ButtonSort.css';
import CardItem from "./CardItem";

const Ascending = () => {
    const [data, setData] = useState([]);
    const getData = () => {
         fetch('/api/activites'
            , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setData(myJson);
                data.push(myJson);
                console.log(data[0]['1'].label);
            });
    }
    useEffect(() => {
        getData()
    }, [])
    return <div className='cards'>
        <h1>ACTIVITÉS</h1>

        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src='images/atletismo.jpg'
                        text='Inscrivez-vous à cette activité'
                        label= ''
                        path='/activites'
                    />
                    <CardItem
                        src='images/basketball.jpg'
                        text='Inscrivez-vous à cette activité'
                        label=''
                        path='/activites'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='images/futbol.jpg'
                        label=''
                        text='Inscrivez-vous à cette activité'
                        path='/activites'
                    />
                    <CardItem
                        src='images/natacion.jpg'
                        text='Inscrivez-vous à cette activité'
                        label=''
                        path='/activites'
                    />
                    <CardItem
                        src='images/tenis.png'
                        text='Inscrivez-vous à cette activité'
                        label=''
                        path='/activites'
                    />
                </ul>
            </div>
        </div>
    </div>;
}

const Descending = () => {
    return <div className='cards'>
        <h1>ACTIVITÉS</h1>

        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src='images/tenis.png'
                        text='Inscrivez-vous à cette activité'
                        label='Tennis'
                        path='/activites'
                    />
                    <CardItem
                        src='images/natacion.jpg'
                        text='Inscrivez-vous à cette activité'
                        label='Natation'
                        path='/activites'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='images/futbol.jpg'
                        label='Football'
                        text='Inscrivez-vous à cette activité'
                        path='/activites'
                    />
                    <CardItem
                        src='images/basketball.jpg'
                        text='Inscrivez-vous à cette activité'
                        label='Basketball'
                        path='/activites'
                    />
                    <CardItem
                        src='images/atletismo.jpg'
                        text='Inscrivez-vous à cette activité'
                        label='Athletisme'
                        path='/activites'
                    />
                </ul>
            </div>
        </div>
    </div>;
}

const ButtonSort = () => {

    const [button, setButton] = useState(true);
    const [ascendant, setAscendant] = useState("Ascendant");
    const [descendant, setDescendant] = useState("Descendant");
    let label = ["Ascendant", "Descendant"];
    let show = "";

    const handleClick = () => {
        setButton(!button);
        if (button === true) {
            show = label[0];
            setAscendant(ascendant);
        } else {
            show = label[1];
            setDescendant(descendant);

        }
    }

    return (
        <div>
            <button className='btn' onClick={handleClick}>{button ? descendant : ascendant}</button>
            {button ? <Ascending/> : <Descending/>}
        </div>
    );
}


export default ButtonSort;