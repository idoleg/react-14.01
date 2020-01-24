import React from "react";
import Message from "./Message";

export default class MessageList extends React.Component {
  render() {
    return this.props.messages.map((message, index) => (<Message name={message.name} content={message.content} key={index} />));
  }
}
