import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { ContactsItem, DeleteBtn } from 'components/ContactsItem/ContactsItem.styled'

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id))

  return (
    <ContactsItem >
      <p>{name}: {number}</p>
      <DeleteBtn onClick={handleDelete}>Delete</DeleteBtn>
    </ContactsItem>
  );
}

ContactsListItem.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};