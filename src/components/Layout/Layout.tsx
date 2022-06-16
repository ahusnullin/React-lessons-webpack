import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MainMenu } from 'src/components/MainMenu/MainMenu';
import { useState } from 'react';

export const Layout = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <FormGroup>
            <FormControlLabel
              style={{ justifyContent: 'center' }}
              control={<Switch onChange={() => setIsDarkTheme(!isDarkTheme)} />}
              label="Тёмная тема"
            />
          </FormGroup>
          <MainMenu />
          <Outlet />
        </Container>
      </ThemeProvider>
    </>
  );
};
