import React from 'react';
import MessageListContainer from '../../containers/MessageListContainer';
import ChatFormContainer from '../../containers/ChatFormContainer';
import './Chat.css';

/**
 *  Компонент объединения формы отправки нового сообщения и области отображения сообщений чата
 */
export const Chat = ({id}) =>
    (<div className="chat">
        <MessageListContainer id={id} />
        <ChatFormContainer id={id} />
    </div>);