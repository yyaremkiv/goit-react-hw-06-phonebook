import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './phonebook/contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
  },
});
