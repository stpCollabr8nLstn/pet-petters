import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/cat-dog-logo.jpg';

const Navbar = () => (
  <nav className="ppp--navbar" role="navigation">
    <ol>
      <li className="ppp--brand" role="banner">
        <Link to='/' className="ppp--brand__link">
          <img className="ppp--logo" src={logo} alt="line drawing of cat and dog"/>
          <header className="ppp--header">
            Professional Pet Petters
          </header>
        </Link>
      </li>
      <li className="ppp--menu-item"><Link to='/roster'>Roster</Link></li>
      <li className="ppp--menu-item"><Link to='/player'>Players</Link></li>
      <li className="ppp--menu-item"><Link to='/login'>Log In</Link></li>
      <li className="ppp--menu-item"><Link to='/register'>Register</Link></li>
      <li className="ppp--menu__mobile"><span></span></li>
    </ol>
  </nav>
);

export default Navbar
