import React from 'react';
import PropTypes from 'prop-types';
import './Message.css'


export const Message = ({name, content}) => {
    const classnames = classnames('Message', { 'Message--bot': name === 'Bot'})
    return <div className={classnames}><strong>{name}:</strong> {content}</div>
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}