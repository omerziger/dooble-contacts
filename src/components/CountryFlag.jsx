import React from 'react';
import Flag from 'react-world-flags';

export default function CountryFlag(props) {
  return (
    <Flag
      code={props.nat}
      style={{
        zIndex: 1,
        position: 'absolute',
        top: '3%',
        alignSelf: 'flex-end',
        height: 20,
        width: 20
      }}
    />
  );
}
