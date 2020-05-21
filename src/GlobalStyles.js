import { createGlobalStyle } from 'styled-components';

import BackgroundImageUrl from './assets/images/night-road.jpg';

export default createGlobalStyle`
  #gatsby-focus-wrapper,
  html,
  body {
    background-image: url(${BackgroundImageUrl});
    background-size: cover;
    background-repeat: no-repeat;
    
    height: 100vh;
    width: 100vw;
    margin: 0px auto;

    font-family: Menlo;
    font-size: 11px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #eceff4;
  }
`;
