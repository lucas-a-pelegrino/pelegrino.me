import React from 'react';
import styled from 'styled-components';

import { Item } from './core';

import htmlIcon from '../assets/images/icons/html-icon.svg';

const Container = styled.div`
  display: flex;
  width: 524px;
  height: 20px;
`;

const ItemStyled = styled(Item)`
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
      <ItemStyled file={file} active={true} />
    </Container>
  );
};

export default TabBar;
