import React from 'react';
//import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import "./ChatListItem.css";
import {switchPage} from "../../store/chatAction";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export const ChatListItem =({chat, id, handleSwitchPage, handleDeleteChat}) => {
    const linkPath = '/chats/'+chat.name;
    const classNameStr = "ChatListItem__avatar" + chat.botAnswers ? chat.botAnswers : "";
    const handleOnClick=(e) => {
            handleSwitchPage({id, linkPath})
    };
    const onRightMouseBtnClick = (e) => {
        e.preventDefault();
        if (confirm('Удалить чат ' + chat.name + "?", "Удаление чата")) {
            handleDeleteChat(id);
        }
    //     const confirmAnswer = confirm('Удалить чат ' + chat.name + "?", "Удаление чата");
    //     console.log("ChatListItem ", confirmAnswer);
    //     return false;
     };
    const liClassName = "ChatListItem__item " + chat.isActive;
    return (
        <>
            <li className={liClassName} onClick={handleOnClick} onContextMenu={onRightMouseBtnClick}>
                <Avatar alt={chat.name} src={chat.userAvatar} className={classNameStr} />
                <div className="ChatListItem__text">{chat.name}</div>
            </li>
            <Divider variant="inset" component="li" />
        </>
        // <>
        //     <Link onClick={() => handleNavigate(linkPath)}>
        //         <ListItem name={chat.name} alignItems="flex-start" >
        //             <ListItemAvatar>
        //                 <Avatar alt={chat.name} src={chat.userAvatar} className={classNameStr} />
        //             </ListItemAvatar>
        //             <ListItemText
        //                 primary={chat.name}
        //             />
        //         </ListItem>
        //     </Link>
        //     <Divider variant="inset" component="li" />
        // </>

    );
};

ChatListItem.propTypes={
    //user: PropTypes.shape.isRequired,
};