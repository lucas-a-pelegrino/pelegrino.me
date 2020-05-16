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

const AppWindow = ({ location, children }) => {
  return (
    <Container>
      <TopBar>
        <Streetlight color="#ff5a52" />
        <Streetlight color="#e6c02a" />
        <Streetlight color="#53c22b" />
      </TopBar>
      <Editor>
        <SideBar location={location} />
        <TabBar location={location} />
        {children}
      </Editor>
      <BottomBar>
        <CopyrightText>© 2020 LUCAS PELEGRINO</CopyrightText>
      </BottomBar>
    </Container>
  );
};

export default AppWindow;
