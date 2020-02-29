import './MessageField.css'

import React from 'react';
import PropTypes from 'prop-types';
import { Message } from '../Message/Message';
/**
 * 
 * @param {string} messages - массив с обьектами, обьекты содержат имя пользователя и сообщение. 
 */
export const MessageField = ({ messages }) => 
// console.log(messages)
    (<div className='MessageField'>
        {messages.map((message, index) => <Message {...message} key={index}/>)}
    </div>);

//https://ru.reactjs.org/docs/typechecking-with-proptypes.html
MessageField.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
};