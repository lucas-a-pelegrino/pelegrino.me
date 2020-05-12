import { createGlobalStyle } from 'styled-components';

import BackgroundImageUrl from './assets/images/night-road.jpg';

export default createGlobalStyle`
  html,
  body {
    background-image: url(${BackgroundImageUrl});
    background-size: cover;
    background-repeat: no-repeat;

    margin: 0;
  }
`;
