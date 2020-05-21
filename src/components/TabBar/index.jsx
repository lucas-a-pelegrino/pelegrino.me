import React from 'react';

import { Item } from '../core';

import { Container as TabBarContainer } from './styled';

import htmlIcon from '../../assets/images/icons/html-icon.svg';

const TabBar = () => {
  const file = {
    name: 'about.html',
    icon: htmlIcon,
  };

  return (
    <TabBarContainer>
      <Item file={file} key={file.name} height={20} width={25} active />
    </TabBarContainer>
  );
};

export default TabBar;
