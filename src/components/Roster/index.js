import React, { Component } from 'react';

export default class Roster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      loading: true,
    };

    this.deletePlayer = this.deletePlayer.bind(this);
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers() {
    fetch('https://players-api.developer.alchemy.codes/api/players', {
      method: 'GET',
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    })
      .then(res => res.json())
      .then((body) => {
        this.setState({
          players: body.players,
          loading: false,
        });
      });
  }

  deletePlayer(e) {
    const { id } = e.target;
    const url = `https://players-api.developer.alchemy.codes/api/players/${id}`;
    fetch(url, {
      method: 'delete',
      headers: { Authorization: `Bearer ${localStorage.getItem('jwt')}` },
    })
      .then((res) => {
        if (res.ok) { this.getPlayers(); }
      });
  }

  render() {
    return (
      <div className="ppp--roster">
        <div className="ppp--roster__grid-heading">
          <h3>Player Name</h3>
          <h3>Rating</h3>
          <h3>Hand</h3>
          <h3>Delete</h3>
        </div>
        {this.state.loading && (
          <svg className="ppp--loading" width="200" height="200">
            <circle className="spinner" cx="95" cy="95" r="85" />
          </svg>
        )}
        {this.state.players.map(player => (
          <div className="ppp--roster__grid" key={player.id}>
            <div className="ppp--roster__data">
              {player.first_name} {player.last_name}
            </div>
            <div className="ppp--roster__data">{player.rating}</div>
            <div className="ppp--roster__data">{player.handedness}</div>
            <div className="ppp--roster__data">
              <button
                id="delete"
                className="ppp--delete"
                onClick={this.deletePlayer}
              >
                <svg id={player.id} className="ppp--delete__icon">
                  <path d="M1 11L11 1M1 1l10 10" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
