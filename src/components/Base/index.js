import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import Navbar from '../Navbar';
import HomePage from '../HomePage';
import Player from '../Player';
import Roster from '../Roster';
import Register from '../Register';

const Base = () => (
  <div>
    <Navbar />
    <main className="ppp--main" role="main">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/roster" component={Roster} />
        <Route path="/player" component={Player} />
      </Switch>
    </main>
    <footer className="ppp--footer" role="contentinfo">
      Professional Pet Petters Ⓒ 2018
    </footer>
  </div>
);

export default Base;
