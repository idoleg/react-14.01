import React, {Component} from 'react';
import {Chat} from '../components/Chat/Chat'

const botName = 'Bot';
const defaultBotAnswer = 'Oh hi Mark!'
export class ChatContainer extends Component {
    state = {
        messages: [
            {name: "Ivan", message: "Hello!"},
            {name: "NeIvan", message: "Hehehe"},
        ],
        inputMessage: '',
        userName: 'currentUser'
    }

    componentDidUpdate() {
        const lastMessage = this.state.messages[this.state.messages.length -1];
        if (lastMessage.name != 'Bot') {
            this.handleSendMessage({name: botName, message: defaultBotAnswer})
        }
    }

    handleSendMessage = (message) => {
        this.setState((state) => ({messages: [...state.messages, message]}))
    }

    render() {
        const {messages, inputMessage, userName} = this.state;

        return <Chat {...{messages, message: inputMessage, name: userName, onSendMessage: this.handleSendMessage}} />
    }
}