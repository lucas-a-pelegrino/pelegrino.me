import React from 'react';
import styled from 'styled-components';

import { CustomText } from './core';

import ArrowDownIcon from '../assets/images/Icons/arrow-down.svg';

const SideBarStyled = styled.div`
  height: 398px;
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

const SectionTitleElement = styled.div`
  display: flex;
  margin-left: 5px;
`;

export default function SideBar() {
  const files = [
    {
      name: 'about.html',
      icon: 'html-icon',
    },
    {
      name: 'workExperience.js',
      icon: 'javascript-icon',
    },
    {
      name: 'package.json',
      icon: 'npm-icon',
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
            styles={{ fontColor: '#eceff4', fontWeight: 'bold', fontSize: '8px' }}
          />
        </SectionTitleElement>
      </SectionTitle>
      {files.forEach((file) => {})}
    </SideBarStyled>
  );
}
