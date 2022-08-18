import PropTypes from 'prop-types';
import { ContactsItem, DeleteBtn } from 'components/ContactsItem/ContactsItem.styled'

export const ContactsListItem = ({ id, name, number, onClick}) => (
  <ContactsItem >
    <p>{name}: {number}</p>
    <DeleteBtn onClick={ () => onClick(id)}>Delete</DeleteBtn>
  </ContactsItem>
);

ContactsListItem.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};