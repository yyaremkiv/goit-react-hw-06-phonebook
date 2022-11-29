import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addContact } from 'redux/phoneBookSlice';
import css from './ContactForm.module.scss';

export const ContactForm = () => {
  const [contact, setContact] = useState({ name: '', number: '' });
  const contactsList = useSelector(state => state.phoneBook);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contactsList.find(
        user =>
          user.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase()
      )
    ) {
      alert('This contact already exists');
      return;
    }

    dispatch(addContact(contact));
    setContact({ name: '', number: '' });
  };

  return (
    <form className={css.formSubmit} onSubmit={handleSubmit}>
      <label className={css.formSubmit__label}>
        Name
        <input
          className={css.formSubmit__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contact.name}
          onChange={e => setContact({ ...contact, name: e.target.value })}
        />
      </label>
      <label className={css.formSubmit__label}>
        Number
        <input
          className={css.formSubmit__input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contact.number}
          onChange={e => setContact({ ...contact, number: e.target.value })}
        />
      </label>
      <button type="submit" className={css.formSubmit__button}>
        Add contact
      </button>
    </form>
  );
};
