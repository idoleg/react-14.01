import React from "react";
import PropTypes from 'prop-types';
import './CharList.scss';
import {Link} from "react-router-dom";

export const ChatList = ({nameChats}) =>
    (
        <nav className={'nav-bar'}>
            <ul className={'nav-bar-list'}>
                <li><Link to="/chats/1">Chat 1</Link></li>
                <li><Link to="/chats/2">Chat 2</Link></li>
                <li><Link to="/chats/3">Chat 3</Link></li>
            </ul>
        </nav>
    );

// ChatList.propTypes = {
//     nameChats: PropTypes.array,
// }
