import React, { Component } from 'react';
import HomePage from '../HomePage';

export default class Login extends Component {
  render() {
    return (
      <div className="ppp--login">
        <HomePage />
          <fieldset className="ppp--form-field">
            <legend><h2>Log in</h2></legend>

            <label htmlFor="email">Email Address</label>
            <input className="ppp--text-input" type="email" name="email" placeholder="enter your email" required />

            <label htmlFor="password">Password</label>
            <input className="ppp--text-input" type="password" name="password" placeholder="enter your password" required />

            <button className="ppp--button">Log in</button>
            <p>Don't have an account? <a href='/register'>Register.</a></p>
          </fieldset>
      </div>
    )
  }
}
