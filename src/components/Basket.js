import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import ThingsContext from '../context/userContexxt'

import './Basket.css'
import BasketItem from './BasketItem'
import { getAllForUser } from './services/pillowHandlers'

function Basket(props) {
    const context = useContext(ThingsContext);
    const [pillows, setPillows] = useState([])
    const [sum, setSum] = useState(0);
    useEffect(() => {
        if (context?.uid) {
            getAllForUser(context.uid)
                .then(res => {
                    setPillows(res)
                    console.log(res)
                })

        } else {
            console.log('not logged in!')
        }

    }, [])
    return (
        <div className="shopping-cart">
            <div className="title">
                Shopping Bag
            </div>
            {!pillows.length ? <h1 style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'Train One' }} >No products in the cart</h1> : (
                pillows.map(([id, all]) => {
                    return (
                        <BasketItem
                            key={id}
                            pillowId={id}
                            title={all.text}
                            price={all.price}
                            src={all.src} ></BasketItem >


                    )
                })
            )}


            <div className="sumup item">
                <h1>At Chekout: <span>{sum} BGN</span></h1>
            </div>

        </div >
    )

}

export default Basket
