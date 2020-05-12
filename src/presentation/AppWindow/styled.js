import styled from 'styled-components';

import { CustomText } from '../../components/core';

export const AppWindowStyle = styled.div`
  display: flex;
  width: 722px;
  height: 463px;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  border: solid 1px;
  border-radius: 5px;
  box-shadow: inset 0px 0px 0px 1px #808383;
`;

export const TopBarStyle = styled.div`
  width: 720px;
  height: 20px;
  display: flex;
  flex-direction: row;

  background-image: linear-gradient(to top, #3a3e3f, #2f3234);

  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom: 1px solid #000;
`;

export const StreetlightStyle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 5px 0px 5px 5px;
  background-color: ${(props) => props.color};
`;

export const EditorStyle = styled.div`
  display: flex;
  width: 720px;
  height: 430px;
  background-color: #2e3440;
`;

export const BottomBarStyle = styled.div`
  display: flex;
  height: 10px;
  width: 720px;
  background-color: #3b4252;

  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export const CopyrightTextStyle = styled(CustomText)`
  align-items: center;
`;
