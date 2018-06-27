import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../img/cat-dog-logo.jpg';

export default class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      loggedIn: localStorage.getItem('loggedin') || false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if(localStorage.getItem('loggedin') == true) {
      this.setState({ loggedIn: true });
    }
  }

  toggleMenu() {
    this.setState({
      open: ! this.state.open
    });
  }

  logout() {
    localStorage.removeItem('loggedin');
    this.setState({ loggedIn: false });
  }

  render() {
    const { loggedIn, open } = this.state;
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
          { !loggedIn && (
            <li className="ppp--menu-item"><Link to='/login'>Log In</Link></li>
          )}
          { !loggedIn && (
            <li className="ppp--menu-item"><Link to='/register'>Register</Link></li>
          )}
          { loggedIn && (
            <li className="ppp--menu-item" onClick={this.logout}><Link to='/'>Log Out</Link></li>
          )}

          {/* Mobile Menu */}
          <li className="ppp--menu__mobile" onClick={this.toggleMenu}><span></span></li>
          { open && (<ol className="ppp--menu__mobile-open">
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
