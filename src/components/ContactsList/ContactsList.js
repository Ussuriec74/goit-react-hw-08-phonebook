import { Box } from 'components/Box';
import React from 'react';
import { ContactsItem, DeleteBtn } from 'components/ContactsList/ContactsList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <Box as="ul" ml={6} mt={5} width="480px">
    {contacts.map(({ name, id, number }) => (
      <ContactsItem key={id}>
        <p>{name}: {number}</p>
        <DeleteBtn onClick={() => onDeleteContact(id)}>Delete</DeleteBtn>
      </ContactsItem>
    ))}
  </Box>
);