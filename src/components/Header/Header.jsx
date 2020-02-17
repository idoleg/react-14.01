import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';

import PushToggle from '../PushToggle/index';
import './Header.css';

export const Header =({id, chat}) => {
    if (id && chat){
        const linkPath = '/chats/'+id+'/profile';
        const headerAvatarClass = "Header__avatar "+ chat.botAnswers;
        return (
                <Link to={linkPath}>
                    <div className="Header">
                        <PushToggle />
                        <Avatar alt={chat.name} src={chat.userAvatar} className={headerAvatarClass} />
                        <div className="Header__name">{chat.name}</div>
                        
                    </div>
                </Link>);
    } else if (id && !chat){
        return (<div className="Header">
                    <PushToggle />
                    <div className="Header__name">{id}</div> 
                </div>);
    } else{
        return (<div className="Header"><PushToggle /></div>);
    }
};

// Header.propTypes={
//     chat: PropTypes.shape.isRequired,
// }