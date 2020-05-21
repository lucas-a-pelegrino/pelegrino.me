import styled from 'styled-components';

export const AboutMeStyled = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 768px) {
  }
`;

export const AboutMeTextStyled = styled.pre`
  margin-left: 20px;
  margin-right: 20px;
  text-align: justify;
  font-size: 0.99em;
  white-space: pre-wrap;
`;
