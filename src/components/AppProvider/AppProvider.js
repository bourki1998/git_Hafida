import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo, red } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';

const Context = createContext();
const { Provider } = Context;

const reducer = (state, action) => {
  switch (action.type) {
    case 'direction':
      const newState = {
        ...state,
        direction: state.direction === 'ltr' ? 'rtl' : 'ltr'
      };
      return newState;
    case 'type':
      return { ...state, type: state.type === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [state, dispatch] = useReducer(reducer, {
    type: prefersDarkMode ? 'dark' : 'light',
    direction: 'ltr'
  });

  const theme = createTheme({
    direction: state.direction,
    palette: {
      mode: state.type,  // Use 'mode' instead of 'type' for MUI v5
      primary: indigo,
      secondary: red,
      error: red
    },
    typography: {
      headline: {
        fontSize: '1rem'
      },
      subtitle1: {
        fontSize: '0.8125rem'
      },
      button: {
        fontWeight: 400,
        textTransform: 'initial'
      },
      body1: {
        fontSize: '0.875rem'
      }
    },
    shape: {
      borderRadius: 4
    }
  });

  useEffect(() => {
    document.body.dir = state.direction;
  }, [state.direction]);

  return (
    <ThemeProvider theme={theme}>
      <Provider value={[state, dispatch]}>
        {children}
      </Provider>
    </ThemeProvider>
  );
};

export default AppProvider;
export const useAppState = () => useContext(Context);
