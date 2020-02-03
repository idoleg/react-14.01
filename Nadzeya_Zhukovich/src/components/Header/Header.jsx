import React from "react";
import PropTypes from 'prop-types';
import './Header.scss';

export const Header = ({chatName}) =>
    (
        <header className={'header row'}>
            <h1>{chatName}</h1>
        </header>
    );

Header.propTypes = {
    chatName: PropTypes.string.isRequired,
};

/**
 * Component for drawing header of messenger
 * @param {String} chatName Name of opened chat
 */
