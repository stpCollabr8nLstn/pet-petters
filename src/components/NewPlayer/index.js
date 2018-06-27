import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

export default class NewPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      rating: 0,
      handedness: 'right',
      jwt: localStorage.getItem('jwt'),
      toRoster: false,
      msg: null,
    };

    this.validateRating = this.validateRating.bind(this);
    this.validateFirst = this.validateFirst.bind(this);
    this.validateLast = this.validateLast.bind(this);
    this.validateHandedness = this.validateHandedness.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer() {
    fetch('https://players-api.developer.alchemy.codes/api/players', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.state.jwt}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: this.state.first,
        last_name: this.state.last,
        rating: this.state.rating,
        handedness: this.state.handedness,
      }),
    })
      .then(res => res.json())
      .then(() => {
        this.setState({ toRoster: true });
      });
  }

  validateFirst(e) {
    const valid = /^\w+$/;
    if (e.target.value.match(valid)) {
      this.setState({
        first: e.target.value,
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
        last: e.target.value,
        msg: null,
      });
    } else {
      this.setState({
        valid: false,
        msg: '⚠ Oops! Your last name can only contain letters.',
      });
    }
  }

  validateRating(e) {
    const valid = /[0-9]/;
    if (e.target.value.match(valid)) {
      this.setState({
        rating: e.target.value,
        msg: null,
        valid: true,
      });
    } else {
      this.setState({
        valid: false,
        msg: '⚠ Oops! Rating needs to be a number.',
      });
    }
  }

  validateHandedness(e) {
    this.setState({
      handedness: e.target.value,
      msg: null,
    });
  }

  render() {
    if (this.state.toRoster === true) {
      return <Redirect to="/roster" />;
    }
    return (
      <fieldset className="ppp--form-field">
        <legend>
          <h2>Add New Player</h2>
        </legend>

        <label htmlFor="first_name">
          First Name
          <input
            id="firstName"
            className="ppp--text-input"
            name="first_name"
            type="text"
            placeholder="player first name"
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
            placeholder="player last name"
            onKeyUp={this.validateLast}
            required
          />
        </label>

        <label htmlFor="rating">
          Rating
          <input
            id="rating"
            className="ppp--text-input"
            type="number"
            name="rating"
            placeholder="enter player rating"
            onKeyUp={this.validateRating}
            required
          />
        </label>

        <label htmlFor="handedness">
          Handedness
          <select
            id="handedness"
            className="ppp--text-input"
            onChange={this.validateHandedness}
            type="text"
            name="handedness"
            required
          >
            <option value="right">Right</option>
            <option value="left">Left</option>
          </select>
        </label>

        {this.state.msg && <p className="ppp--error">{this.state.msg}</p>}

        <div className="ppp--button-row">
          <button
            id="create"
            className="ppp--button"
            disabled={!this.state.valid}
            onClick={this.addPlayer}
          >
            Add player
          </button>
          <Link to="/roster" className="ppp--button__secondary">Cancel</Link>
        </div>

      </fieldset>
    );
  }
}
