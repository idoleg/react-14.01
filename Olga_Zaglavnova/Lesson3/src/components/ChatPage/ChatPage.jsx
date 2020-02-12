import React, {useRef} from "react";
import PropTypes from "prop-types";
import ScrollableFeed from 'react-scrollable-feed';
import {MessageList} from '../MessageList/MessageList';
import {Message} from '../Message/Message';
import {NewMessage} from "../NewMessage/NewMessage";

import css from './ChatPage.css';

export const ChatPage = ({messages, userName, onSubmitMessage}) => {
    if (messages){
    return (
        <ScrollableFeed forceScroll className="container" >
            <MessageList messages={messages} />
            <NewMessage userName={userName} onSubmitMessage={onSubmitMessage} />
        </ScrollableFeed>
    )} else {
        return <span className="container">Вы не выбрали чат</span>
    }
};
// ChatPage.propTypes={
//     messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)).isRequired,
//     onSubmitMessage: PropTypes.func.isRequired
// }



