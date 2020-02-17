import React from 'react';
import PropTypes from 'prop-types';
import {Message} from '../Message/Message';

/**
 * Компонент отрисовки всех сообщений
 * @param {array} messages Массив сообщений, каждое сообщение - объект {имя автора, текст, время}
 */
export const MessageList =({messages, handleDeleteMessage}) => {
    if (Array.isArray(messages)) {
        return (messages.map((message, index) => <Message {...message} handleDeleteMessage={handleDeleteMessage}
                                                          msgIdx={index} key={index}/>));
    } else {
        return null;
    }
};

//MessageList.propTypes={    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))};