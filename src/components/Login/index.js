import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import HomePage from '../HomePage';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      msg: null,
      valid: false,
      toRoster: false,
    };
    this.validatePassword = this.validatePassword.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.login = this.login.bind(this);
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

  login() {
    fetch('https://players-api.developer.alchemy.codes/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
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
      <div className="ppp--login">
        <HomePage />
        <fieldset className="ppp--form-field">
          <legend>
            <h2>Log in</h2>
          </legend>

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
              type="password"
              name="password"
              placeholder="enter your password"
              onKeyUp={this.validatePassword}
              required
            />
          </label>

          {this.state.msg && <p className="ppp--error">{this.state.msg}</p>}

          <button
            id="login"
            className="ppp--button"
            onClick={this.login}
            disabled={!this.state.valid}
          >
            Log in
          </button>
          <p>
            Don&apos;t have an account? <a href="/register">Register.</a>
          </p>
        </fieldset>
      </div>
    );
  }
}
