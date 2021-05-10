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
                            document.getElementById(data2.data[i].id_activity + 'stat').style.visibility = "visible";
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
                        type = {items['1'].type}
                    />
                    <CardItem
                        src={items['2'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['2'].label}
                        path='/activites'
                        id={items['2'].id}
                        type = {items['2'].type}
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src={items['3'].img}
                        label={items['3'].label}
                        text='Inscrivez-vous à cette activité'
                        path='/activites'
                        id={items['3'].id}
                        type = {items['3'].type}
                    />
                    <CardItem
                        src={items['4'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['4'].label}
                        path='/activites'
                        id={items['4'].id}
                        type = {items['4'].type}
                    />
                    <CardItem
                        src={items['5'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['5'].label}
                        path='/activites'
                        id={items['5'].id}
                    type = {items['5'].type}
                    />
                </ul>
            </div>
        </div>
    }
    return <div className='cards'>
        {content}

    </div>;
}

const Descending = () => {
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
                        src={items['5'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['5'].label}
                        id={items['5'].id}
                        path='/activites'
                        type = {items['5'].type}
                    />
                    <CardItem
                        src={items['4'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['4'].label}
                        path='/activites'
                        id={items['4'].id}
                        type = {items['4'].type}
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src={items['3'].img}
                        label={items['3'].label}
                        text='Inscrivez-vous à cette activité'
                        path='/activites'
                        id={items['3'].id}
                        type = {items['3'].type}
                    />
                    <CardItem
                        src={items['2'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['2'].label}
                        path='/activites'
                        id={items['2'].id}
                        type = {items['2'].type}
                    />
                    <CardItem
                        src={items['1'].img}
                        text='Inscrivez-vous à cette activité'
                        label={items['1'].label}
                        path='/activites'
                        id={items['1'].id}
                        type = {items['1'].type}
                    />
                </ul>
            </div>
        </div>
    }
    return <div className='cards'>
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
            <h1 className='titles'>ACTIVITÉS</h1>
            <button className='btns-d' data-testid='btn' onClick={handleClick}>{button ? descendant : ascendant}</button>
            {button ? <Ascending/> : <Descending/>}
        </div>
    );
}


export default ButtonSort;
export {ButtonSort};