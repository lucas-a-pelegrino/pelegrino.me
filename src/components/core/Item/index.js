import React, { useState } from 'react';

import { Container, Element, CloseButton } from './styled';

import CloseIcon from '../../../assets/images/icons/close.svg';

const Item = ({ file, active, height, width }) => {
  const [isHovering, showCloseButton] = useState(false);

  return (
    <Container
      active={active}
      height={height}
      width={width}
      onMouseEnter={() => showCloseButton(true)}
      onMouseLeave={() => showCloseButton(false)}
    >
      <Element>
        <img src={file.icon} />
      </Element>
      <Element>{file.name}</Element>
      {isHovering && active && (
        <CloseButton>
          <img src={CloseIcon} />
        </CloseButton>
      )}
    </Container>
  );
};

export default Item;
