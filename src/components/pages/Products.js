import React, { useEffect, useState } from 'react';

import CardItem from '../CardItem';
import '../../App.css';

import Footer from '../Footer';
import { getAll } from "../services/pillowHandlers";
import fullPath from '../services/pathSolver';

export default function Products({ match }) {
  const [pillows, setPillows] = useState([]);
  useEffect(() => {

    getAll().then(res => {
      setPillows(res);
    })

  }, [pillows])

  return (
    <>
      <div className="products">
        
        <div className='cards'>
          <h1 id="products-title">Products</h1>
          <div className='cards__wrapper'>
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
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>

  )
}
