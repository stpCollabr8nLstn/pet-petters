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
    this.setState({ loggedIn: false });
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
          <li className="ppp--menu-item">
            <Link to="/roster">Roster</Link>
          </li>
          <li className="ppp--menu-item">
            <Link to="/player">Players</Link>
          </li>
          {!loggedIn && (
            <li className="ppp--menu-item">
              <Link to="/login">Login</Link>
            </li>
          )}
          {!loggedIn && (
            <li className="ppp--menu-item">
              <Link to="/register">Register</Link>
            </li>
          )}
          {loggedIn && (
            <li className="ppp--menu-item">
              <Link to="/" onClick={this.logout}>Log Out</Link>
            </li>
          )}

          {/* Mobile Menu */}
          <li className="ppp--menu__mobile" onClick={this.toggleMenu}> {/* eslint-disable-line*/}
            <span />
          </li>
          {open && (
            <ol className="ppp--menu__mobile-open">
              <li className="ppp--menu-item__mobile">
                <Link to="/roster" onClick={this.toggleMenu}>Roster</Link>
              </li>
              <li className="ppp--menu-item__mobile">
                <Link to="/player" onClick={this.toggleMenu}>Players</Link>
              </li>
              <li className="ppp--menu-item__mobile">
                <Link to="/login" onClick={this.toggleMenu}>Log In</Link>
              </li>
              <li className="ppp--menu-item__mobile">
                <Link to="/register" onClick={this.toggleMenu}>Register</Link>
              </li>
            </ol>
          )}
        </ol>
      </nav>
    );
  }
}
