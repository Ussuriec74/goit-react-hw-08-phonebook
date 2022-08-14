import { Component } from 'react';
import { Formik } from 'formik';
import { FormWrapper, FormItem, FormLabel, FormBtn } from 'components/Form/Form.styled';

export class InputForm extends Component {
   
  onSubmit = (values, action) => {
    this.props.addContact(values);
    action.resetForm();
  };
  
  render() {
    return (
      <Formik onSubmit={this.onSubmit} initialValues={{ name: '', number: '' }}>
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
          <FormBtn tape="submit">Add contact</FormBtn>
        </FormWrapper>
      </Formik>   
    )
  }
}