import React from 'react';
import styled from 'styled-components';

import { CustomText, ListItem as Item } from './core';

import ArrowDownIcon from '../assets/images/Icons/arrow-down.svg';
import htmlIcon from '../assets/images/Icons/html-icon.svg';
import javascriptIcon from '../assets/images/Icons/javascript-icon.svg';
import npmIcon from '../assets/images/Icons/npm-icon.svg';

const SideBarStyled = styled.div`
  width: 195px;
  border-right: solid 1px #434c5e;
`;

const Header = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  padding-left: 5px;
`;

const SectionTitle = styled.div`
  display: flex;
  height: 10px;
  flex-direction: row;
  align-items: center;
  background-color: #434c5e;
`;

const SectionTitleElement = styled.span`
  display: flex;
  margin-left: 5px;
`;

export default function SideBar() {
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
  return (
    <SideBarStyled>
      <Header>
        <CustomText text="EXPLORER" styles={{ fontColor: '#eceff4', fontWeight: 'bold', fontSize: '8px' }} />
      </Header>
      <SectionTitle>
        <SectionTitleElement>
          <img src={ArrowDownIcon} alt="arrow-down-icon" />
        </SectionTitleElement>
        <SectionTitleElement>
          <CustomText
            text="LUCAS-PELEGRINO"
            styles={{ fontColor: '#eceff4', fontWeight: 'bold', fontSize: '7px' }}
          />
        </SectionTitleElement>
      </SectionTitle>
      {files.map((file) => (
        <Item file={file} />
      ))}
    </SideBarStyled>
  );
}
