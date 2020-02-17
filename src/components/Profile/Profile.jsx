import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import {Header} from '../Header/Header';
import './Profile.css';
import { render } from 'react-dom';

export const Profile  = ({chat}) => {
    if (chat){
        return (<>
            <div className="Profile">
                <h3>PROFILE</h3>
                <Avatar alt={chat.name} src={chat.userAvatar} className="Profile__avatar"/>
                <h2>{chat.name}</h2>
                <p>Общее количество сообщений в чате: </p>
                {chat.messages.length}
            </div>
        </>);
    } else {
        return <div className="Layout__index"></div>
    }
};