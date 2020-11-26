import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from 'contexts/AuthProvider';

const LazyLogin = lazy(() => import('views/Login'));
const LazyProtected = lazy(() => import('./Protected'));

const Main = () => {
  const { currentUser } = useAuth() || {};

  if (currentUser) {
    return (
      <Switch>
        <Route path="/login" exact render={() => <Redirect to="/" />} />
        <Route path="*" component={LazyProtected} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" component={LazyLogin} />
      <Route render={() => <Redirect to="/login" />} />
    </Switch>
  );
};

export default Main;
