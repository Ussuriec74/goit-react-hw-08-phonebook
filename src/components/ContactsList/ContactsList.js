import { Box } from 'components/Box';
import React from 'react';

export const ContactList = ({ contacts }) => (
  <Box as="ul">
    {contacts.map(({ name, id, number }) => (
      <li key={id}>
        <p>{name}: {number}</p>
      </li>
    ))}
  </Box>
);