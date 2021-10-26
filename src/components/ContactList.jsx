import React, { useContext, useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ContactsContext from '../context/ContactsContext';
import Contact from './Contact';

export default function ContactList() {
  const classes = useStyles();
  const { contacts } = useContext(ContactsContext);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    //  If no search values
    if (!contacts.search.gender && contacts.search.value === '')
      return setFilteredList([]);

    // If both search values are present
    if (contacts.search.gender && contacts.search.value !== '') {
      const genderList = contacts.list.filter(
        (contact) => contact.gender === contacts.search.gender
      );

      const searchList = genderList.filter((contact) => {
        return (
          contact.name.first
            .toLowerCase()
            .includes(contacts.search.value.toLowerCase()) ||
          contact.name.last
            .toLowerCase()
            .includes(contacts.search.value.toLowerCase()) ||
          contact.email.includes(contacts.search.value.toLowerCase()) ||
          contact.cell.includes(contacts.search.value.toLowerCase())
        );
      });

      return setFilteredList(searchList);
    }

    // If only gender value is present
    if (contacts.search.gender) {
      const newList = contacts.list.filter(
        (contact) => contact.gender === contacts.search.gender
      );
      return setFilteredList(newList);
    }

    // If only search value is present
    if (contacts.search.value !== '') {
      const newList = contacts.list.filter((contact) => {
        return (
          contact.name.first
            .toLowerCase()
            .includes(contacts.search.value.toLowerCase()) ||
          contact.name.last
            .toLowerCase()
            .includes(contacts.search.value.toLowerCase()) ||
          contact.email.includes(contacts.search.value.toLowerCase()) ||
          contact.cell.includes(contacts.search.value.toLowerCase())
        );
      });
      return setFilteredList(newList);
    }
  }, [contacts.list, contacts.search]);

  return (
    <Grid container className={classes.root}>
      {contacts.list.map((contact) => {
        return (
          <Contact
            key={contact.login.uuid}
            avatar={contact.picture.medium}
            firstName={contact.name.first}
            lastName={contact.name.last}
            gender={contact.gender}
            email={contact.email}
            phoneNumber={contact.cell}
            highlight={filteredList.some(
              (el) => el.login.uuid === contact.login.uuid
            )}
          />
        );
      })}
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    top: 60,
    position: 'relative',
    height: 'calc(100vh - 100px)',
  },
});
