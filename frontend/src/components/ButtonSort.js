import React, {useState} from 'react';
import './Cards.css';
import './ButtonSort.css';
import { Link } from 'react-router-dom';
import CardItem from "./CardItem";

const Ascending = () => {
    return <div className='cards'>
                    <h1>ACTIVITÉS</h1>

                    <div className='cards__container'>
                        <div className='cards__wrapper'>
                            <ul className='cards__items'>
                                <CardItem
                                    src='images/atletismo.jpg'
                                    text='Inscrivez-vous à cette activité'
                                    label='Athletisme'
                                    path='/activites'
                                />
                                <CardItem
                                    src='images/basketball.jpg'
                                    text='Inscrivez-vous à cette activité'
                                    label='Basketball'
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
                                    src='images/natacion.jpg'
                                    text='Inscrivez-vous à cette activité'
                                    label='Natation'
                                    path='/activites'
                                />
                                <CardItem
                                    src='images/tenis.png'
                                    text='Inscrivez-vous à cette activité'
                                    label='Tennis'
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
    let show ="";

    const handleClick = () => {
        setButton(!button);
        if(button === true) {
            show = label[0];
            setAscendant(ascendant);
        }

        else {
            show = label[1];
            setDescendant(descendant);

        }
    }

        return (
            <div>
                <button className='btn' onClick={handleClick}>{button ? descendant : ascendant}</button>
                    {button ? <Ascending />  : <Descending/>}
             </div>
        );
}


export default ButtonSort;