import React, {useEffect, useState} from 'react';
import './Cards.css';
import './ButtonSort.css';
import CardItem from "./CardItem";
import axios from 'axios';

const Ascending = () => {
    const url1 = "/api/activites";
    const url2 = "/api/activitesLikees";
    const [items, SetItems] = useState(null);
    let content = null;
    useEffect(() => {
            axios.all([
                axios.get(url1),
                axios.get(url2)
            ])
                .then(axios.spread((data1, data2) => {
                     SetItems(data1.data);
                     for (let i in data2.data) {
                        if (data2.data[i].id_user === +localStorage.getItem('id')) {
                            document.getElementById(data2.data[i].id_activity).childNodes[0].style.color = "red";
                        }
                    }
                }));
        }, [url1]
    )

    if (items) {
        content = <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src={items['1'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['1'].label}
                        path='/activites'
                        id={items['1'].id}
                    />
                    <CardItem
                        src={items['2'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['2'].label}
                        path='/activites'
                        id={items['2'].id}
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src={items['3'].img}
                        label={items['3'].label}
                        text='Inscrivez-vous à cette activité'
                        path='/activites'
                        id={items['3'].id}
                    />
                    <CardItem
                        src={items['4'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['4'].label}
                        path='/activites'
                        id={items['4'].id}
                    />
                    <CardItem
                        src={items['5'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['5'].label}
                        path='/activites'
                        id={items['5'].id}
                    />
                </ul>
            </div>
        </div>
    }
    return <div className='cards'>
        <h1>ACTIVITÉS</h1>
        {content}

    </div>;
}

const Descending = () => {
    const url = "/api/activites";
    const [items, SetItems] = useState(null);
    let content = null;
    useEffect(() => {
            axios.get(url)
                .then(response => {
                    SetItems(response.data)
                })
        }, [url]
    )
    if (items) {
        content = <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src={items['5'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['5'].label}
                        path='/activites'
                    />
                    <CardItem
                        src={items['4'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['4'].label}
                        path='/activites'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src={items['3'].img}
                        label={items['3'].label}
                        text='Inscrivez-vous à cette activité'
                        path='/activites'
                    />
                    <CardItem
                        src={items['2'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['2'].label}
                        path='/activites'
                    />
                    <CardItem
                        src={items['1'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['1'].label}
                        path='/activites'
                    />
                </ul>
            </div>
        </div>
    }
    return <div className='cards'>
        <h1>ACTIVITÉS</h1>
        {content}

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