import React from 'react';
import styled from 'styled-components';

const Container = styled.span`
  font-family: Menlo;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '8px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'bold')};
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props) => (props.fontColor ? props.fontColor : '#eceff4')};
`;

const CustomText = ({ text, styles }) => {
  return (
    <Container fontSize={styles.fontSize} fontWeight={styles.fontWeight} fontColor={styles.fontColor}>
      {text}
    </Container>
  );
};

export default CustomText;
