import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: ${p => p.theme.space[6]}px;
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.accentColor};
`;