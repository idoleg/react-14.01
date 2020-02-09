import React from "react";
import PropTypes from 'prop-types';
import './ChatListItem.scss';
import {Link} from "react-router-dom";

export const ChatListItem = ({chatName, chatId}) =>
    (
        <Link to={"/chats/"+chatId}>{chatName}</Link>
    );

ChatListItem.propTypes = {
    chatName: PropTypes.string,
    chatId: PropTypes.number,
}
