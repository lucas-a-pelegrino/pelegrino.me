import React from 'react';
import styled from 'styled-components';

import GlobalStyle from '../GlobalStyles';
import AppWindow from '../presentation/AppWindow';

const Content = styled.div`
  display: flex;
  height: 100vh;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Content>
      <GlobalStyle />
      <AppWindow />
    </Content>
  );
};

export default App;
