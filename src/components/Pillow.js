import React, { useState, useContext, useEffect, } from 'react'
import { useHistory } from 'react-router-dom'
import ThingsContext from '../context/userContexxt'
import ReactImageZoom from 'react-image-zoom';

import './Pillow.css'
import fP from './services/pathSolver'
import { getOne, addCreator } from './services/pillowHandlers'

function Pillow({ props }) {
    const history = useHistory();
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
    function clickHandler(e) {
        e.preventDefault()
        if (context!= null) {

            addCreator(props.match.params.id, context.uid)
                .then(res => {
                    console.log('mission accomplished!')
                    history.push(fP('basket'))
                })
        } else  {
            history.push(fP('sign-in'))
        }
    }
    return (
        <div className="pillow-page">
            <main className="container">
                <div className="zoomed">
                <ReactImageZoom 
                img={pillow.src + ''}
                width={500}
                height={375}
                zoomPosition="bottom"
                zoomWidth={400}
                />  
                    {/* <img className="active" src={pillow.src} alt="" /> */}
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
                        <button onClick={clickHandler}  className="cart-btn">Add to cart</button>
                    </div>
                </div>
            </main>
        </div >
    )
}
export default Pillow
