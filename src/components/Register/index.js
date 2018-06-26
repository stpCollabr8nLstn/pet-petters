import React, { Component } from 'react';
import HomePage from '../HomePage';

export default class Login extends Component {
  render() {
    return (
      <div className="ppp--login">
        <HomePage />
        <fieldset className="ppp--form-field">
          <legend><h2>Register</h2></legend>

          <label htmlFor="first_name">First Name</label>
          <input className="ppp--text-input" name="first_name" type="text" placeholder="your first name" required />

          <label htmlFor="last_name">Last Name</label>
          <input className="ppp--text-input" name="last_name" type="text" placeholder="your last name" required />

          <label htmlFor="email">Email Address</label>
          <input className="ppp--text-input" type="email" name="email" placeholder="enter your email" required />

          <label htmlFor="password">Password</label>
          <input className="ppp--text-input" type="password" name="password" placeholder="enter your password" required />

          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input className="ppp--text-input" type="password" name="passwordConfirm" placeholder="confirm your password" required />

          <button className="ppp--button">Register</button>
          <p>Already have an account? <a href='/login'>Log in.</a></p>
        </fieldset>

      </div>
    )
  }
}
