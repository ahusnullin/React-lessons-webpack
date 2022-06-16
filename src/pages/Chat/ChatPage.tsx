import { Grid } from '@mui/material';
import { RoomsList } from 'src/components/Chat/RoomsList/RoomsList';
import { nanoid } from 'nanoid';
import { MessageList } from 'src/components/Chat/Message/MessageList';
import { Form } from 'src/components/Form/Form';
import { FC, useEffect } from 'react';
import { iMessage, iMessagesList } from 'src/components/Chat/Message/types';
import { iRoom } from 'src/components/Chat/RoomsList/types';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

interface iChatPageProps {
  roomsList: iRoom[];
  addRoom: (newChat: iRoom) => void;
  messagesList: iMessagesList;
  addMessage: (chatId: string, newMessage: iMessage) => void;
  deleteChat: (chatId: string) => void;
}

export const ChatPage: FC<iChatPageProps> = ({
  roomsList,
  addRoom,
  messagesList,
  addMessage,
  deleteChat,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatId &&
      messagesList[chatId]?.length &&
      messagesList[chatId].slice(-1)[0]?.author.name !== 'Bot'
    ) {
      const timeout = setTimeout(() => {
        addMessage(chatId, {
          author: {
            name: 'Bot',
            avatar: 'https://picsum.photos/id/10/100',
          },
          text: 'Это автоматический ответ',
        });
      }, 1500);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messagesList]);

  return (
    <>
      <h1 data-testid="chat-header">Наш чат</h1>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <RoomsList roomsList={roomsList} />
          <hr />
          <Button
            variant="contained"
            disableElevation
            onClick={() =>
              addRoom({
                id: nanoid(),
                name: 'Новый чат #' + roomsList.length,
                messages: [],
              })
            }
          >
            + Добавить новый чат
          </Button>
          <br />
          <br />
        </Grid>
        <Grid item xs={9}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
          >
            <Grid>
              <ButtonGroup
                variant="outlined"
                disabled={!chatId || chatId === 'default'}
                aria-label="outlined primary button group"
                style={{ float: 'right' }}
              >
                <Button
                  color="error"
                  onClick={() => {
                    chatId ? deleteChat(chatId) : null;
                  }}
                >
                  Удалить
                </Button>
              </ButtonGroup>
            </Grid>
            <Grid>
              <MessageList
                messagesList={
                  chatId && messagesList[chatId] ? messagesList[chatId] : []
                }
              />
            </Grid>
            <Grid>
              <Form chatId={chatId ? chatId : '1'} addMessage={addMessage} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
