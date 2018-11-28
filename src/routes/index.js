import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/home" exact component={Home} />
      <Route path="/home/2" exact render={() => <Home />} />
      <Route path="/home/2/1" exact render={props => <Home {...props} />} />
    </Switch>
  </BrowserRouter>
);
