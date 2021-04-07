import React from 'react'
import Footer from '../Footer'
import Pillow from '../Pillow'

function PillowPage(props) {
    return (
        <>
            <Pillow props={props}></Pillow>
            <Footer></Footer>
        </>
    )
}

export default PillowPage
