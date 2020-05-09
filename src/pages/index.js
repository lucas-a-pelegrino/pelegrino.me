import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { WindowFrame, TopBar } from '../components/core';

import BackgroundImageUrl from '../assets/images/night-road.jpg';

const BackgroundImage = createGlobalStyle`
  body {
    background-image: url(${BackgroundImageUrl});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Home() {
  return (
    <React.Fragment>
      <Content>
        <TopBar />
        <WindowFrame />
      </Content>
      <BackgroundImage />
    </React.Fragment>
  );
}
