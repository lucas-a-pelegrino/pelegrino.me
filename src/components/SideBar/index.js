import React from 'react';

import { Container, Header, SectionLabel, Element, SideBarItem as Item } from './styled';

import ArrowDownIcon from '../../assets/images/icons/arrow-down.svg';
import htmlIcon from '../../assets/images/icons/html-icon.svg';
import javascriptIcon from '../../assets/images/icons/javascript-icon.svg';
import npmIcon from '../../assets/images/icons/npm-icon.svg';

// TODO: will be removed later.
const files = [
  {
    name: 'about.html',
    icon: htmlIcon,
  },
];

const SideBar = () => {
  return (
    <Container>
      <Header>
        <span>EXPLORER</span>
      </Header>
      <SectionLabel>
        <Element>
          <img src={ArrowDownIcon} alt="arrow-down-icon" />
        </Element>
        <Element>
          <span>LUCAS-PELEGRINO</span>
        </Element>
      </SectionLabel>
      {files.map((file) => (
        <Item file={file} key={file.name} styles={{ height: '15px', width: '195px' }} />
      ))}
    </Container>
  );
};

export default SideBar;
