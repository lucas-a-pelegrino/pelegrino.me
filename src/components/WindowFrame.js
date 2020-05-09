import React from 'react';
import styled from 'styled-components';

const Window = styled.div`
  width: 720px;
  height: 450px;

  background-color: #2e3440;
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

class WindowFrame extends React.Component {
  render() {
    return <Window></Window>;
  }
}

export default WindowFrame;
