import { Box } from 'components/Box';
import { Section } from 'components/Section/Section';
import { InputForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export const App = () => {

    return (
      <Box>
        <Section title="Phonebook">
          <InputForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Box>
    );
}

