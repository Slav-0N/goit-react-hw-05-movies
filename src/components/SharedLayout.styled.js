import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  padding-top: 10px;
  padding-left: 20px;
  background-color: aqua;
`;

export const StyledLink = styled(NavLink)`
  color: blue;
  font-size: 24px;
  margin-right: 20px;
  padding-bottom: 20px;

  &.active {
    color: red;
    font-size: 24px;
  }
`;
