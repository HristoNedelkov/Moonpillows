import React from 'react'

function BasketItem() {
    return (
        <div className="item">
            <div className="buttons">
                <span className="delete-btn"> <img src="https://firebasestorage.googleapis.com/v0/b/moonpillows-676c2.appspot.com/o/images%2Fdelete-icn.svg?alt=media&token=564b91cb-c1d8-4438-8e71-2199f28bbc15" alt="" /></span>
                <span className="like-btn"></span>
            </div>

            <div className="image">
                <img src="https://firebasestorage.googleapis.com/v0/b/moonpillows-676c2.appspot.com/o/images%2Fitem-1.png?alt=media&token=f73f26c7-7a91-4887-8d96-9ae46fd6d8cd" alt="" />
            </div>

            <div className="description">
                <span>Common Projects</span>
                <span>Bball High</span>
                <span>White</span>
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

            <div className="total-price">$549</div>
        </div>
    )
}

export default BasketItem
