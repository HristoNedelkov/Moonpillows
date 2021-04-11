import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../services/authServices'
import fP from '../services/pathSolver'

function SignIn() {
    let history = useHistory();
    const [error, setError] = useState('')
    function loginHandler(e) {
        e.preventDefault()
        let username = e.target.email.value
        let pass = e.target.password.value
        login(username, pass)
            .then(userCredentials => {
                console.log(userCredentials)
                history.push(fP(''))
            })
            .catch(e => {
                setError(e.message)
                setTimeout((() => {
                    setError('')
                }), 3000)
            })
    }
    return (
        <div id="sign-up">

            <h3>Sign in</h3>

            <form onSubmit={loginHandler}>

                <div className="form__field">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" className="form__input" placeholder="email" required />
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form__input" pattern=".{6,}" name="password" placeholder="password" required />
                    <span className="icon"></span>

                    <button type="submit">Sign-in</button>
                    <Link className="login-link" to={fP('sign-up')}>New here? <span>REGISTER NOW.</span>  </Link>
                    {error ? <p className="error">{error}</p> : ''}
                </div>

            </form>

            <p>Password must be six or more characters!</p>

        </div>
    )
}

export default SignIn
