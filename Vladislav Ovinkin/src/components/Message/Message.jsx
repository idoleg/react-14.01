import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Message.css';

export const Message = ({name, content, time, index, onDeleteMessage}) => {
    const classNames = classnames ('message', {'message--robot': name === 'chatBot'});

    const handleClick = () => {
        onDeleteMessage (index);
    }

    return (<div className={classNames}>
        <strong>
            <span className="messageUserName">{ name }</span>
            { time == undefined ?  '' : <small> [{time}]</small>}:
        </strong>
        <br/>&mdash; { content }
        <div onClick={handleClick}>
            X
        </div>
    </div>);
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    time: PropTypes.string,
};