import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './ChatList.css';

export const ChatList = ({pathId, listChat, addChat}) => {

    const [newName, setNewName] = useState ('NewChatName');

    const handleClick = () => {
        if (newName.length > 0) {
            let chatsId = [];
            listChat.forEach((item) => {
                chatsId.push (item.id); 
            });
            const newChatId = Math.max.apply(null, chatsId) + 1;

            addChat(newChatId, newName);
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
                onClick={handleClick}>
                    Добавить
            </Button>
        </div>
    </div>);
};