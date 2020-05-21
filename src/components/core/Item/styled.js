import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: ${(props) => `${props.height}px` || '15px'};
  ${(props) => (props.width ? `width: ${props.width}%;` : 'width: 100%;')}
  flex-flow: row nowrap;
  align-items: center;
  cursor: pointer;

  background-color: ${(props) => (props.active ? '#434c5e' : '#2e3440')};

  &:hover {
    background-color: #434c5e;
  }
`;

export const Element = styled.span`
  margin-left: 5px;
`;

export const CloseButton = styled(Element)`
  margin-left: 35%;
`;
