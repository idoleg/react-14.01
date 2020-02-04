import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Message.css'

export const Message = ({name, message}) => {
    const classNames = classnames('Message', { 'Message--bot': name === 'Bot'})
    return <div className={classNames}><strong>{name}:</strong> {message}</div>
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}