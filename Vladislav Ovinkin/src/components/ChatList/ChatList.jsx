import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './ChatList.css';

export const ChatList = ({pathId, listChat, addChat}) => {

    const [newName, setNewName] = useState ('NewChatName');

    const handleClickNewChat = () => {
        if (newName.length > 0) {
            addChat(newName);
            setNewName('');
        }
    };

    return (<div className="chatList">
        <ul>
            {listChat.map (({id, name, unread}) => 
            <li key={id} className={(+id === pathId ? 'li-current' : '') }>
                <Link to={'/chats/' + id} className="chatRow">
                    {name} {(unread != 0) ? <div className="chatUnread"> {unread} unread</div> : ''}
                </Link>
            </li>)}
        </ul>
        <div className="formAddNewChat">
            <TextField
                label="Новый чат"
                variant="outlined"
                size="small"
                value={newName}
                onChange={({currentTarget: {value}}) => setNewName (value)}/>
            <Button
                variant="contained"
                size="small"
                color="primary" 
                onClick={handleClickNewChat}>
                    Добавить
            </Button>
        </div>
    </div>);
};