import {
  Button,
  FormControlLabel,
  FormGroup,
  makeStyles,
  MenuItem,
  Popper,
  Select,
  Slider,
  Tooltip,
} from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { IoFilter } from 'react-icons/io5';
import StoreContext from '../context/StoreContext';

function valueLabel(props) {
  return (
    <Tooltip arrow open={true} title={props.value} placement='bottom'>
      {props.children}
    </Tooltip>
  );
}

export default function Filters() {
  const classes = useStyles();
  const { store, setStore } = useContext(StoreContext);
  const [filterAnchor, setFilterAnchor] = useState(null);

  const handleFilterClick = (e) =>
    setFilterAnchor(filterAnchor ? null : e.currentTarget);

  const handleAgeChange = (e, val) => {
    setStore((prev) => ({ ...prev, filter: { ...prev.filter, age: val } }));
  };

  const handleGenderChange = (e) =>
    setStore((prev) => ({
      ...prev,
      filter: { ...prev.filter, gender: e.target.value },
    }));

  return (
    <>
      <Button endIcon={<IoFilter />} onClick={handleFilterClick}>
        Filter
      </Button>
      <Popper anchorEl={filterAnchor} open={Boolean(filterAnchor)}>
        <div className={classes.root}>
          <FormGroup row>
            <FormControlLabel
              label='Gender'
              labelPlacement='top'
              control={
                <Select
                  className={classes.select}
                  value={store.search.gender}
                  variant='outlined'
                  onChange={handleGenderChange}
                >
                  <MenuItem value={undefined}>All Genders</MenuItem>
                  <MenuItem value={'male'}>Male</MenuItem>
                  <MenuItem value={'female'}>Female</MenuItem>
                </Select>
              }
            />
            <FormControlLabel
              label='Age'
              labelPlacement='top'
              control={
                <Slider
                  className={classes.slider}
                  value={store.filter.age}
                  onChange={handleAgeChange}
                  valueLabelDisplay='auto'
                  ValueLabelComponent={valueLabel}
                />
              }
            />
          </FormGroup>
        </div>
      </Popper>
    </>
  );
}

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'relative',
    top: 9,
    background: '#F6F8FA',
    minHeight: 'fit-content',
    padding: 20,
    border: '1px solid #DCDCDC',
    borderTop: 'none',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  select: {
    width: 100,
    height: 40,
    marginRight: 20,
  },
  slider: {
    width: 120,
  },
});
