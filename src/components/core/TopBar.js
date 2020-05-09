import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
  width: 720px;
  height: 20px;
  background-image: linear-gradient(to top, #3a3e3f, #2f3234);

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 1px solid #000;
`;

const Streetlight = styled.span`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 5px ${(props) => (props.margin ? props.margin : 5)}px;
  background-color: ${(props) => props.color};
`;

class TopBar extends React.Component {
  render() {
    return (
      <StyledBar>
        <Streetlight color="#ff5a52" />
        <Streetlight color="#e6c02a" margin={20} />
        <Streetlight color="#53c22b" margin={35} />
      </StyledBar>
    );
  }
}

export default TopBar;
