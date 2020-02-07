import React from "react"
import PropTypes from 'prop-types'
import { MessageList } from "../MessageField/MessageList"
import { ChatForm } from '../ChatForm/ChatForm'
import { Message } from '../Message/Message'
import './Chat.css'

export const Chat = ({messages, sendMessage}) => 
    (<div className="Chat">
        <MessageList messages={messages}/>
        <ChatForm sendMessage={sendMessage}/>
    </div>)

Chat.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    sendMessage: PropTypes.func.isRequired
}