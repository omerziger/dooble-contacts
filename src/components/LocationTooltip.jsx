import React, { useState } from 'react';
import {
  ClickAwayListener,
  makeStyles,
  MenuItem,
  Tooltip,
} from '@material-ui/core';
import { IoMdGlobe } from 'react-icons/io';
import { IoHome, IoLocationSharp } from 'react-icons/io5';
import { FaCity } from 'react-icons/fa';
import { BsSignpostSplitFill } from 'react-icons/bs';

export default function LocationTooltip(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handlePinClick = () => setOpen(!open);
  const handleTooltipClose = () => setOpen(false);

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        open={open}
        onClose={handleTooltipClose}
        arrow
        placement='left-start'
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
          <>
            <MenuItem disableGutters>
              <IoMdGlobe className={classes.icon} />
              {props.location.state}, {props.location.country}
            </MenuItem>
            <MenuItem disableGutters>
              <FaCity className={classes.icon} />
              {props.location.city}
            </MenuItem>
            <MenuItem disableGutters>
              <IoHome className={classes.icon} />
              {props.location.street.name} {props.location.street.number}
            </MenuItem>
            <MenuItem disableGutters>
              <BsSignpostSplitFill className={classes.icon} />{' '}
              {props.location.postcode}
            </MenuItem>
          </>
        }
      >
        <span className={classes.pin} onClick={handlePinClick}>
          <IoLocationSharp />
        </span>
      </Tooltip>
    </ClickAwayListener>
  );
}

const useStyles = makeStyles({
  pin: {
    zIndex: 1,
    position: 'absolute',
    bottom: '3%',
    fontSize: 20,
    alignSelf: 'flex-end',
    cursor: 'pointer',
    color: '#D90043',
    transition: '0.18s ease',
    '&:hover': {
      transform: 'scale(1.5)',
    },
  },
  icon: {
    marginRight: 6,
  },
});
