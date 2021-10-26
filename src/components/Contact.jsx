import React from 'react';
import { Avatar, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { BsGenderFemale, BsGenderMale, BsTelephone } from 'react-icons/bs';
import { GoMail } from 'react-icons/go';

export default function Contact(props) {
  const classes = useStyles();

  return (
    <Grid className={classes.root} xs={4}>
      <Paper
        className={classes.paper}
        style={props.highlight ? { background: '#FFEF5A' } : null}
        elevation={0}
      >
        <div className={classes.detailContainer}>
          <Avatar src={props.avatar} className={classes.avatar} />
        </div>
        <div className={classes.detailContainer}>
          <Typography variant='h6'>
            {props.firstName} {props.lastName}
            {props.gender === 'male' ? (
              <BsGenderMale color='blue' />
            ) : (
              <BsGenderFemale color='pink' />
            )}
          </Typography>
        </div>
        <Typography variant='body1'>
          {<GoMail />} {props.email}
        </Typography>
        <Typography variant='body1'>
          {<BsTelephone />} {props.phoneNumber}
        </Typography>
      </Paper>
    </Grid>
  );
}

const useStyles = makeStyles({
  root: {
    padding: 20,
  },
  paper: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #DEDEDE'
  },
  detailContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatar: {
    height: 80,
    width: 80,
    textAlign: 'center',
  },
});
