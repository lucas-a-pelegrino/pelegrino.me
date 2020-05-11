import React, { Component } from 'react';
import styled from 'styled-components';

import CustomText from './CustomText';
import CloseIcon from '../../assets/images/icons/close.svg';

const ItemStyled = styled.span`
  display: flex;
  height: ${(props) => props.height || '15px'};
  ${(props) => (props.width ? `width: ${props.width};` : '')}
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  background-color: ${(props) => (props.active ? '#434c5e' : '#2e3440')};

  &:hover {
    background-color: #434c5e;
  }
`;

const Element = styled.span`
  display: flex;
  margin-left: 5px;
`;

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    const { file, height, width, active } = this.props;
    console.log(this.state);
    return (
      <ItemStyled height={height} width={width} active={active && true}>
        <Element>
          <img src={file.icon} />
        </Element>
        <Element>
          <CustomText
            text={file.name}
            styles={{ fontColor: '#eceff4', fontWeight: 'bold', fontSize: '8px' }}
          />
        </Element>
        {this.state.isHovering && active && (
          <Element onMouseOver={this.handleMouseHover}>
            <img src={CloseIcon} />
          </Element>
        )}
      </ItemStyled>
    );
  }
}
