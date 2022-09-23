import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      for (const contact of state) {
        if (contact.name === action.payload.name) {
          return alert(
            `${action.payload.name} is already in contacts`
          );
        }
      }
      state.push(action.payload);
    },
    deleteContact(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;