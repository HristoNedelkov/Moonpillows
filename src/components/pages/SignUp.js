import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../services/authServices';
import fullPath from '../services/pathSolver';

import './SignUp.css';

export default function SignUp() {
  let history = useHistory();
  const [error, setError] = useState('')
  function registerHandler(e) {
    e.preventDefault()
    let [username, password, rePass] = Array.from(e.target.querySelectorAll('input')).map(el => el.value)
    if (password === rePass) {

      register(username, password)
        .then(() => {
          history.push(fullPath(''))
        }).catch(e=> {
          setError(e )
          setTimeout((() => {
            setError('')
          }), 3000)
        })
    } else {
      setError('passwords missmatch!')
      setTimeout((() => {
        setError('')
      }), 3000)
    }
  }
  return (
    <div id="sign-up">

      <h3>Sign Up</h3>

      <form onSubmit={registerHandler}>

        <div className="form__field">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" className="form__input" placeholder="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" className="form__input" pattern=".{6,}" name="password" placeholder="password" required />
          <label htmlFor="re-password">Repeat password:</label>
          <input type="password" className="form__input" name="re-password" pattern=".{6,}" placeholder="re-password" required />
          <span className="icon"></span>

          <button type="submit">Sign-up</button>
          {error ? <p style={{ color: "red", fontSize: '24px', fontFamily: 'Train One' }}>{error}</p> : ''}
          <Link className="login-link" to={fullPath('sign-in')}>Already a member? <span>LOGIN NOW.</span>  </Link>
        </div>

      </form>

      <p>Password must be six or more characters!</p>

    </div>

  )
}
