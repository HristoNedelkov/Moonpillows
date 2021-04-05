import React, { useState } from 'react'
import './About.css'

function About() {
    const [isShown1, setIsShown1] = useState(false)
    const [isShown2, setIsShown2] = useState(false)
    const [isShown3, setIsShown3] = useState(false)
    function onBtnClick(e) {

        if (e.target.name === '2')
            setIsShown2(r => !r);

        if (e.target.name === '1') {
            setIsShown1(r => !r);
        }

        if (e.target.name === '3') {
            setIsShown3(r => !r);
        }
    }
    return (
        <div className="about-page">
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some information about our company.</p>

            </div>

            <h1 >Our Team</h1>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src="https://thispersondoesnotexist.com/image" alt="Icko" />
                        <div className="container">
                            <h2>Hristo Nedelkov</h2>
                            <p className="title">Founder</p>
                            <p>I am ambitious lad who is resonsible for all the work in the company and I do my best to succeed!</p>
                            <p><button onClick={onBtnClick} name="1" className="button">{isShown1 ? 'hristo.nedelkov@gmail.com' : 'Contact'}</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="https://thispersondoesnotexist.com/image" alt="Mike" />
                        <div className="container">
                            <h2>Marin Stoyanov</h2>
                            <p className="title">Co-Founder</p>
                            <p>I help the founder when he needs me.We work together and we are a great team!</p>
                            <p><button className="button" name="2" onClick={onBtnClick}>{isShown2 ? 'marin.stoyanov@gmail.com' : 'Contact'}</button></p>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src="https://thispersondoesnotexist.com/image" alt="John" />
                        <div className="container">
                            <h2>Lubomira Popcheva</h2>
                            <p className="title">Designer</p>
                            <p>My specialty is about the design for our products.I am able to do everything appealing! </p>
                            <p><button onClick={onBtnClick} name="3" className="button">{isShown3 ? 'lubomira.popcheva@gamil.com' : 'Contact'}</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
