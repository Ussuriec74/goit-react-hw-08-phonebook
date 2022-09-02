import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { InputForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const sevedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (sevedContacts) {
      setContacts(sevedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  

    return (
      <Box>
        <Section title="Phonebook">
          <InputForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
        </Section>
      </Box>
    );
}

// export class App extends Component {
//   state = {
//     contacts: [
//       {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//       {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//       {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//       {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//     ],
//     filter: '',
    
//   };

//    componentDidMount() {

//     const contacts = JSON.parse(localStorage.getItem('contacts'));

//     if (contacts) {
//       this.setState({ contacts: contacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
    
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   deleteContact = ( contactId ) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }))
//   }

//   addContact = data => {
//     const existedName = this.state.contacts.find(
//       el => el.name.toLowerCase() === data.name.toLowerCase()
//     );
//     if (existedName)
//       return alert(
//         `${existedName.name} is already in contacts`
//       );

//     data.id = nanoid();
//     this.setState(prevState => ({
//       contacts: [data,...prevState.contacts]

//     }));
//   }

//   changeFilter = (evt) => {
//     this.setState({ filter: evt.currentTarget.value });
//   }

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalazedFilter = filter.toLowerCase();

//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalazedFilter));

//   }

//   render() {
//     const { filter } = this.state; 

//     const filteredContacts = this.getFilteredContacts();

//     return (
//       <Box>
//         <Section title="Phonebook">
//           <InputForm addContact={this.addContact} />
//         </Section>
//         <Section title="Contacts">
//           <Filter value={filter} onChange={this.changeFilter} />
//           <ContactList contacts={filteredContacts} onDeleteContact={this.deleteContact} />
//         </Section>
//       </Box>
//     );
//   }
// }
  
