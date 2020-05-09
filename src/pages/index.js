import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { WindowFrame } from '../components';

import BackgroundImageUrl from '../assets/images/night-road.jpg';

const BackgroundImage = createGlobalStyle`
  body {
    background-image: url(${BackgroundImageUrl});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export default function Home() {
  return (
    <React.Fragment>
      <WindowFrame />
      <BackgroundImage />
    </React.Fragment>
  );
}
