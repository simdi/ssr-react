import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Home from './pages/HomePage';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" render={props => (<Home {...props} />)} />
        </Switch>
      </div>
    )
  }
}

export default App;