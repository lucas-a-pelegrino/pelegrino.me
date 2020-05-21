import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 25%;
  border-right: solid 1px #434c5e;
  font-size: 0.88em;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  padding-left: 5px;
`;

export const SectionLabel = styled.div`
  display: flex;
  height: 15px;
  flex-direction: row;
  align-items: center;
  background-color: #434c5e;
`;

export const SectionLabelElement = styled.span`
  margin-left: 5px;
`;
