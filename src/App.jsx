import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import PageLoading from 'components/PageLoading';

import Main from 'routes/Main';

import AuthProvider from 'contexts/AuthProvider';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Suspense fallback={(<PageLoading />)}>
        <Main />
      </Suspense>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
