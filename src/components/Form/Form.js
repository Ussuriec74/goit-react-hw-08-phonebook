import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { FormWrapper, FormItem, FormLabel, FormBtn } from 'components/Form/Form.styled';

export const InputForm = () => {

  const dispatch = useDispatch();
   
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    resetForm();
  };

  
    return (
      <Formik onSubmit={handleSubmit} initialValues={{ name: '', number: '' }}>
        <FormWrapper>
          <FormLabel>Name</FormLabel>
          <FormItem
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <FormLabel>Number</FormLabel>
          <FormItem
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <FormBtn type="submit">Add contact</FormBtn>
        </FormWrapper>
      </Formik>   
    )
  
}
