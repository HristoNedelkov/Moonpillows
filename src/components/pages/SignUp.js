import React from 'react';
import './SignUp.css';

export default function SignUp() {
  return (
    <div id="sign-up">
      <body className="align">

        <h3>Sign Up</h3>

        <form >

          <div className="form__field">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" className="form__input" placeholder="email" required />
            <label htmlFor="password">Password:</label>
            <input type="password" className="form__input" pattern=".{6,}" name="password" placeholder="password" required />
            <label htmlFor="re-password">Repeat password:</label>
            <input type="password" className="form__input" name="re-password" pattern=".{6,}" placeholder="repeat password"required />
            <span className="icon"></span>
          </div>

        </form>

        <p>Password must be six or more characters!</p>

      </body>
    </div>

  )
}
