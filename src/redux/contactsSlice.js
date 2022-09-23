import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'root',
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

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;