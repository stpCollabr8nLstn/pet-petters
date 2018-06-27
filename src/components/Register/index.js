import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HomePage from '../HomePage';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      confirmedPassword: false,
      msg: null,
      valid: false,
      toRoster: false,
    };
    this.confirmPassword = this.confirmPassword.bind(this);
    this.validatePassword = this.validatePassword.bind(this);
    this.validateFirst = this.validateFirst.bind(this);
    this.validateLast = this.validateLast.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.register = this.register.bind(this);
  }

  validateFirst(e) {
    const valid = /^\w+$/;
    if (e.target.value.match(valid)) {
      this.setState({
        first_name: e.target.value,
        msg: null,
      });
    } else {
      this.setState({
        valid: false,
        msg: '⚠ Oops! Your first name can only contain letters.',
      });
    }
  }

  validateLast(e) {
    const valid = /^\w+$/;
    if (e.target.value.match(valid)) {
      this.setState({
        last_name: e.target.value,
        msg: null,
      });
    } else {
      this.setState({
        valid: false,
        msg: '⚠ Oops! Your last name can only contain letters.',
      });
    }
  }

  validateEmail(e) {
    const valid = /@/;
    if (e.target.value.match(valid)) {
      this.setState({
        email: e.target.value,
        msg: null,
      });
    } else {
      this.setState({
        valid: false,
        msg: '⚠ Oops! Your email isn&apos;t valid.',
      });
    }
  }

  validatePassword(e) {
    if (e.target.value) {
      this.setState({
        valid: true,
        password: e.target.value,
        msg: null,
      });
    } else {
      this.setState({
        valid: false,
        msg: '⚠ Oops! Your password has unsupported characters.',
      });
    }
  }

  confirmPassword(e) {
    if (this.state.password === e.target.value) {
      this.setState({
        confirmedPassword: true,
        msg: null,
      });
    } else {
      this.setState({
        confirmedPassword: false,
        msg: '⚠ Oops! Your password doesn&apos;t match.',
      });
    }
  }

  register() {
    fetch('https://players-api.developer.alchemy.codes/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        confirm_password: this.state.password,
      }),
    })
      .then(res => res.json())
      .then((body) => {
        window.location.reload();
        this.setState({ toRoster: true });
        localStorage.setItem('jwt', body.token);
      });
  }

  render() {
    if (this.state.toRoster === true) {
      return <Redirect to="/roster" />;
    }
    return (
      <div className="ppp--register">
        <HomePage />
        <fieldset className="ppp--form-field">
          <legend>
            <h2>Register</h2>
          </legend>

          <label htmlFor="first_name">
            First Name
            <input
              id="firstName"
              className="ppp--text-input"
              name="first_name"
              type="text"
              placeholder="your first name"
              onKeyUp={this.validateFirst}
              required
            />
          </label>

          <label htmlFor="last_name">
            Last Name
            <input
              id="lastName"
              className="ppp--text-input"
              name="last_name"
              type="text"
              placeholder="your last name"
              onKeyUp={this.validateLast}
              required
            />
          </label>

          <label htmlFor="email">
            Email Address
            <input
              id="email"
              className="ppp--text-input"
              type="email"
              name="email"
              placeholder="enter your email"
              onKeyUp={this.validateEmail}
              required
            />
          </label>

          <label htmlFor="password">
            Password
            <input
              id="password"
              className="ppp--text-input"
              onKeyUp={this.validatePassword}
              type="password"
              name="password"
              placeholder="enter your password"
              required
            />
          </label>

          <label htmlFor="passwordConfirm">
            Confirm Password
            <input
              id="confirmPassword"
              className="ppp--text-input"
              onKeyUp={this.confirmPassword}
              type="password"
              name="passwordConfirm"
              placeholder="confirm your password"
              required
            />
          </label>

          {this.state.msg && <p className="ppp--error">{this.state.msg}</p>}

          <button
            id="register"
            className="ppp--button"
            disabled={!this.state.confirmedPassword && !this.state.valid}
            onClick={this.register}
          >
            Register
          </button>
          <p>
            Already have an account? <a href="/login">Log in.</a>
          </p>
        </fieldset>
      </div>
    );
  }
}
