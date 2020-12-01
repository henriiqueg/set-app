import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import PageLoading from 'components/PageLoading';

const LazyDashboard = lazy(() => import('views/Dashboard'));
// const LazyModules = lazy(() => import('views/Modules'));

const Protected = () => (
  <Suspense fallback={(<PageLoading />)}>
    <Switch>
      <Route path="/" exact component={LazyDashboard} />
      {/* <Route path="/modules" exact component={LazyModules} /> */}
    </Switch>
  </Suspense>
);

export default Protected;
