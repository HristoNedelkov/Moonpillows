import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import ThingsContext from '../context/userContexxt'

import './Basket.css'
import BasketItem from './BasketItem'
import { deleteFromBasket, getAllForUser, getPrice } from './services/pillowHandlers'

function Basket() {
    const context = useContext(ThingsContext);
    const [pillows, setPillows] = useState([])
    const [isDeleted, setIsDeleted] = useState(false)
    const [sum, setSum] = useState(0);
    function deleteHandler(e) {
        e.preventDefault()
        deleteFromBasket(e.target.name, context.uid)
            .then(res => {
                console.log('Must be deleted!')
                //history.push(fP('products'))
                setIsDeleted(old => !old)
            })
    }
    useEffect(() => {
        if (context?.uid) {
            getAllForUser(context.uid)
                .then(res => {
                    setPillows(res)
                    setSum(getPrice(res))
                })

        } else {
            console.log('not logged in!')
        }

    }, [isDeleted])
    return (
        <div className="shopping-cart">
            <div className="title">
                Shopping Bag
            </div>
            {!pillows.length ? <h1 style={{ textAlign: 'center', marginTop: '30px', fontFamily: 'Train One' }} >No products in the cart</h1> : (
                pillows.map(([id, all]) => {
                    return (
                        <BasketItem
                            deleteHandlerFunc={deleteHandler}
                            key={id}
                            pillowId={id}
                            title={all.text}
                            price={all.label}
                            src={all.src} ></BasketItem >


                    )
                })
            )}
            <div className="sumup item">
                <h1>At Checkout: <span>{sum.toFixed(2)} BGN</span></h1>
            </div>

        </div >
    )

}

export default Basket
