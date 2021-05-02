import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import AddShow from '../views/AddShow';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/watched' />
        <Route
          path='/add-show'
          component={AddShow} />
      </Switch>
    </div>
  );
}
