import React, { useEffect, useState } from 'react';
import firebase from '../../firebase'

import CardItem from '../CardItem';
import '../../App.css';
//import Main from '../Main.js'
import Footer from '../Footer';

export default function Products({match}) {
  const [pillows, setPillows] = useState([]);

  useEffect(() => {
    let productsListRef = firebase.database().ref('pillows')
    productsListRef.on('value', (snapshot) => {
      const data = snapshot.val();
      setPillows(Object.entries(data));
    });

  },[])
  return (
    <>
      <div className="products">
        <div className='cards'>
          <h1 id="products-title">Products</h1>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              {pillows.map(el => {
                return (
                  <CardItem
                    key={el[0]}
                    src={el[1].src}
                    text={el[1].text}
                    label={"BGN " + el[1].label}
                    description={el[1].description}
                    path={"pillows/" + el[0]}
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
