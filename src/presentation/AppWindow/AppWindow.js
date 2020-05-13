import React from 'react';

import { SideBar, TabBar } from '../../components';

import {
  AppWindowStyle as Container,
  TopBarStyle as TopBar,
  StreetlightStyle as Streetlight,
  EditorStyle as Editor,
  BottomBarStyle as BottomBar,
  CopyrightTextStyle as CopyrightText,
} from './styled';

const AppWindow = () => {
  return (
    <Container>
      <TopBar>
        <Streetlight color="#ff5a52" />
        <Streetlight color="#e6c02a" />
        <Streetlight color="#53c22b" />
      </TopBar>
      <Editor>
        <SideBar />
        <TabBar />
      </Editor>
      <BottomBar>
        <CopyrightText
          text="© 2020 LUCAS PELEGRINO"
          styles={{ fontColor: '#eceff4', fontWeight: 'bold', fontSize: '8px' }}
        />
      </BottomBar>
    </Container>
  );
};

export default AppWindow;
