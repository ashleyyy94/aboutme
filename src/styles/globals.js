import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {width: 100%; height: 100%; margin: 0; padding: 0}
  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: ${props => props.theme.fonts.main};
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;
  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  .nftContainer {
    display: flex; width: 100%; flex-direction: column; overflow: hidden;
    height: calc(100vh - 96px);
  }
  .nftIframe {
    display: flex;
    border: none; 
    margin: 0; 
    padding: 0;
    flex: 1 ;
  }
`;

export default GlobalStyles;