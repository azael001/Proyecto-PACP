import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeOptions } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#3c1cc9',
      light: '#5f43d6',
      dark: '#1f0a7b',
    },
    secondary: {
      main: '#c51162',
      light: '#d66197',
      dark: '#8c003e',
    },
    error: {
      main: '#e82424',
      light: '#ef5050',
      dark: '#bd3b3b',
    },
    warning: {
      main: '#f37106',
      light: '#e69a5b',
      dark: '#9e4a04',
    },
    info: {
      main: '#068ed8',
      light: '#229ee2',
      dark: '#85bad8',
    },
    success: {
      main: '#33c939',
      light: '#70c974',
      dark: '#0d8c12',
    },
  },
};
const theme = createTheme(themeOptions);

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <CssBaseline/>
      <App />
    </StrictMode>
  </ThemeProvider>
)
