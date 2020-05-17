import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../GlobalStyles';
import AppWindow from '../presentation/AppWindow';
import { AboutMe } from '../components';

const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const App = ({ location }) => {
  return (
    <Content>
      <GlobalStyle />
      <AppWindow location={location}>
        <AboutMe />
      </AppWindow>
    </Content>
  );
};

export default App;
