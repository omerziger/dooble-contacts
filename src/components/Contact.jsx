import React from 'react';
import { Avatar, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';
import { FcPhone } from 'react-icons/fc';
import LocationTooltip from './LocationTooltip';
import CountryFlag from './CountryFlag';

export default function Contact(props) {
  const classes = useStyles(props);

  return (
    <Grid item className={classes.root} xs={12} md={4} lg={3}>
      <Paper
        className={classes.paper}
        style={props.highlight ? { background: '#FFEF5A' } : null}
      >
        <div className={classes.oval} />
        <CountryFlag nat={props.nat} />
        <LocationTooltip location={props.location} />
        <Avatar className={classes.avatar} src={props.avatar} />
        {props.gender === 'male' ? (
          <BsGenderMale color='blue' style={{ zIndex: 1 }} />
        ) : (
          <BsGenderFemale color='pink' style={{ zIndex: 1 }} />
        )}
        <Typography variant='h6' className={classes.name}>
          {`${props.firstName} ${props.lastName} (${props.age})`}
        </Typography>
        <Typography className={classes.email} variant='body1'>
          {<GoMail style={{ marginRight: 10 }} />}
          {props.email}
        </Typography>
        <Typography className={classes.phone} variant='body1'>
          {<FcPhone style={{ marginRight: 10 }} />}
          {props.phoneNumber}
        </Typography>
      </Paper>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    padding: 20,
    transition: '0.18s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  paper: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    padding: 10,
    height: 240,
    zIndex: -1,
    overflow: 'hidden',
  },
  oval: {
    position: 'absolute',
    zIndex: 0,
    height: '100%',
    width: '200%',
    top: '-60%',
    left: '-50%',
    borderRadius: '100%',
    backgroundSize: 'cover',
    background: (props) =>
      props.gender === 'male'
        ? 'linear-gradient(to right bottom, #26D0CE, #1A2980)'
        : 'linear-gradient(to right, #ec008c, #fc6767)',
  },
  avatar: {
    zIndex: 1,
    height: 90,
    width: 90,
    position: 'absolute',
    top: '10%',
    alignSelf: 'center',
  },
  name: {
    zIndex: 1,
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    alignContent: 'center',
    maxWidth: '95%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  email: {
    zIndex: 1,
    position: 'absolute',
    top: '65%',
    maxWidth: '95%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  phone: {
    zIndex: 1,
    position: 'absolute',
    top: '80%',
    display: 'flex',
    alignItems: 'center',
  },
});
