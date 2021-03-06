import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from 'styles/GlobalStyle';
import App from './App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>,
  document.getElementById('root'),
);
