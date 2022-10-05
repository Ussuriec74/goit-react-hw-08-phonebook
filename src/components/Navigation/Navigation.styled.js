import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const HeaderNavLink = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight:${p => p.theme.fontWeights.normal};
  color:${p => p.theme.colors.white};

  &.active {
    color: ${p => p.theme.colors.black};;
  }
`;