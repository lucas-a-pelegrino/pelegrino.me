import React from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';

const Window = styled.div`
  display: flex;
  width: 720px;
  height: 430px;
  background-color: #2e3440;

  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export default function WindowCanvas() {
  return (
    <Window>
      <SideBar />
    </Window>
  );
}
