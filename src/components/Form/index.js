import React from 'react';

const Form = (props) => (

  <fieldset className="ppp--form-field">
    <legend><h2>{props.register ? "Register" : "Log In"}</h2></legend>
    <label>Email Address</label>
    <input className="ppp--text-input" type="email" placeholder="enter your email" required />
    <label>Password</label>
    <input className="ppp--text-input" type="password" placeholder="enter your password" required />
    <button className="ppp--button">{props.register ? "Register" : "Log In"}</button>
    {props.register && (<p>Already have an account? <a href='/login'>Log in.</a></p>)}
  </fieldset>
)

export default Form
