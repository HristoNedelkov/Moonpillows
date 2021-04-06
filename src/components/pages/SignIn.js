import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { login } from '../services/authServices'
import fullPath from '../services/pathSolver'

function SignIn() {
    let history = useHistory();
    function loginHandler(e) {
        e.preventDefault()
        let username = e.target.email.value
        let pass = e.target.password.value
        login(username, pass)
            .then(userCredentials => {
                console.log(userCredentials)
                history.push(fullPath(''))
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

                    <button type="submit">Sign-up</button>
                    <Link className="login-link" to={fullPath('sign-up')}>New here? <span>REGISTER NOW.</span>  </Link>
                </div>

            </form>

            <p>Password must be six or more characters!</p>

        </div>
    )
}

export default SignIn
