import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

const LazyLogin = lazy(() => import('views/Login'));

const Main = () => (
  <Switch>
    <Route path="/" exact component={LazyLogin} />
  </Switch>
);

export default Main;
