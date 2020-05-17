import React from 'react';

import { Container, ItemStyled as Item } from './styled';

import htmlIcon from '../../assets/images/icons/html-icon.svg';

const TabBar = () => {
  const file = {
    name: 'about.html',
    icon: htmlIcon,
  };

  return (
    <Container>
      <Item file={file} active={true} styles={{ height: '20px', width: '100px' }} />
    </Container>
  );
};

export default TabBar;
