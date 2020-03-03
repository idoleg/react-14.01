import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { addMessage } from '../../store/chatAction';
import './ChatForm.css';

/**
 *  Компонент с формой отправки нового сообщения
 */

export const ChatForm = ({onSendMessage}) => {

    const [name, setName] = useState ('User');
    const [content, setContent] = useState ('Message');

    const handleClick = () => {
        if (content.length > 0) {
            onSendMessage ({name, content});
            setContent('');
        }
    };

    const handleKeyUp = (event) => {
        if (event.ctrlKey && event.key == 'Enter') {
            handleClick();
        }
    };

    return (<div className="chatForm">
        <TextField
            className="chatFormUserName"
            label="Имя пользователя"
            variant="outlined"
            size="small"
            value={name}
            onChange={({currentTarget: {value}}) => setName (value)} />
        <TextField
            className="chatFormTextMessage"
            label="Текст (ctrl+Enter - для отправки)"
            variant="outlined"
            size="small"
            value={content}
            onChange={({currentTarget: {value}}) => setContent (value)}
            onKeyUp={handleKeyUp}
            autoFocus
            multiline />
        <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={handleClick}>Отправить</Button>
    </div>);
};

// const mapStateToProps = ({chatReducer}) => ({
//     chats: chatReducer.chats,
// });

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         addMessage
//     }, dispatch);
// };

// export default connect (mapStateToProps, mapDispatchToProps) (ChatForm);