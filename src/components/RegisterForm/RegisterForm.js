import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegisterFormWrapper, RegisterFormLabel, RegisterFormItem, RegisterFormBtn } from 'components/RegisterForm/RegisterForm.styled';


export const RegisterForm = () => {

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={{ name: '', email: '', password: '' }}>
      <RegisterFormWrapper>
        <RegisterFormLabel>User Name</RegisterFormLabel>
        <RegisterFormItem type="text" name="name" required />
        <RegisterFormLabel>User Email</RegisterFormLabel>
        <RegisterFormItem type="email" name="email" required />
        <RegisterFormLabel>Password</RegisterFormLabel>
        <RegisterFormItem type="password" name="password" required />
        <RegisterFormBtn type="submit">Register</RegisterFormBtn>
      </RegisterFormWrapper>
    </Formik>
  );
};