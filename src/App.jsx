import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { view } from '@risingstack/react-easy-state';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      <Switch>
        <Route path="/profile" component={Profile} />
      </Switch>
      <Switch>
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}

export default view(App);
