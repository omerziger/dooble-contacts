import React, { useContext } from 'react';
import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import StoreContext from '../context/StoreContext';
import getUsers from '../services/RandomUserAPI';

export default function Footer() {
  const { store, setStore } = useContext(StoreContext);

  const handleLoadClick = async () => {
    await setStore((prev) => ({ ...prev, status: 'pending' }));
    getUsers(store.page++).then((results) =>
      setStore((prev) => ({
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
        disabled={store.status === 'pending'}
      >
        {store.status === 'pending' && store.page > 0 ? (
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
