import React from 'react';
import './Message.css'; 
//Отправка сообщение с одиним и тем же текстом по нажатию кнопки
export default class Message extends React.Component {
    render() {
        //Подключаем стили
        return <div className="message"
             //В зависимости от отправителя будет выравнивание
            style={{ alignSelf: this.props.sender === 'bot' ? 'flex-start' : 'flex-end' }}>
            <div>{ this.props.text }</div>
            <div className="message-sender">{ this.props.sender }</div>
            </div>
    }
 }

