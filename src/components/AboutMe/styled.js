import styled from 'styled-components';

import theme from '../../styles/theme';

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
`;

export const Text = styled.pre`
  text-align: justify;
  font-size: ${theme.font.size.md};
  white-space: pre-wrap;
`;
