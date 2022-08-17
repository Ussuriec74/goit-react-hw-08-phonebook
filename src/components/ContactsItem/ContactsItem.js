import PropTypes from 'prop-types';
import { ContactsItem, DeleteBtn } from 'components/ContactsItem/ContactsItem.styled'

export const ContactsListItem = ({ name, number, onClick}) => (
  <ContactsItem >
    <p>{name}: {number}</p>
    <DeleteBtn onClick={onClick}>Delete</DeleteBtn>
  </ContactsItem>
);

ContactsListItem.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};