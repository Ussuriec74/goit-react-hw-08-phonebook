import { nanoid } from "nanoid";

export const addContact = ({ name, number }) => {
  return {
    type: "contacts/addContacts",
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContacts",
    payload: contactId,
  };
};

export const updateFilter = filter => {
  return {
    type: "filter/updateFilter",
    payload: filter,
  };
};