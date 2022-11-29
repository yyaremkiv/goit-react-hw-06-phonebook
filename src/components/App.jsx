import React, { Component } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import css from './app.module.scss';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

export const App = () => {
  const [filter, setFilter] = useState();
  const contactsList = useSelector(state => state.phoneBook);

  //   this.setState(prevState => ({
  //     contacts: [contact, ...prevState.contacts],
  //   }));
  // };

  // const handleFilter = e => {
  //   this.setState({ filter: e.target.value.trim().toLocaleLowerCase() });
  // };

  // const deleteContact = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(
  //         contact => contact.id !== contactId
  //       ),
  //     };
  //   });
  // };

  // const filterContact = this.state.contacts.filter(contact =>
  //   contact.name.toLocaleLowerCase().includes(this.state.filter)

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <div className={css.contacts__container}>
        <Filter />
        <ContactList contacts={contactsList} />
      </div>
    </div>
  );
};
