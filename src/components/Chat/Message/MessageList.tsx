import style from './message.module.less';
import { FC } from 'react';
import {iMessage} from "src/components/Chat/Message/types";

interface MessageProps {
    messagesList: iMessage[]
}

export const MessageList: FC<MessageProps> = ({ messagesList }) => {


    return <div>
        {messagesList.length ?
            messagesList.map((data, index) => (
                <div className={style.message} data-testid="message-item" key={index}>
                    <div className={style.avatar}>
                        <img src="https://picsum.photos/id/18/100" alt=""/>
                    </div>
                    <div className={style.text}>
                        <div className={style.author_name}>{data.author.name}</div>
                        {data.text}
                    </div>
                </div>
            ))
            : 'Сообщений пока нет.'
        }
    </div>

};
