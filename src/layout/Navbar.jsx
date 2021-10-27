import React from 'react';
import { ReactComponent as Logo } from '../static/doobleContacts.svg';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import SearchInput from '../components/SearchInput';
import Filters from '../components/Filters';

export default function Navbar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} variant='outlined' position='fixed'>
      <Toolbar className={classes.toolBar} variant='dense'>
        <Logo className={classes.logo} />
        <SearchInput />
        <Filters />
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
});
