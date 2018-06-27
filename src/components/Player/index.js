import React, { Component } from 'react';
import HomePage from '../HomePage';

export default class Player extends Component {
  render() {
    return (
      <div className="ppp--player">
        <HomePage />
        <fieldset className="ppp--form-field">
          <legend>
            <h2>Add Player</h2>
          </legend>

          <label htmlFor="playerName">Player Name</label>
          <input
            className="ppp--text-input"
            type="text"
            name="playerName"
            placeholder="enter player's name"
            required
          />

          <label htmlFor="rating">Rating</label>
          <input
            className="ppp--text-input"
            type="number"
            name="rating"
            placeholder="enter rating"
            required
          />

          <button className="ppp--button">Add</button>
        </fieldset>
      </div>
    );
  }
}
