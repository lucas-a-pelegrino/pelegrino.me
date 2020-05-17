import styled from 'styled-components';
import { Item } from '../core';

export const Container = styled.div`
  width: 195px;
  border-right: solid 1px #434c5e;
`;

export const Header = styled.div`
  display: flex;
  height: 20px;
  align-items: center;
  padding-left: 5px;
`;

export const SectionLabel = styled.div`
  display: flex;
  height: 10px;
  flex-direction: row;
  align-items: center;
  background-color: #434c5e;
`;

export const Element = styled.span`
  display: flex;
  margin-left: 5px;
`;

export const SideBarItem = styled(Item)`
  height: 20px;
`;
