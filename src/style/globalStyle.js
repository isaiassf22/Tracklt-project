import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }
`;
 
export default GlobalStyle;