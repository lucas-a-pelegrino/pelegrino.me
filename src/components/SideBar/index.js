import React from 'react';

import { Item } from '../core';

import {
  Container as SideBarContainer,
  Header,
  SectionLabel,
  SectionLabelElement as Element,
} from './styled';

import htmlIcon from '../../assets/images/icons/html-icon.svg';

// TODO: will be removed later.
const files = [
  {
    name: 'about.html',
    icon: htmlIcon,
  },
];

const SideBar = () => {
  return (
    <SideBarContainer>
      <Header>EXPLORER</Header>
      <SectionLabel>
        <Element>LUCAS-PELEGRINO</Element>
      </SectionLabel>
      {files.map((file) => (
        <Item file={file} key={file.name} height={20} width={100} />
      ))}
    </SideBarContainer>
  );
};

export default SideBar;
