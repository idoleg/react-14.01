import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { loadCSS } from 'fg-loadcss';
import TextField from '@material-ui/core/TextField';
import './NewMessage.css';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    root: {
        '& > .fa': {
            margin: theme.spacing(2),
        },
    },
}));

/**
 * Компонент отрисовки формы для ввода нового сообщения
 * @param {string} message - текст сообщения
 * @param {string} name - имя автора сообщения
 * @param {Function} onSubmitMessage - Функция оработчик события подтверждения отправки нового сообщения
 */
export const NewMessage =({userName, onSubmitMessage}) => {
    const [name, setName] = useState(userName);
    const [message, setMessage] = useState('My message');
    const [msgClass, setMsgClass] = useState('guest');

    const classes = useStyles();

    const textarea = useRef();

    useEffect(()=>{
        loadCSS(
            'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
            document.querySelector('#font-awesome-css'),
        );
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        onSubmitMessage({msgClass, name: userName, message});
        setMessage('');
        textarea.current.focus();
    };
    const handleKeyUp = (e) => {
        if(e.keyCode===13 && e.ctrlKey) sendMessage(e);
    };
    return <form onSubmit={sendMessage} className="newMessageForm">
        <label>
            <span className="newMessageForm__nameInput" >{userName}</span>
            <strong className="newMessageForm__doublepoints">: </strong>
            <TextField 
                className="newMessageForm__messageInput" 
                id="outlined-basic1" 
                label="Сообщение" 
                variant="outlined" 
                value={message} 
                onChange={({currentTarget: {value}})=>setMessage(value)}
                onKeyUp={handleKeyUp}
                multiline 
                autoFocus 
                ref={textarea}
            />
        </label>
        <Button
            variant="contained"
            color="primary"
            className={classes.button + ' newMessageForm__button'}
            endIcon={<Icon className="fa fa-paper-plane"></Icon>}
            onClick={sendMessage}>Отправить
        </Button>
    </form>;
};

NewMessage.propTypes={
    onSubmitMessage: PropTypes.func.isRequired
};
