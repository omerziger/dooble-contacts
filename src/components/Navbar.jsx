import React, { useContext } from 'react';
import {
  AppBar,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Toolbar,
  Typography,
} from '@material-ui/core';
import ContactsContext from '../context/ContactsContext';

export default function Navbar() {
  const classes = useStyles();
  const { contacts, setContacts } = useContext(ContactsContext);

  const handleSearchChange = (e) =>
    setContacts((prev) => ({
      ...prev,
      search: { ...prev.search, value: e.target.value },
    }));
  const handleGenderChange = (e) =>
    setContacts((prev) => ({
      ...prev,
      search: { ...prev.search, gender: e.target.value },
    }));

  return (
    <AppBar
      className={classes.root}
      color='transparent'
      variant='outlined'
      position='fixed'
    >
      <Toolbar className={classes.toolBar} variant='dense'>
        <Typography className={classes.brand} variant='h5'>
          Contact Book
        </Typography>
        <TextField
          className={classes.search}
          value={contacts.search.value}
          onChange={handleSearchChange}
          variant='outlined'
          size='small'
        />
        <FormControl>
          <InputLabel id='gender-select-label'>Gender</InputLabel>
          <Select
            className={classes.select}
            value={contacts.search.gender}
            onChange={handleGenderChange}
            labelId='gender-select-label'
            id='gender-select'
          >
            <MenuItem value={undefined}>All Genders</MenuItem>
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  root: {
    background: 'rgba(255, 255, 255, 0.75)',
    backdropFilter: 'blur(6px)',
  },
  toolBar: {
    padding: '6px 20px',
  },
  brand: {
    fontFamily: 'Inter',
    fontWeight: 600,
    letterSpacing: 0.1,
    marginRight: 20,
  },
  search: {
    marginRight: 10,
  },
  select: {
    minWidth: 80,
  },
});
