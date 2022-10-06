import styled from "styled-components";

export const UserMenuText = styled.p`
  margin-right: ${p => p.theme.space[3]};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight:${p => p.theme.fontWeights.normal};
  color:${p => p.theme.colors.white};
`
export const ExitButton = styled.button`
  padding-top:${p => p.theme.space[3]};
  background-color: inherit;
  color:${p => p.theme.colors.white};
  border-color:${p => p.theme.colors.white};
`