import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
  width: 720px;
  height: 20px;
  display: flex;
  flex-direction: row;

  background-image: linear-gradient(to top, #3a3e3f, #2f3234);

  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom: 1px solid #000;
`;

const Streetlight = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 5px 0px 5px 5px;
  background-color: ${(props) => props.color};
`;

class WindowBar extends React.Component {
  render() {
    return (
      <StyledBar>
        <Streetlight color="#ff5a52" />
        <Streetlight color="#e6c02a" />
        <Streetlight color="#53c22b" />
      </StyledBar>
    );
  }
}

export default WindowBar;
