import React, { Component } from 'react';
import Form from '../Form';

export default class Login extends Component {
  render() {
    return (
      <div className="ppp--login">
        <div className="ppp--about">
          <p>
            We're the leauge of Professional Pet Petters.
          </p>
          <p>Yup. You read that correctly. Ever see a pet walking down the street and think, <em>I want to pet that pet </em>? Well now you can. Join our league and compete against players worldwide to see who can pet the most pets.</p>
          <img className="ppp--about__img" alt="person's hand petting happy dog" src="https://barkpost.com/wp-content/uploads/2014/11/borrow-pup-feat.jpg?q=70&fit=crop&crop=entropy&w=808&h=500" />
        </div>
        <Form register />
      </div>
    )
  }
}
