import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/cat-dog-logo.jpg';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      loggedIn: localStorage.getItem('jwt') || null,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.logout = this.logout.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open,
    });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.setState({
      loggedIn: false,
      open: false,
    });
  }

  render() {
    const { loggedIn, open } = this.state;
    return (
      <nav className="ppp--navbar">
        <ol>
          <li className="ppp--brand" role="banner">
            <Link to="/" className="ppp--brand__link">
              <img
                className="ppp--logo"
                src={logo}
                alt="line drawing of cat and dog"
              />
              <header className="ppp--header">Professional Pet Petters</header>
            </Link>
          </li>
          {!loggedIn && (
            <div className="ppp--menu__items">
              <li className="ppp--menu-item">
                <Link to="/login">Login</Link>
              </li>
              <li className="ppp--menu-item">
                <Link to="/register">Register</Link>
              </li>
            </div>
          )}
          {loggedIn && (
            <div className="ppp--menu__items">
              <li className="ppp--menu-item">
                <Link to="/roster">Roster</Link>
              </li>
              <li className="ppp--menu-item">
                <Link to="/player/new">Add Players</Link>
              </li>
              <li className="ppp--menu-item">
                <Link to="/" onClick={this.logout}>Log Out</Link>
              </li>
            </div>
          )}

          {/* Mobile Menu */}
          <li className="ppp--menu__mobile" onClick={this.toggleMenu}> {/* eslint-disable-line*/}
            <span />
          </li>
          {open && (
            <ol className="ppp--menu__mobile-open">
              {loggedIn && (
                <div>
                  <li className="ppp--menu-item__mobile">
                    <Link to="/roster" onClick={this.toggleMenu}>Roster</Link>
                  </li>
                  <li className="ppp--menu-item__mobile">
                    <Link to="/player/new" onClick={this.toggleMenu}>Add Player</Link>
                  </li>
                  <li className="ppp--menu-item__mobile">
                    <Link to="/" onClick={this.logout}>Log Out</Link>
                  </li>
                </div>
              )}
              {!loggedIn && (
                <div>
                  <li className="ppp--menu-item__mobile">
                    <Link to="/login" onClick={this.toggleMenu}>Log In</Link>
                  </li>
                  <li className="ppp--menu-item__mobile">
                    <Link to="/register" onClick={this.toggleMenu}>Register</Link>
                  </li>
                </div>
              )}
            </ol>
          )}
        </ol>
      </nav>
    );
  }
}
