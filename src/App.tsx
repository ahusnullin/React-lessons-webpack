import { FC, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from 'src/pages/Main/MainPage';
import { ProfilePage } from 'src/pages/Profile/ProfilePage';
import { ChatPage } from 'src/pages/Chat/ChatPage';
import { Layout } from 'src/components/Layout/Layout';
import { Error } from 'src/pages/Error/Error';
import { iRoom } from 'src/components/Chat/RoomsList/types';
import { iMessage, iMessagesList } from 'src/components/Chat/Message/types';
import {Provider} from "react-redux";
import {store} from "src/store";

const defaultMessages: iMessagesList = {
  default: [
    {
      author: {
        name: 'Вася',
        avatar: 'https://picsum.photos/id/10/100',
      },
      text: 'Привет от Васи!',
    },
  ],
};

export const App: FC = () => {
  const [chatList, setChatList] = useState<iRoom[]>([]);
  const [messagesList, setMessagesList] =
    useState<iMessagesList>(defaultMessages);

  const defaultRoom: iRoom = {
    id: 'default',
    name: 'Общий чат',
    messages: [],
  };

  // инициализируем чат по умолчанию
  useEffect(() => {
    setChatList([...chatList, defaultRoom]);
  }, []);

  const addChat = (newChat: iRoom) => {
    setChatList([...chatList, newChat]);
  };

  const addMessage = (chatId: string, newMessage: iMessage) => {
    setMessagesList({
      ...messagesList,
      [chatId]: [...(messagesList[chatId] || []), newMessage],
    });
  };

  const deleteChat = (chatId: string) => {
    setChatList(
      chatList.filter((room) => {
        return room.id !== chatId;
      })
    );

    setMessagesList({
      ...messagesList,
      [chatId]: [],
    });

    // todo: я хотел сделать редирект на главную страницу (default), но не нашёл решения.
    //  Использовать хуки не получается, т.к. роутер должен быть в родительском компоненте. Какие есть варианты решения?
  };

  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/" element={<MainPage/>}/>
              <Route path="chats">
                <Route
                    index
                    element={
                      <ChatPage
                          roomsList={chatList}
                          addRoom={addChat}
                          messagesList={messagesList}
                          addMessage={addMessage}
                          deleteChat={deleteChat}
                      />
                    }
                />
                <Route
                    path=":chatId"
                    element={
                      <ChatPage
                          roomsList={chatList}
                          addRoom={addChat}
                          messagesList={messagesList}
                          addMessage={addMessage}
                          deleteChat={deleteChat}
                      />
                    }
                />
              </Route>
              <Route path="profile" element={<ProfilePage/>}/>
              <Route path="*" element={<Error text="Страница не найдена"/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
  );
};
