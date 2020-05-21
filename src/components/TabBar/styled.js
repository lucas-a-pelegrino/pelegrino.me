import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 20px;

  font-size: 0.88em;

  @media (max-width: 768px) {
    display: none;
  }
`;
