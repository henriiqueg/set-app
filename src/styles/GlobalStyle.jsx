import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  // Font
  @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&family=Raleway:wght@600&display=swap');

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
    font-family: 'Nunito Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
  }

  #root {
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
