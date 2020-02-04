import React, {Component} from "react";
import {Chat} from "../components/Chat/Chat";

const ROBOT_NAME = 'Robot';
export class ChatContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: {
                1: {
                    id: 1,
                    name: 'Chat 1',
                    messages: [
                        {name: 'Ivan', content: 'Hello! It is chat 1'},
                        {name: 'Oleg', content: 'Hi!'},
                        {name: 'Ivan', content: 'Bye!'},
                    ],
                },
                2: {
                    id: 2,
                    name: 'Chat 2',
                    messages: [
                        {name: 'Den', content: 'Hi from chat 2!'},
                        {name: 'Ivan', content: 'MMMM!'},
                        {name: 'Den', content: 'Cool'},
                    ],
                },
                3: {
                    id: 3,
                    name: 'Chat 3',
                    messages: [],
                }
            },

            dictionary: [
                {userMessage: 'Hello', answer: 'Hi! How are you?'},
                {userMessage: 'Ok', answer: 'It is great!'},
                {userMessage: 'Bye', answer: 'Bye!'},
            ]
        }
    }

    componentDidUpdate() {
        const {id} = this.props.match.params;
        const {chats} = this.state;
        if(id && chats[id]){
            setTimeout(() => {
                const messages = this.state.chats[id].messages;
                if(messages.length > 0) {
                    const lastMessage = messages[messages.length -1];
                    if(lastMessage.name !== ROBOT_NAME) {
                        const lastUserAnswer = lastMessage.content;
                        const robotAnswer = this.robotAnswer(lastUserAnswer, 'I do not understand you.');
                        this.handleSentMessage({name: ROBOT_NAME, content: robotAnswer})
                    }
                }
            }, 2000);
        }
    }

    handleSentMessage(message) {
        const {id} = this.props.match.params;
        console.log('handleSentMessage('+message+', '+id+')')
        // this.setState((state) => ({messages: [...state.messages, message]}))
        this.setState((state) => ({chats: {
            ...state.chats,
            [id]: {
                name: state.chats[id].name, // name of chat
                messages: [
                    ...state.chats[id].messages,
                    message,
                ]
            }}}))
    }

    robotAnswer(userMessage, defaultMessage) {
        const robotAnswer = this.state.dictionary.filter(data => data.userMessage.toLowerCase() === userMessage.toLowerCase());
        return robotAnswer.length > 0 ? robotAnswer[0].answer : defaultMessage;
    }

    render() {
        const {chats} = this.state;
        const {id} = this.props.match.params;

        console.log('massages:', chats[id].messages);
        console.log('id:', id);
        if(id && chats[id]){
            return <Chat {...{messages: chats[id].messages, onSentMessage: this.handleSentMessage.bind(this)}}/>
        } else {
            return <span> Chat does not exist </span>
        }

    }
}
