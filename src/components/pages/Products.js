import React, { useEffect } from 'react';
import firebase from '../../firebase'

import CardItem from '../CardItem';
import '../../App.css';
//import Main from '../Main.js'
import Footer from '../Footer';

export default function Products() {
  // let productsListRef = firebase.database.ref('')
  // useEffect(=> {

      
  // },[])
  return (
    <>
      <div className="products">
        <div className='cards'>
          <h1 id="products-title">Products</h1>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                src='images/img-9.jpg'
                text='Lorelli Възглавница за кърмене 190 см'
                label='BGN 25.99'
                path='/services' />
              <CardItem
                src='images/img-9.jpg'
                text='Lorelli Възглавница за кърмене 190 см'
                label='BGN 25.99'
                path='/services' />
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>

    </>

  )
}
