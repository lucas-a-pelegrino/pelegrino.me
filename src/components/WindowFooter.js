import React from 'react';
import styled from 'styled-components';

import { CustomText } from './core';

const FooterStyled = styled.div`
  display: flex;
  height: 10px;
  width: 720px;
  background-color: #3b4252;

  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

const CustomTextStyled = styled(CustomText)`
  align-items: center;
`;

export default function Footer() {
  return (
    <FooterStyled>
      <CustomTextStyled
        text="COPYRIGHT @ 2020 - LUCAS PELEGRINO"
        styles={{ fontColor: '#eceff4', fontWeight: 'bold', fontSize: '8px' }}
      />
    </FooterStyled>
  );
}
