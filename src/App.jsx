import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from 'styles/GlobalStyle';

import Main from 'routes/Main';

import AuthProvider from 'contexts/AuthProvider';

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Suspense fallback={(<h1>Carregando</h1>)}>
        <GlobalStyle />
        <Main />
      </Suspense>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
