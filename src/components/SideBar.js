import React from 'react';
import styled from 'styled-components';

import { CustomText, Item } from './core';

import ArrowDownIcon from '../assets/images/icons/arrow-down.svg';
import htmlIcon from '../assets/images/icons/html-icon.svg';
import javascriptIcon from '../assets/images/icons/javascript-icon.svg';
import npmIcon from '../assets/images/icons/npm-icon.svg';

const Container = styled.div`
  width: 195px;
  border-right: solid 1px #434c5e;
`;

const Header = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  padding-left: 5px;
`;

const SectionLabel = styled.div`
  display: flex;
  height: 10px;
  flex-direction: row;
  align-items: center;
  background-color: #434c5e;
`;

const Element = styled.span`
  display: flex;
  margin-left: 5px;
`;

const SideBarItem = styled(Item)`
  height: 20px;
`;

// TODO: will be removed later.
const files = [
  {
    name: 'about.html',
    icon: htmlIcon,
  },
  {
    name: 'workExperience.js',
    icon: javascriptIcon,
  },
  {
    name: 'package.json',
    icon: npmIcon,
  },
];

const SideBar = () => {
  return (
    <Container>
      <Header>
        <CustomText text="EXPLORER" styles={{ fontColor: '#eceff4', fontWeight: 'bold', fontSize: '8px' }} />
      </Header>
      <SectionLabel>
        <Element>
          <img src={ArrowDownIcon} alt="arrow-down-icon" />
        </Element>
        <Element>
          <CustomText
            text="LUCAS-PELEGRINO"
            styles={{ fontColor: '#eceff4', fontWeight: 'bold', fontSize: '7px' }}
          />
        </Element>
      </SectionLabel>
      {files.map((file) => (
        <SideBarItem file={file} key={file.name} styles={{ height: '15px', width: '195px' }} />
      ))}
    </Container>
  );
};

export default SideBar;
