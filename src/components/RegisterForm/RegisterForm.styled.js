import styled from "styled-components";
import { Form, Field } from 'formik';

export const RegisterFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.space[9]}px;
  border: ${p => p.theme.borders.normal} black;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.bgStats};
`;

export const RegisterFormLabel = styled.label`
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const RegisterFormItem = styled(Field)`
  margin-bottom: ${p => p.theme.space[5]}px;
  width: ${p => p.theme.space[8]}px;
`;

export const RegisterFormBtn = styled.button`
  width: ${p => p.theme.space[7]}px;
  cursor: pointer;
  background-color: ${p => p.theme.colors.btnColor};
  border-radius: ${p => p.theme.radii.small};

  &:focus, &:hover {
    background-color: ${p => p.theme.colors.accentColor};
  }
`;