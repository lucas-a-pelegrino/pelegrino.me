import styled from 'styled-components';
import media from 'styled-media-query';

import theme from '../../styles/theme';

export const Card = styled.div`
  display: flex;
  width: 859px;
  height: 546px;

  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.cardBackground};

  border: 1px solid ${theme.colors.cardBorderColor};
  box-sizing: border-box;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  ${media.lessThan('medium')`
    width: 355px;
    height: 704px;
  `}
`;
