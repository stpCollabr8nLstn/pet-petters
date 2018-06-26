import React, { Component } from 'react';
import logo from '../../img/cat-dog-logo.jpg';
import Login from '../Login';

export default class Base extends Component {
  render(){
    return(
      <div>
        <nav className="ppp--navbar" role="navigation">
          <ol>
            <li className="ppp--brand" role="banner">
              <img className="ppp--logo" src={logo} alt="line drawing of cat and dog"/>
              <header className="ppp--header">
                Professional Pet Petters
              </header>
            </li>
            <li className="ppp--menu-item">Roster</li>
            <li className="ppp--menu-item">Players</li>
            <li className="ppp--menu-item">Log In</li>
            <li className="ppp--menu__mobile"><span></span></li>
          </ol>
        </nav>
        <main role="main">
            <Login />
        </main>
        <footer className="ppp--footer" role="contentinfo">
          Professional Pet Petters Ⓒ 2018
        </footer>
      </div>
    )
  }
}
