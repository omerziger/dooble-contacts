import React, { useContext } from 'react';
import { ReactComponent as Logo } from '../static/doobleContacts.svg';
import {
  AppBar,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Toolbar,
} from '@material-ui/core';
import ContactsContext from '../context/ContactsContext';
import { IoIosSearch } from 'react-icons/io';

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
    <AppBar className={classes.root} variant='outlined' position='fixed'>
      <Toolbar className={classes.toolBar} variant='dense'>
        <Logo className={classes.logo} />
        <TextField
          className={classes.search}
          value={contacts.search.value}
          onChange={handleSearchChange}
          InputProps={{
            endAdornment: <IoIosSearch />,
          }}
          variant='outlined'
          size='small'
        />

        <Select
          className={classes.select}
          value={contacts.search.gender}
          variant='outlined'
          onChange={handleGenderChange}
        >
          <MenuItem value={undefined}>All Genders</MenuItem>
          <MenuItem value={'male'}>Male</MenuItem>
          <MenuItem value={'female'}>Female</MenuItem>
        </Select>
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles({
  root: {
    background: '#F6F8FA',
  },
  toolBar: {
    padding: '6px 20px',
    alignItems: 'center',
  },
  logo: {
    marginRight: 20,
  },
  search: {
    marginRight: 10,
  },
  select: {
    minWidth: 80,
    height: 40,
  },
});
