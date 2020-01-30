import React from 'react';
import PropTypes from 'prop-types';

export const ChatForm = ({message, name, onSendMessage}) =>
    (
        <div>
            <input value={name} type="text"/>
            <textarea value={message}></textarea>
            <button>Send</button>
        </div>
    )

ChatForm.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired
}