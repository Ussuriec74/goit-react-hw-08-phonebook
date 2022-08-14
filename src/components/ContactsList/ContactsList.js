import { Box } from 'components/Box';
import React from 'react';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <Box as="ul">
    {contacts.map(({ name, id, number }) => (
      <li key={id}>
        <p>{name}: {number}</p>
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </Box>
);