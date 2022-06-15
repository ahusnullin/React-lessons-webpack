import style from './message.module.less';
import { FC } from 'react';
import {iMessage} from "src/components/Message/types";

interface MessageProps {
  data: iMessage;
  key: number;
}

export const MessageList: FC<MessageProps> = ({ data }) => {
  return (
    <div className={style.message} data-testid="message-item">
      <div className={style.avatar}>
        <img src="https://picsum.photos/id/18/100" alt="" />
      </div>
      <div className={style.text}>
        <div className={style.author_name}>{data.author.name}</div>
        {data.text}
      </div>
    </div>
  );
};
