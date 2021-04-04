import React, { useEffect, useState } from 'react';

import CardItem from '../CardItem';
import '../../App.css';

import Footer from '../Footer';
import { getAll, onChunks } from "../services/pillowHandlers";
import fullPath from '../services/pathSolver';

export default function Products({ match }) {
  const [pillows, setPillows] = useState([]);
  useEffect(() => {
    getAll().then(res => {
      setPillows(onChunks(res, 4));
    })
  }, [])

  console.log()

  return (
    <>
      <h1>Products  </h1>
      
      <div className='cards'>
        <div className='cards__container'>
          <div className='cards__wrapper'>

            {
              pillows.map(set => {

                let el = set.map(([id, all]) => {
                  return (
                    <CardItem
                      key={id}
                      src={all.src}
                      text={all.text}
                      label={"BGN " + all.label}
                      description={all.description}
                      path={fullPath(`pillows/${id}`)}
                    />)
                })

                return (
                  <ul className="cards__items">
                    {el}
                  </ul>
                )
              })
            }

            {/* 
            <ul className='cards__items'>
              {pillows.map(([id, all]) => {
                return (
                  <CardItem
                    key={id}
                    src={all.src}
                    text={all.text}
                    label={"BGN " + all.label}
                    description={all.description}
                    path={fullPath(`pillows/${id}`)}
                  />
                )
              })}

            </ul>
            <ul className='cards__items'>
              {pillows.map(([id, all]) => {
                return (
                  <CardItem
                    key={id}
                    src={all.src}
                    text={all.text}
                    label={"BGN " + all.label}
                    description={all.description}
                    path={fullPath(`pillows/${id}`)}
                  />
                )
              })}

            </ul> */}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>

  )
}
