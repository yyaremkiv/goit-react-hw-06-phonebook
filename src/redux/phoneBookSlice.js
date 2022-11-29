import { createSlice } from '@reduxjs/toolkit';

export const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push({ ...action.payload, id: new Date().toISOString() });
    },
    deleteContact(state, action) {
      return (state = state.filter(
        contact => contact.id !== action.payload.id
      ));
    },
  },
});

export const { addContact, deleteContact } = phoneBookSlice.actions;
