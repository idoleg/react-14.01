import './UsersList.css'
import React from 'react';
import {User} from '../User/User'

export const UsersList = ({ messages }) => 
// console.log()
  (<div className='userContainer'>
    {messages.map((message, index) => <User {...message} key={index}/>)}
  </div>)
