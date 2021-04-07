import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { getAll } from './services/pillowHandlers';
import fullPath from './services/pathSolver';


function Cards() {

  const [pillows, setPillows] = useState([]);
  useEffect(() => {
    getAll().then(res => {
      setPillows(res.reverse());
    }).catch(res=> console.log(res))
  }, [])



  return (
    <div className='cards'>
      <h1>% Виж най-новите ни модели! % </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>

          <ul className='cards__items'>

            {pillows.slice(0, 2).map(([id, all]) => {
              return (
                <CardItem
                  key={id}
                  src={all.src}
                  text={all.text}
                  label={"BGN " + all.label}
                  description={all.description}
                  path={fullPath(`products/${id}`)} />)
            })}
          </ul>
          <ul className='cards__items'>
          {pillows.slice(2, 5).map(([id, all]) => {
              return (
                <CardItem
                  key={id}
                  src={all.src}
                  text={all.text}
                  label={"BGN " + all.label}
                  description={all.description}
                  path={fullPath(`products/${id}`)} />)
            })}

          </ul>



        </div>
      </div>
    </div>
  );
}

export default Cards;
