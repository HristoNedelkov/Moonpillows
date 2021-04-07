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
            {pillows.map(([id, all]) => {
                return (
                    <BasketItem title={all.text}
                        price={all.price}
                        src={all.src} ></BasketItem >


                )
            })}
        </div >
    )

}

export default Basket
