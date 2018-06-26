import React from 'react';

const Form = (props) => (

  <fieldset className="ppp--form-field">
    <legend><h2>{props.register ? "Register" : "Log In"}</h2></legend>

    {props.register && (
      <div className="ppp--form-field__register">
        <label htmlFor="first_name">First Name</label>
        <input className="ppp--text-input" name="first_name" type="text" placeholder="your first name" required />

        <label htmlFor="last_name">Last Name</label>
        <input className="ppp--text-input" name="last_name" type="text" placeholder="your last name" required />
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
