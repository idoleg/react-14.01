import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import './Header.scss';

export const Header = ({messengerInfo}) =>
    (
        <header className={'header row'}>
            <h1>{messengerInfo.chatName}</h1>
            <Link to="/profile/">{messengerInfo.userName}</Link>
        </header>
    );

Header.propTypes = {
    messengerInfo: PropTypes.object.isRequired,
};

/**
 * Component for drawing header of messenger
 * @param {String} chatName Name of opened chat
 */
