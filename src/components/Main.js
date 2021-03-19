import React from 'react';

import './Main.css'
function Main(props) {
    return (
        <div className="main">
            <h1>{props.children}</h1>
            <div className="img-zoom-container">
                <img id="myimage" src="/images/img-9.jpg" width="auto" height="360" />
                <div id="myresult" className="img-zoom-result"></div>
            </div>
        </div>
    )
}

export default Main
