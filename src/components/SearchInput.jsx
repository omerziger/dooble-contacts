import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useContext } from 'react';
import { IoIosSearch } from 'react-icons/io';
import StoreContext from '../context/StoreContext';

export default function SearchInput() {
  const classes = useStyles();
  const { store, setStore } = useContext(StoreContext);

  const handleSearchChange = (e) =>
  setStore((prev) => ({
    ...prev,
    search: e.target.value,
  }));

  return (
    <TextField
      className={classes.root}
      value={store.search.value}
      onChange={handleSearchChange}
      InputProps={{
        endAdornment: <IoIosSearch className={classes.adornment} />,
      }}
      variant='outlined'
      size='small'
    />
  );
}

const useStyles = makeStyles({
  root: {
    marginRight: 10,
  },
  adornment: {
    fontSize: 18,
  },
});
