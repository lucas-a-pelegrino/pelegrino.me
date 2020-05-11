import React, { useState } from 'react';
import styled from 'styled-components';

import CustomText from './CustomText';
import CloseIcon from '../../assets/images/icons/close.svg';

const ItemStyled = styled.div`
  display: flex;
  height: ${(props) => props.height || '15px'};
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  background-color: ${(props) => (props.active ? '#434c5e' : '#2e3440')};

  &:hover {
    background-color: #434c5e;
  }
`;

const Element = styled.span`
  display: flex;
  margin-left: 5px;
`;

const Item = ({ file, active }) => {
  const [isHovering, handleMouseHovering] = useState(false);

  return (
    <ItemStyled active={active}>
      <Element>
        <img src={file.icon} />
      </Element>
      <Element>
        <CustomText text={file.name} styles={{ fontColor: '#eceff4', fontWeight: 'bold', fontSize: '8px' }} />
      </Element>
      {isHovering && active && (
        <Element>
          <img src={CloseIcon} />
        </Element>
      )}
    </ItemStyled>
  );
};

export default Item;
