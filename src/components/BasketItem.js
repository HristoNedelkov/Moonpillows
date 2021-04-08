import React from 'react'
import { useContext } from 'react'
import { useHistory } from 'react-router';
import ThingsContext from '../context/userContexxt'
import { deleteFromBasket } from './services/pillowHandlers'
import fullPath from './services/pathSolver'
import { Link } from 'react-router-dom';
//import './Basket.css'


function BasketItem({ title, price, src, pillowId }) {

    const context = useContext(ThingsContext);
    const history = useHistory();
    function deleteHandler(e) {
        e.preventDefault()
        deleteFromBasket(pillowId, context.uid)
            .then(res => {
                console.log('Must be deleted!')
                history.push(fullPath('products'))
            })

    }
    return (
        <Link to={fullPath('products/'+ pillowId)}>
            <div className="item">

                <div className="buttons">
                    <span className="delete-btn"> <img onClick={deleteHandler} src="https://firebasestorage.googleapis.com/v0/b/moonpillows-676c2.appspot.com/o/images%2Fdelete-icn.svg?alt=media&token=564b91cb-c1d8-4438-8e71-2199f28bbc15" alt="" /></span>
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
        </Link>
    )
}

export default BasketItem
