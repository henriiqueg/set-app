import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // Font
  
  // Reset
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: black;
  }

  body, button {
    font-family: sans-serif;
  }

  #root {
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
