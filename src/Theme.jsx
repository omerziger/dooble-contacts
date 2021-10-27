import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF5B23',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
  spacing: 4,
  shape: {
    borderRadius: 8,
  },
  props: {
    MuiPaper: {
      elevation: 4,
    },
    MuiTextField: {
      variant: 'outlined',
    },
    MuiMenuItem: {
      dense: true,
    },
  },
});

export default function Theme(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>{props.children}</CssBaseline>
    </ThemeProvider>
  );
}
