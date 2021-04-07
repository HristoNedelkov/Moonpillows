import React from 'react'
import './Basket.css'
function BasketItem({title,price,src}) {
    return (
        <div className="item">
            <div className="buttons">
                <span className="delete-btn"> <img src="https://firebasestorage.googleapis.com/v0/b/moonpillows-676c2.appspot.com/o/images%2Fdelete-icn.svg?alt=media&token=564b91cb-c1d8-4438-8e71-2199f28bbc15" alt="" /></span>
                <span className="like-btn"></span>
            </div>

            <div className="image">
                <img id="snimka" src={src} alt="" />
            </div>

            <div className="description">
                <span>{title}</span>
            </div>

            <div className="quantity">
                <button className="plus-btn" type="button" name="button">
                    <img src="https://firebasestorage.googleapis.com/v0/b/moonpillows-676c2.appspot.com/o/images%2Fplus.svg?alt=media&token=f9d36778-e4c9-4a9e-815b-272ca74c5819" alt="" />
                </button>
                <input type="text" name="name" value="1" />
                <button className="minus-btn" type="button" name="button">
                    <img src="https://firebasestorage.googleapis.com/v0/b/moonpillows-676c2.appspot.com/o/images%2Fminus.svg?alt=media&token=1c5449ad-08b2-4d2c-a24d-1b83197a09fc" alt="" />
                </button>
            </div>

            <div className="total-price">{price}</div>
        </div>
    )
}

export default BasketItem
