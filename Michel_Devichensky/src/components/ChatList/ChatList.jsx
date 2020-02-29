import {Input} from '@material-ui/core';
import Button from '@material-ui/core/Button';
/**
 * Component {'react'} [<useState>] Hooks
 */
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

// import PropTypes from 'prop-types';
// import { Message } from '../Message/Message';
/**
 * Возвращает html элкмент
 * @component {component - react-router-dom} [<Link>]
 * @function [<ChatList>] 
 * @param {Object} chats {id, name}
 * @example
 * ChatList({chats})
 * //=> <li key={id}><Link to={'/chats/'+id}>{name}</Link></li>
 */
export const ChatList = ({chats, addChat}) => {
const [chatName, setChatName] = useState('');
return (
    <div className='MessageField'>
        <ul>
           {chats.map(({id, name, unread}) => <li key={id}><Link to={'/chats/'+id}>{name}</Link> {unread && 'Новое сообщение'}</li>)}
           <li>
                <Input 
                    type='text' 
                    onChange = {({currentTarget: {value}}) => setChatName(value)}
                />
                <Button 
                    onClick = {() => addChat(chatName)}
                    variant="contained">add chat
                </Button>
            </li>
        </ul>
    </div>
)};
//https://ru.reactjs.org/docs/typechecking-with-proptypes.html
// MessageField.propTypes = {
//     messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes))
// };chatReducer.chats[id].messages[{name}]
