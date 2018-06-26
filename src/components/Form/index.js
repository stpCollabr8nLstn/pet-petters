import React from 'react';

const Form = (props) => (

  <fieldset className="ppp--form-field">
    <legend><h2>{props.register ? "Register" : "Log In"}</h2></legend>

    {props.register && (
      <div className="ppp--form-field__register">
        <label htmlFor="username">Username</label>
        <input className="ppp--text-input" name="username" type="text" placeholder="choose a username" required />
      </div>
    )}

    <label htmlFor="email">Email Address</label>
    <input className="ppp--text-input" type="email" name="email" placeholder="enter your email" required />

    <label htmlFor="password">Password</label>
    <input className="ppp--text-input" type="password" name="password" placeholder="enter your password" required />

    {props.register && (
      <div className="ppp--form-field__register">
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <input className="ppp--text-input" type="password" name="passwordConfirm" placeholder="confirm your password" required />
      </div>
    )}

    <button className="ppp--button">{props.register ? "Register" : "Log In"}</button>
    {props.register && (<p>Already have an account? <a href='/login'>Log in.</a></p>)}
  </fieldset>
)

export default Form
