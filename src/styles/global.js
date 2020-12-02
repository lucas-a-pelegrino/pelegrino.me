import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  #gatsby-focus-wrapper,
  html,
  body {
    height: 100vh;
    width: 100vw;
    margin: 0px auto;

    background-color: ${theme.colors.background};
    color: ${theme.colors.text};

    font-family: ${theme.font.familyPrimary};
    font-size: ${theme.font.size.md};
  }
`;
