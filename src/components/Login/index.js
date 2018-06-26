import React, { Component } from 'react';
import Form from '../Form';
import HomePage from '../HomePage';

export default class Login extends Component {
  render() {
    return (
      <div className="ppp--login">
        <HomePage />
        <Form register />
      </div>
    )
  }
}
