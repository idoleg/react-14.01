import './User.css'

import React from 'react';
import classname from 'classnames';

/**
 * Component сообщение
 * @param {string} name - имя пользователя.
 * @method [<classname>] classname - библиотека для добавления или подстаки класса от условия.
 */
export const User = ({ name }) => {
  // console.log(name)
  const className = classname('User',{ 'Name--robot': name === 'Robot' })
  return (<div className={className}><strong >{name} </strong></div>);
}
