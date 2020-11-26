import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const LazyDashboard = lazy(() => import('views/Dashboard'));

const Protected = () => (
  <Suspense fallback={<h1>Loading Protected</h1>}>
    <Switch>
      <Route path="/" component={LazyDashboard} />
    </Switch>
  </Suspense>
);

export default Protected;
