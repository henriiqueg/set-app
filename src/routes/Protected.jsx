import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import PageLoading from 'components/PageLoading';

const LazyDashboard = lazy(() => import('views/Dashboard'));

const Protected = () => (
  <Suspense fallback={(<PageLoading />)}>
    <Switch>
      <Route path="/" component={LazyDashboard} />
    </Switch>
  </Suspense>
);

export default Protected;
