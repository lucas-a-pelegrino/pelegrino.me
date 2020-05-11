import React from 'react';
import styled from 'styled-components';

import { Item } from './core';

import htmlIcon from '../assets/images/icons/html-icon.svg';

const TabBarStyled = styled.div`
  display: flex;
  width: 524px;
  height: 20px;
`;

const ItemStyled = styled(Item)`
  width: 100px;
`;

export default function TabBar() {
  const file = {
    name: 'about.html',
    icon: htmlIcon,
  };

  return (
    <TabBarStyled>
      <ItemStyled file={file} height="20px" width="100px" active={true} />
    </TabBarStyled>
  );
}
