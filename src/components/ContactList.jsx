import React, { useContext, useEffect, useState } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import StoreContext from '../context/StoreContext';
import Contact from './Contact';

export default function ContactList() {
  const classes = useStyles();
  const { store } = useContext(StoreContext);
  const [filteredList, setFilteredList] = useState(store.list);
  const [highlightedList, setHighlightedList] = useState([]);

  useEffect(() => {
    setFilteredList(store.list);
  }, [store.list]);

  // handles filtering
  useEffect(() => {
    setFilteredList(
      store.list.filter((contact) => {
        return (
          (store.filter.gender
            ? contact.gender === store.filter.gender
            : true) &&
          contact.dob.age >= store.filter.age[0] &&
          contact.dob.age <= store.filter.age[1]
        );
      })
    );
  }, [store.list, store.filter]);

  // handles highlighting
  useEffect(() => {
    if (!store.search.length) return setHighlightedList([]);
    setHighlightedList(
      filteredList.filter((contact) => {
        return (
          contact.name.first
            .toLowerCase()
            .includes(store.search.toLowerCase()) ||
          contact.name.last
            .toLowerCase()
            .includes(store.search.toLowerCase()) ||
          contact.email.includes(store.search.toLowerCase()) ||
          contact.cell.includes(store.search.toLowerCase())
        );
      })
    );
  }, [store.search, filteredList]);

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
            nat={contact.nat}
            age={contact.dob.age}
            location={contact.location}
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
