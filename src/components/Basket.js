import React from 'react'

import './Basket.css'
import BasketItem from './BasketItem'
function Basket(props) {

    return (
        <div className="shopping-cart">
            <div className="title">
                Shopping Bag
            </div>
            <BasketItem></BasketItem>
        </div>
    )

}

export default Basket
