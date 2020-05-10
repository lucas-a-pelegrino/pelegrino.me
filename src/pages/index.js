import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { WindowCanvas, WindowBar, WindowFooter } from '../components';

import BackgroundImageUrl from '../assets/images/night-road.jpg';

const BackgroundImage = createGlobalStyle`
  body {
    background-image: url(${BackgroundImageUrl});
    background-size: cover;
    background-repeat: no-repeat;

    margin: 0;
  }
`;

const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const WindowContainer = styled.div`
  display: flex;
  width: 722px;
  height: 463px;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  border: solid 1px;
  border-radius: 5px;
  box-shadow: inset 0px 0px 0px 1px #808383;
`;

export default function App() {
  return (
    <Content>
      <WindowContainer>
        <WindowBar />
        <WindowCanvas />
        <WindowFooter />
      </WindowContainer>
      <BackgroundImage />
    </Content>
  );
}
