import React from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';
import TabBar from './TabBar';

const Window = styled.div`
  display: flex;
  width: 720px;
  height: 430px;
  background-color: #2e3440;
`;

export default function WindowCanvas() {
  return (
    <Window>
      <SideBar />
      <TabBar />
    </Window>
  );
}
