import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;

  &::before {
    content: "";
    width: ${p => p.theme.space[3]}px;
    height: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${p => p.theme.colors.accentColor};
  }
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  background-color: ${p => p.theme.colors.btnColor};
  border-radius: ${p => p.theme.radii.small};

  &:focus, &:hover {
    background-color: ${p => p.theme.colors.accentColor};
  }
`;
