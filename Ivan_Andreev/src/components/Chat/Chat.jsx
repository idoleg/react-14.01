import React from 'react';
import PropTypes from 'prop-types';
import {MessageList} from '../MessageList/MessageList';
import {ChatForm} from '../ChatForm/ChatForm';
import './Chat.css'

export const Chat = ({messages, onSendMessage}) =>
    (
        <div className='Chat'>
            <MessageList messages={messages}/>
            <ChatForm onSendMessage = {onSendMessage}/>
        </div>
    );

Chat.propTypes = {
    onSendMessage: PropTypes.func.isRequired
}   