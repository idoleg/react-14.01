import React from "react";
import ReactDom from "react-dom";

/*
const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi! How are you?"},
    {name: "Ivan", content: "Im fine!"}
]

const Message = ({name, content}) => <div><strong>{name}:</strong> {content}</div>;

function MessageList({messages}) {
    return messages.map((message) => <Message name={message.name} content={message.content}/>)
}

ReactDom.render(<MessageList messages={messages}/>, document.getElementById("root"));




//const root = docuument.getElementById("root");
//console.warn("Привет! Сейчас",(new Date).valueOf());
*/

import {Counter} from "./components/Counter";
import { App } from "./components/App";
import MessageField from "./components/MessageField";

//ReactDom.render(<App />, document.getElementById("root"));
ReactDom.render(<MessageField />, document.getElementById("root"));
