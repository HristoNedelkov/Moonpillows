import React from 'react'
import './Main.css'
function Main(props) {
    return (
        <div className="main">
            <h1>{props.children}</h1>
           
        </div>
    )
}

export default Main
