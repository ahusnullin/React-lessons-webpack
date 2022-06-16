import SendIcon from '@mui/icons-material/Send';
import { iRoom } from 'src/components/Chat/RoomsList/types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import style from './rooms_list.module.less';

export interface iRoomsListProps {
  roomsList: iRoom[];
}

export const RoomsList: FC<iRoomsListProps> = ({ roomsList }) => {
  return (
    <div className={style.chat_name}>
      {roomsList.map((room, idx) => (
        <Link to={'/chats/' + room.id} key={idx}>
          {room.name}
        </Link>
      ))}
    </div>
  );
};
