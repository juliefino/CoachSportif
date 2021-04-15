import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import './CardItem.css';
import {isLoggedIn} from './auth.js';
import axios from "axios";

function CardItem(props) {

    const toggleLike = () => {
        axios.post('/api/activiteFavorite', {
            card_id: props.id
        }, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem('access_token')}`
            }
        })
            .then((response) => {
                if (response.data === "Added!") {
                    let actualCard = document.getElementById(props.id).childNodes[0];
                    actualCard.style.color = "red";
                } else if (response.data === "Deleted!") {
                    let actualCard = document.getElementById(props.id).childNodes[0];
                    actualCard.style.color = "grey";
                }
            }, (error) => {
                console.log(error);
            });

    }
    if (isLoggedIn()) {
        return (

            <>
                <li className='cards__item'>
                    <Link className='cards__item__link' to={props.path}>
                        <figure className='cards__item__pic-wrap' data-category={props.label}>
                            <img
                                className='cards__item__img'
                                alt='Travel Image'
                                src={props.src}
                            />
                            <button className='likeBtn' onClick={toggleLike} id={props.id}>
                                <FontAwesomeIcon icon={faHeart} style={{color: "grey"}}/>
                            </button>
                        </figure>
                        <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{props.text}</h5>
                        </div>
                    </Link>
                </li>
            </>
        );


    } else {
        return (
            <>
                <li className='cards__item'>
                    <Link className='cards__item__link' to={props.path}>
                        <figure className='cards__item__pic-wrap' data-category={props.label}>
                            <img
                                className='cards__item__img'
                                alt='Travel Image'
                                src={props.src}
                            />
                        </figure>
                        <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{props.text}</h5>
                        </div>
                    </Link>
                </li>
            </>
        );
    }

}


export default CardItem;
