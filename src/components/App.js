import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { InputForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = ( contactId ) => {
  //    setContacts(
  //      contacts => contacts.filter(contact => contact.id !== contactId),
  //    )
  //  }
  
  // const addContact = data => {
  //   const existedName = contacts.find(
  //     el => el.name.toLowerCase() === data.name.toLowerCase()
  //   );
    // if (existedName)
    //   return alert(
    //     `${existedName.name} is already in contacts`
    //   );

  //   data.id = nanoid();
  //   setContacts(
  //     contacts => [data,...contacts]
  //   );
  // }

  // const changeFilter = (evt) => {
  //   setFilter( evt.currentTarget.value );
  // }

  // const getFilteredContacts = () => {
    
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase()));
  // }

  // const filteredContacts = getFilteredContacts();

    return (
      <Box>
        <Section title="Phonebook">
          <InputForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Box>
    );
}

