import {useState, useRef, FC, useEffect} from 'react';
import style from './form.module.less';
import {UserInterface} from 'src/common-types';
import {iMessage} from "src/components/Chat/Message/types";
import {Button, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import Dialog from '@mui/material/Dialog';

interface FormProps {
    chatId: string,
    addMessage: (chatId: string, msg: iMessage) => void;
}

const Me: UserInterface = {
    name: 'User',
    avatar: 'https://picsum.photos/id/18/100',
};

export const Form: FC<FormProps> = ({chatId, addMessage}) => {
    const [message, setMessage] = useState('');
    const textarea = useRef<HTMLTextAreaElement>(null);
    const [open, setOpen] = useState(false);

    const setFocus = () => {
        if (textarea && textarea.current) {
            textarea.current.focus();
        }
    }

    useEffect(() => setFocus, [])

    const handleClick = () => {

        if (message.length === 0) {
            setOpen(true);
        }
        else {
            addMessage(chatId, {
                author: Me,
                text: message
            });

            if (textarea && textarea.current) {
                setMessage('');
                setFocus();
            }
        }
    };

    const handleCloseError = () => {
        setOpen(false);
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

            <Dialog
                open={open}
                onClose={handleCloseError}
            >
                <DialogTitle id="alert-dialog-title">
                    Внимание!
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Введите сообщение!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseError}>Закрыть</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
