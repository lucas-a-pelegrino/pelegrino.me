import React from 'react';
import styled from 'styled-components';

const Window = styled.div`
  width: 720px;
  height: 430px;
  background-color: #2e3440;

  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

class WindowCanvas extends React.Component {
  render() {
    return <Window></Window>;
  }
}

export default WindowCanvas;
