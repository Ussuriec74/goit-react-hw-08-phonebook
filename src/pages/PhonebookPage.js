import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectContacts, selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { InputForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <Box>
        <Section title="Phonebook">
          <InputForm />
        </Section>
        <Section title="Contacts">
        <Filter />
        {isLoading && !error && <b>Waiting please...</b>}
        {error && <b>{error}</b>}
        {items.length > 0 && <ContactList />}
        </Section>
      </Box>
  );
}

