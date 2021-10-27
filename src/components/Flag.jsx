import React from 'react';
import ReactCountryFlag from 'react-country-flag';

export default function Flag(props) {
  return (
    <ReactCountryFlag
      countryCode={props.nat}
      style={{
        zIndex: 1,
        position: 'absolute',
        top: '3%',
        alignSelf: 'flex-end',
        fontSize: 26,
      }}
    />
  );
}
