import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../GlobalStyles';
import AppWindow from '../presentation/AppWindow';
import { AboutMe } from '../components';
import { SEO } from '../components/core';

const Content = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const App = ({ location }) => {
  return (
    <Content>
      <SEO title="About" />
      <GlobalStyle />
      <AppWindow location={location}>
        <AboutMe />
      </AppWindow>
    </Content>
  );
};

export default App;
