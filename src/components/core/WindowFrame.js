import React from 'react';
import styled from 'styled-components';

const Window = styled.div`
  width: 720px;
  height: 430px;
  background-color: #2e3440;

  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

class WindowFrame extends React.Component {
  render() {
    return <Window></Window>;
  }
}

export default WindowFrame;
