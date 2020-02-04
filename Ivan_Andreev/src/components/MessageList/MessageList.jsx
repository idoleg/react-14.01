import React from 'react';
import PropTypes from 'prop-types';
import {Message} from '../Message/Message'
import './MessageList.css'

export const MessageList = ({ messages }) => (
    <div className='MessageList'>
            {messages.map((message, index) => <Message {...message} key={index} />)}
    </div>
);

MessageList.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
}