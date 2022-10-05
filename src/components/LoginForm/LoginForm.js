import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginFormWrapper, LoginFormLabel, LoginFormItem, LoginFormBtn } from 'components/LoginForm/LoginForm.styled';


export const LoginForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ email: '', password: '' }}>
      <LoginFormWrapper>
        <LoginFormLabel>Email</LoginFormLabel>
        <LoginFormItem type="email" name="email" required />
        <LoginFormLabel>Password</LoginFormLabel>
        <LoginFormItem type="password" name="password" required />
        <LoginFormBtn type="submit">Log in</LoginFormBtn>
      </LoginFormWrapper>
    </Formik>
  );
};