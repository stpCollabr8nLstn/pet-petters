import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Navbar from '../Navbar';
import HomePage from '../HomePage';
import Player from '../Player';
import Roster from '../Roster';
import Register from '../Register';

export default class Base extends Component {
  render(){
    return(
      <div>
        <Navbar />
        <main className="ppp--main" role="main">
          <Switch>
            <Route path='/' exact component={HomePage}/>
            <Route path='/login' render={props => <Login  />} />
            <Route path='/register' render={props => <Register />} />
            <Route path='/roster' component={Roster}/>
            <Route path='/player' component={Player}/>
          </Switch>
        </main>
        <footer className="ppp--footer" role="contentinfo">
          Professional Pet Petters Ⓒ 2018
        </footer>
      </div>
    )
  }
}
