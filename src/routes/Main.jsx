import React, { lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useAuth } from 'contexts/AuthProvider';

import PageLoading from 'components/PageLoading';

const LazyLogin = lazy(() => import('views/Login'));
const LazyProtected = lazy(() => import('./Protected'));

const Main = () => {
  const { authenticated } = useAuth() || {};

  if (authenticated === null) {
    return <PageLoading />;
  }

  if (authenticated === false) {
    return (
      <Switch>
        <Route path="/login" exact component={LazyLogin} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact render={() => <Redirect to="/" />} />
      <Route path="*" component={LazyProtected} />
    </Switch>
  );
};

export default Main;
