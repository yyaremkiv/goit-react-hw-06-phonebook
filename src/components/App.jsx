import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import css from './app.module.scss';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

export const App = () => {
  const [filter, setFilter] = useState('');
  const contacts = useSelector(state => state.phoneBook.contacts);

  const filteredContacts = contacts.filter(contact =>
    contact.name.includes(filter)
  );

  const contactsList = filter.length > 0 ? filteredContacts : contacts;

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <div>
          <h2>Contacts</h2>
          <div className={css.contacts__container}>
            <Filter onChange={setFilter} />
            <ContactList contacts={contactsList} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
