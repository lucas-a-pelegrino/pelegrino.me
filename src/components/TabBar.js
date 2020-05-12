import React from 'react';
import styled from 'styled-components';

import { Item } from './core';

import htmlIcon from '../assets/images/icons/html-icon.svg';

const Container = styled.div`
  display: flex;
  width: 524px;
  height: 20px;
`;

const TabBarItem = styled(Item)`
  height: 20px;
  width: 100px;
`;

const TabBar = () => {
  const file = {
    name: 'about.html',
    icon: htmlIcon,
  };

  return (
    <Container>
      <TabBarItem file={file} active={true} styles={{ height: '20px', width: '100px' }} />
    </Container>
  );
};

export default TabBar;
