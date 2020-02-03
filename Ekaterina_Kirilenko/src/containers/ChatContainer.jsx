import React, { Component } from "react";
import PropTypes from "prop-types";
import { Chat } from "../components/Chat/Chat";
import "./ChatContainer.css";

const ROBOT_NAME = 'Робот';

export class ChatContainer extends Component {
  static propTypes = {
    chatId: PropTypes.number.isRequired,
  };

  state = {
    chats: {
      1: {
        name: 'Chat 1',
        messages: [
          { author: "Катя", content: "Доброе утро!" },
          { author: "Робот", content: "Привет!" },
          { author: "Катя", content: "Как дела?" },
          { author: "Робот", content: "Нормально ))" },
        ],
      },
      2: {
        name: 'Chat 2',
        messages: [
          { author: "Катя", content: "Привет!" },
          { author: "Максим", content: "Привет))" },
        ],
      }, 
      3: {
        name: 'Chat 3',
        messages: [
          { author: "Робот", content: "Привет!" },
        ],
      },           
    }
  }

  componentDidMount() {
    
  }

  componentDidUpdate() {
    const { chats } = this.state;
    const id = this.props.chatId;

    if (id && chats[id]) {  
      const messages = this.state.chats[id].messages;    
      const lastMessage = messages[messages.length - 1];

      if (lastMessage && lastMessage.author !== ROBOT_NAME) {
        setTimeout(() => this.handleSendMessage(id)({ author: ROBOT_NAME, content: "Я робот! Это чат №" + id }), 1000);
      }
    }
  }

  handleSendMessage = (id) => (message) => {
    this.setState((state) => (
      {
        chats: {
          ...state.chats, 
          [id]: {
            name: state.chats[id].name, 
            messages: [
              ...state.chats[id].messages,
              message,
            ]
          },
        }
      }))
  }

  render() {
    const { chats } = this.state;
    const id = this.props.chatId; // получаем id чата

    if (id && chats[id]) {
      return <Chat {...{ messages: chats[id].messages, onSendMessage: this.handleSendMessage(id) }} />;
    } else {
      return <div className="no-selected-chat">Пожалуйста, выберите чат</div> 
      //логика должна быть вынесена в отдельный файл
    }
  }
}