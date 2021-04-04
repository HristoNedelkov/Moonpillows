import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { getAll } from "./services/pillowHandlers";

function Cards() {
  return (
    <div className='cards'>
      <h1>% Виж най-новите ни модели! % </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            <CardItem
              src='images/img-9.jpg'
              text='Lorelli Възглавница за кърмене 190 см'
              label='BGN 25.99'
              path='/services'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Lorelli Възглавница за кърмене 190 см'
              label='BGN 25.99'
              path='/services'
            />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Nuvita Възглавница за бременност и кърмене DreamWizard'
              label='BGN 99.90'
              path='/services'
            />

            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Nuvita Възглавница за бременност и кърмене DreamWizard'
              label='BGN 99.90'
              path='/services'
            />

            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Nuvita Възглавница за бременност и кърмене DreamWizard'
              label='BGN 99.90'
              path='/services'
            />

            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
