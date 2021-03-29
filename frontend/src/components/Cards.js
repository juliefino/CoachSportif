import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>ACTIVITÉS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/futbol.jpg'
              label='Football'
              text='Inscrivez-vous à cette activité'
              path='/activites'
            />
            <CardItem
              src='images/tenis.png'
              text='Inscrivez-vous à cette activité'
              label='Tennis'
              path='/activites'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/atletismo.jpg'
              text='Inscrivez-vous à cette activité'
              label='Athletisme'
              path='/activites'
            />
            <CardItem
              src='images/natacion.jpg'
              text='Inscrivez-vous à cette activité'
              label='Natation'
              path='/activites'
            />
            <CardItem
              src='images/basketball.jpg'
              text='Inscrivez-vous à cette activité'
              label='Basketball'
              path='/activites'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
