import styled from 'styled-components';

export const Container = styled.div`
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

export const Element = styled.span`
  display: flex;
  margin-left: 5px;
`;

export const CloseButton = styled(Element)`
  margin-left: 20px;
`;
