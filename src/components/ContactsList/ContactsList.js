import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { Box } from 'components/Box';
import { ContactsListItem } from 'components/ContactsItem/ContactsItem';



export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = (contacts, filter) => {
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  const filteredContacts = getFilteredContacts(contacts, filter);
  

  
  return (
    <Box as="ul" ml={6} mt={5} width="480px">
      {filteredContacts.map(({ name, id, number }) => (
        <ContactsListItem key={id} id={id} name={name} number={number} />
      ))}
    </Box>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   })),
//   onDeleteContact: PropTypes.func.isRequired,
// };