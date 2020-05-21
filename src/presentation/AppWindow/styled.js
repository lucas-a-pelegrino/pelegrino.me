import styled from 'styled-components';

export const AppWindowStyle = styled.div`
  display: flex;
  width: 60vw;
  height: 70vh;

  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  border: solid 1px #000000;
  border-radius: 5px;
  box-shadow: inset 0px 0px 0px 1px #808383;
`;

export const TopBarStyle = styled.div`
  display: flex;
  width: 99.8%;
  height: 4%;
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
  width: 99.8%;
  height: 92.5%;
  background-color: #2e3440;
`;

export const CanvasStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const BottomBarStyle = styled.div`
  display: flex;
  width: 99.8%;
  height: 3%;
  background-color: #3b4252;

  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export const CopyrightTextStyle = styled.span`
  align-items: center;
`;
