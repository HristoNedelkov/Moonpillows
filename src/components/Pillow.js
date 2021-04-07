import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThingsContext from '../context/userContexxt'

import './Pillow.css'
import fullPath from './services/pathSolver'
import { getOne } from './services/pillowHandlers'

function Pillow({ props }) {
    let context = useContext(ThingsContext)
    const [pillow, setPillow] = useState([])
    useEffect(() => {
        window.scrollTo({
            top: 100,
            left: 0,
            behavior: 'smooth'
        });
        let id = props.match.params.id
        getOne(id).then(res => {
            setPillow(res)
            console.log(res)
        })
    }, [])

    return (
        <div className="pillow-page">
            <main className="container">
                <div className="left-column">
                    <img className="active" src={pillow.src} alt="" />
                </div>
                <div className="right-column">
                    <div className="product-description">
                        <span>Pillows</span>
                        <h1>{pillow.text}</h1>
                        <p>{pillow.description}</p>
                    </div>
                    <div className="product-configuration">
                        <div className="cable-config">
                            <span>Size</span>

                            <div className="cable-choose">
                                <button>S</button>
                                <button>M</button>
                                <button>L</button>
                            </div>

                        </div>
                    </div>
                    <div className="product-price">
                        <span>{pillow.label} BGN</span>
                        <Link to={context ? fullPath(`basket/${props.match.params.id}`) : fullPath('sign-up')} className="cart-btn">Add to cart</Link>
                    </div>
                </div>
            </main>

        </div >
    )
}

export default Pillow
