import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import PageLoading from 'components/PageLoading';
import Header from 'components/Header';

const LazyDashboard = lazy(() => import('views/Dashboard'));
const LazyModules = lazy(() => import('views/Modules'));
const LazyLessons = lazy(() => import('views/Lessons'));

const Protected = () => (
  <Suspense fallback={(<PageLoading />)}>

    <Header />

    <Switch>
      <Route path="/" exact component={LazyDashboard} />
      <Route path="/modules" exact component={LazyModules} />
      <Route path="/lessons" exact component={LazyLessons} />
    </Switch>
  </Suspense>
);

export default Protected;
