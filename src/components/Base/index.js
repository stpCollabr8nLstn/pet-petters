import React, { Component } from 'react';
import Login from '../Login';
import Navbar from '../Navbar';

export default class Base extends Component {
  render(){
    return(
      <div>
        <Navbar />
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
