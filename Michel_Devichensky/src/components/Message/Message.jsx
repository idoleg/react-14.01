import './Message.css'

import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

/**
 * Component сообщение
 * @param {string} name - имя пользователя.
 * @param {string} content - сообщение пользователя.
 * @method [<classname>] classname - библиотека для добавления или подстаки класса от условия.
 */
export const Message = ({ name, content }) => {
  const className = classname('Message',{ 'Message--robot': name === 'Robot' })
  return (<div className={className}><strong>{name}: </strong>{content}</div>);
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};