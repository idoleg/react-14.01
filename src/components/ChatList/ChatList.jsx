import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {ChatListItems} from '../ChatListItems/ChatListItems';
import './ChatList.css';
import {switchPage, switchToAdd} from "../../store/chatAction";

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

export const ChatList =({chats, switchToAdd, handleSwitchPage, handleDeleteChat}) => {
    const classes = useStyles();
    const ClickBtn = (e) => {
        switchToAdd();
    };
    return (
        <div className="ChatList">
            <ul className="ChatList__ul">
                <ChatListItems chats={chats} handleSwitchPage={handleSwitchPage} handleDeleteChat={handleDeleteChat} />
            </ul>
            <button className="ChatList__addBtn" onClick={ClickBtn}>+</button>
        </div>
        // <div className="ChatList">
        //     <List className={classes.root}>
        //         <ChatListItems chats={chats} handleNavigate={handleNavigate} />
        //     </List>
        //     <button className="ChatList__addBtn" onClick={ClickBtn}>+</button>
        // </div>
    );
};

// ChatList.propTypes={
//     userName: PropTypes.string.isRequired,
// }