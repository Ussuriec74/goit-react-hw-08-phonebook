import { Component } from 'react';
import { Formik, Form, Field } from 'formik';

export class InputForm extends Component {
  state = {
    name: '',
    number: '',
  }
  
  
  onSubmit = (values, action) => {
    this.props.addContact(values);
    action.resetForm();
  };
  
  render() {
    // const { name, number } = this.state;
    return (
      <Formik onSubmit={this.onSubmit} initialValues={{ name: '', number: '' }}>
        <Form>
          <label>Name</label>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label>Number</label>
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button tape="submit">Add contact</button>
        </Form>
      </Formik>   
    )
  }
}