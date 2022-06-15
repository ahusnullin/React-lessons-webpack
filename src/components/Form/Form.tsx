import {useState, useRef, FC, useEffect} from 'react';
import style from './form.module.less';
import {UserInterface} from 'src/common-types';
import {iMessage} from "src/components/Message/types";

interface FormProps {
    sendMessage: (msg: iMessage) => void;
}

const Me: UserInterface = {
    name: 'User',
    avatar: 'https://picsum.photos/id/18/100',
};

export const Form: FC<FormProps> = ({sendMessage}) => {
    const [message, setMessage] = useState('');
    const textarea = useRef<HTMLTextAreaElement>(null);

    const setFocus = () => {
        if (textarea && textarea.current) {
            textarea.current.focus();
        }
    }

    useEffect(() => setFocus, [])

    const handleClick = () => {
        sendMessage({
            author: Me,
            text: message
        });
        if (textarea && textarea.current) {
            setMessage('');
            setFocus();
        }
    };

    return (
        <div className={style.form_wrapper}>
      <textarea
          placeholder="Введите сообщение"
          ref={textarea}
          data-testid="form-textarea"
          onChange={(e) => {
              setMessage(e.target.value);
          }}
          value={message}
      > </textarea>
            <button className="test" type="button" onClick={handleClick}>
                Отправить
            </button>
        </div>
    );
};
