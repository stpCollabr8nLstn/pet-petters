import React from 'react';
import logo from '../../img/cat-dog-logo.jpg';

const Navbar = () => (
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
);

export default Navbar
