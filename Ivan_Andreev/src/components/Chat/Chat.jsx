import React from 'react';
import PropTypes from 'prop-types';
import MessageList from '../MessageList/MessageList';
import ChatForm from '../ChatForm/ChatForm';

export const Chat = ({message, name, onSendMessage}) =>
    (
        <div>
            <MessageList messages={messages}/>
            <ChatForm {...{message, name, onSendMessage}}/>
        </div>
    );

Chat.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired
}