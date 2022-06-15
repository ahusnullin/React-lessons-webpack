import { FC, useEffect, useState } from 'react';
import { MessageList } from './components/Message/MessageList';

import style from './app.module.less';
import { Form } from './components/Form/Form';
import {
  Container,
  Grid,
  Button, CssBaseline,
} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {iRoom} from "src/components/RoomsList/types";
import {iMessage} from "src/components/Message/types";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import {nanoid} from "nanoid";
import {RoomsList} from "src/components/RoomsList/RoomsList";


export const App: FC = () => {
  const [messagesList, setMessagesList] = useState<iMessage[]>([]);
  const [roomsList, setRoomsList] = useState<iRoom[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const defaultRoom: iRoom = {
    id: '1',
    name: 'Общий чат'
  }

  // инициализируем чат по умолчанию
  useEffect(() => {
    setRoomsList(
        [
            ...roomsList,
            defaultRoom
        ]
    );
  }, []);

  useEffect(() => {
    setMessagesList([
      {
        author: {
          name: 'Ваня',
          avatar: 'https://picsum.photos/id/18/100',
        },
        text: 'Привет от Вани!',
      },
      {
        author: {
          name: 'Вася',
          avatar: 'https://picsum.photos/id/10/100',
        },
        text: 'Привет от Васи!',
      },
      {
        author: {
          name: 'Петя',
          avatar: 'https://picsum.photos/id/15/100',
        },
        text: 'Привет от Пети!',
      },
      {
        author: {
          name: 'Света',
          avatar: 'https://picsum.photos/id/19/100',
        },
        text: 'Привет от Светы!',
      },
    ]);
  }, []);

  useEffect(() => {
    if (
      messagesList.length &&
      messagesList.slice(-1)[0]?.author.name !== 'Bot'
    ) {
      setTimeout(() => {
        setMessagesList([
          ...messagesList,
          {
            author: {
              name: 'Bot',
              avatar: 'https://picsum.photos/id/10/100',
            },
            text: `Это автоматический ответ для: ${
              messagesList.slice(-1)[0]?.author.name
            }`,
          },
        ]);
      }, 1500);
    }
  }, [messagesList]);

  const sendMessage = (messageObj: iMessage) => {
    setMessagesList([...messagesList, messageObj]);
  };

  const darkTheme = createTheme({
    palette: {
      mode: isDarkTheme ? 'dark' : 'light',
    },
  });

  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <h1 data-testid="chat-header">Наш чат</h1>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <RoomsList roomsList={roomsList} />
              <hr/>
              <Button variant="contained" disableElevation onClick={() => setRoomsList(
                  [
                    ...roomsList,
                    {
                      id: nanoid(),
                      name: 'Новый чат #' + roomsList.length,
                    }
                  ]
              )}>
                + Добавить новый чат
              </Button>
              <br/><br/>

              <FormGroup>
                <FormControlLabel control={<Switch onChange={() => setIsDarkTheme(!isDarkTheme)}/>} label="Тёмная тема" />
              </FormGroup>
            </Grid>
            <Grid item xs={9}>
              <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="stretch"
              >
                <Grid>
                  {messagesList.map((data, index) => (
                      <MessageList data={data} key={index} />
                  ))}
                </Grid>
                <Grid>
                  <Form sendMessage={sendMessage} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
  );
};
