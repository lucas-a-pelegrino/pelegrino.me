import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../styles/global';
import MyCard from '../presentation/MyCard';
import { AboutMe } from '../components';
import { SEO } from '../components';

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
      <MyCard location={location}>
        <AboutMe />
      </MyCard>
    </Content>
  );
};

export default App;
