import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { InputForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
  };

  addContact = data => {
    data.id = nanoid();
    this.setState(prevState => ({
      contacts: [data,...prevState.contacts]

    }));
  }

  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  }

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalazedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalazedFilter));

  }

  render() {
    const { filter } = this.state; 

    const filteredContacts = this.getFilteredContacts();

    return (
      <Box>
        <Section title="Phonebook">
          <InputForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={filteredContacts}/>
        </Section>
      </Box>
    );
  }
}
  
