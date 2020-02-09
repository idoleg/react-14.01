import React from "react";
import PropTypes from 'prop-types';
import {ChatListItem} from '../ChatListItem/ChatListItem';

import './CharList.scss';

export const ChatList = ({chatsInfo}) =>
    (
        <nav className={'nav-bar'}>
            <ul className={'nav-bar-list'}>
                {
                    Object.values(chatsInfo).map((chat) =>
                        <li>
                            {console.log(chatsInfo)}
                            <ChatListItem chatName={chat.name}
                                          chatId={chat.id}
                            />
                        </li>
                    )
                }
            </ul>
        </nav>
    );

ChatList.propTypes = {
    chatsInfo: PropTypes.object,
}
