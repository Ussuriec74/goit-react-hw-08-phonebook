import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import React from 'react';
import { ContactsListItem } from 'components/ContactsItem/ContactsItem';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <Box as="ul" ml={6} mt={5} width="480px">
    {contacts.map(({ name, id, number }) => (
      <ContactsListItem key={id} name={name} number={number} onClick={() => onDeleteContact(id)} />
    ))}
  </Box>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })),
  onDeleteContact: PropTypes.func.isRequired,
};