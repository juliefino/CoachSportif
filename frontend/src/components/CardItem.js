import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import './CardItem.css';


function CardItem(props) {
    const [favorite, setFavorite] = useState(false);
    const toggleLike = () =>{
        setFavorite(!favorite);
    }
    const changeColor = favorite ? "red" : "grey";
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
                        <button className='likeBtn' onClick={toggleLike}>
                            <FontAwesomeIcon icon={faHeart} style={{color: changeColor}}/>
                        </button>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text'>{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
