import React from 'react';
import ReactDOM from 'react-dom';

let messages = ['Привет', 'Как дела?'];

const MessageComponent = (props) => <div>{ props.text }</div>;

const MassageField = (props) => {
   return props.messages.map(message => <MessageComponent text={message} />);
};

function addItem() {
   messages.push('«Нормально»');
}

const Button = <button onClick={addItem}>Add</button>;

ReactDOM.render(
   <MassageField messages={ messages } />,
   document.getElementById('root')
);