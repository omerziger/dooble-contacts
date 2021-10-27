import React, { useContext } from 'react';
import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import ContactsContext from '../context/ContactsContext';
import getUsers from '../services/RandomUserAPI';

export default function Footer() {
  const { contacts, setContacts } = useContext(ContactsContext);

  const handleLoadClick = async () => {
    await setContacts((prev) => ({ ...prev, status: 'pending' }));
    getUsers(contacts.page++).then((results) =>
      setContacts((prev) => ({
        ...prev,
        page: prev.page++,
        list: [...prev.list, ...results],
        status: 'resolved',
      }))
    );
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        onClick={handleLoadClick}
        color='primary'
        disabled={contacts.status === 'pending'}
      >
        {contacts.status === 'pending' && contacts.page > 0 ? (
          <CircularProgress size={20} />
        ) : (
          'Load More'
        )}
      </Button>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    height: 60,
    padding: 10,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    width: 120,
    border: '1px solid',
    background: '#fff',
  },
});
