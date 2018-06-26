import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/cat-dog-logo.jpg';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = { open: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
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

          {/* Mobile Menu */}
          <li className="ppp--menu__mobile" onClick={this.toggleMenu}><span></span></li>
          {this.state.open && (<ol className="ppp--menu__mobile-open">
            <li className="ppp--menu-item__mobile" onClick={this.toggleMenu}>
              <Link to='/roster'>Roster</Link>
            </li>
            <li className="ppp--menu-item__mobile" onClick={this.toggleMenu}>
              <Link to='/player'>Players</Link>
            </li>
            <li className="ppp--menu-item__mobile" onClick={this.toggleMenu}>
              <Link to='/login'>Log In</Link>
            </li>
            <li className="ppp--menu-item__mobile" onClick={this.toggleMenu}>
              <Link to='/register'>Register</Link>
            </li>
          </ol>)}
        </ol>
      </nav>
    )
  }
}
