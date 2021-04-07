import React from 'react'

function Basket(props) {

    return (
        <div>
            <h1>Congrats</h1>
            <h2>You  {props.match.params.id ? 'purchased the pillow with this id: ' + props.match.params.id : 'entered the basket!'}</h2>

        </div>
    )

}

export default Basket
