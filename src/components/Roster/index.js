import React, { Component } from 'react';

export default class Roster extends Component {
  render() {
    return (
      <div className="ppp--roster">
        <div className="ppp--roster__header">
          <div>
            <h2>Player Name</h2>
          </div>
          <div>
            <h2>Rating</h2>
          </div>
        </div>
        <div className="ppp--roster__row">
          <div className="ppp--roster__data">Adriana Rios</div>
          <div className="ppp--roster__data">2</div>
        </div>
        <div className="ppp--roster__row">
          <div className="ppp--roster__data">Jason Flinn</div>
          <div className="ppp--roster__data">14</div>
        </div>
        <div className="ppp--roster__row">
          <div className="ppp--roster__data">Katie Sweaney</div>
          <div className="ppp--roster__data">56</div>
        </div>
        <div className="ppp--roster__row">
          <div className="ppp--roster__data">Josh Galindo</div>
          <div className="ppp--roster__data">109</div>
        </div>
      </div>
    );
  }
}
