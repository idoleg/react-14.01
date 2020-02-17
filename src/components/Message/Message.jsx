import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Message.css';

/**
 * Компонент отрисовки Сообщения
 * @param {string} name Имя автора сообщения
 * @param {string} message Текст сообщения
 * @param {string} time Время отправки сообщения
 */
export const Message = ({msgClass, name, message, time, msgIdx, handleDeleteMessage}) => {
    const classNames = classnames('messageRow', {'messageRow--robot': msgClass==='robot'});
    const onRightMouseBtnClick = (e) => {
        e.preventDefault();
        if (confirm('Удалить сообщение от  ' + name + "?", "Удаление сообщения")) {
            handleDeleteMessage(msgIdx);
        }
    };
    return <div className={classNames} onContextMenu={onRightMouseBtnClick}><strong>{name}: </strong>{message} <span className="messageTime"> {time}</span></div>;
};

//let classStr = "messageRow " + this.props.msgClass;

Message.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    time: PropTypes.string,
};