import React from 'react';
import styled from 'styled-components';

import CustomText from './CustomText';

const Item = styled.span`
  display: flex;
  height: 15px;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  background-color: #2e3440;

  &:hover {
    background-color: #434c5e;
  }

  &:active {
    background-color: #3b4252;
  }
`;

const Element = styled.span`
  display: flex;
  margin-left: 5px;
`;

export default function ListItem(props) {
  const { file } = props;

  return (
    <Item>
      <Element>
        <img src={file.icon} />
      </Element>
      <Element>
        <CustomText text={file.name} styles={{ fontColor: '#eceff4', fontWeight: 'bold', fontSize: '8px' }} />
      </Element>
    </Item>
  );
}
