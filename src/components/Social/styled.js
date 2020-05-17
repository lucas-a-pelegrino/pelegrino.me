import styled from 'styled-components';

export const SocialStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextStyled = styled.h4`
  margin: 0px 0px 5px 0px;
`;

export const SocialLinks = styled.span`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const LinkStyled = styled.a`
  margin: 0px 0px 0px ${(props) => (props.first ? '0px' : '5px')};
`;
