import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddShow from '../views/AddShow';
import OtherApi from '../views/OtherApi';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={AddShow} />
        <Route
          path='/other-api' component={OtherApi}/>
        </Switch>
    </div>
  );
}
