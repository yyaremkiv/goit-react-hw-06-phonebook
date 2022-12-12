import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.contacts.push({ ...action.payload, id: new Date().toISOString() });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } =
  phoneBookSlice.actions;

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const persistedPhoneBookReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);
