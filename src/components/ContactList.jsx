import React, { useContext, useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import ContactsContext from '../context/ContactsContext';
import Contact from './Contact';

export default function ContactList() {
  const classes = useStyles();
  const { contacts } = useContext(ContactsContext);
  const [filteredList, setFilteredList] = useState(contacts.list);
  const [highlightedList, setHighlightedList] = useState([]);

  useEffect(() => {
    if (!contacts.search.gender) setFilteredList(contacts.list);
    if (!contacts.search.value) setHighlightedList([]);
    if (contacts.search.gender)
      setFilteredList(
        contacts.list.filter(
          (contact) => contact.gender === contacts.search.gender
        )
      );

    if (contacts.search.value)
      setHighlightedList(
        filteredList.filter((contact) => {
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
        })
      );
  }, [contacts.list, contacts.search, filteredList]);

  return (
    <Grid container className={classes.root}>
      {filteredList.map((contact) => {
        return (
          <Contact
            key={contact.login.uuid}
            avatar={contact.picture.medium}
            firstName={contact.name.first}
            lastName={contact.name.last}
            gender={contact.gender}
            email={contact.email}
            phoneNumber={contact.cell}
            highlight={highlightedList.some(
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
