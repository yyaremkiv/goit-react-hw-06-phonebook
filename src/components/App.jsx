import React, { Component } from 'react';
import css from './app.module.scss';

import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';

import {useSelector, useDispatch} from 'react-redux';
import {addContact, deleteContact} from '../redux/phonebook/contactSlice';

const shortid = require('shortid');

export function App() {
  const phoneBook2 = useSelector((state) => state.phonebook)
  const state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  const handleSubmit = ({ name, number }) => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert('This contact already exists');
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  const handleFilter = e => {
    this.setState({ filter: e.target.value.trim().toLocaleLowerCase() });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };
  
  const filterContact = this.state.contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(state.filter)
  );

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <div className={css.contacts__container}>
          <Filter onChange={this.handleFilter} />
          <ContactList
            contacts={filterContact}
            delContact={this.deleteContact}
          />
        </div>
      </div>
    );
}
