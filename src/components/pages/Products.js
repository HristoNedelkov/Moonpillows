import React, { useEffect, useState } from 'react';

import CardItem from '../CardItem';
import '../../App.css';

import Footer from '../Footer';
import { getAll } from "../services/pillowHandlers";

export default function Products({ match }) {
  const [pillows, setPillows] = useState([]);
  getAll().then(res=> {
    setPillows(res);

  })
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
                    path={"pillows/" + id}
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
