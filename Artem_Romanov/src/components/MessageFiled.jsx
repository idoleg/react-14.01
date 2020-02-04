import React from 'react';
import { TextField, FloatingActionButton } from 'material-ui';
import SendIcon from 'material-ui/svg-icons/content/send';
import Message from './Message';
//Импортируем файл со стилями
import './MessageField.css'; 

//Кнопка отправки сообщения а так же сами сообщения в качестве дочерних элементов
export default class MessageField extends React.Component {
 //Храним тексты сообщений в массиве, добавляя к нему элементы
state = {
    messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }], input: '', //В input текст введенный пользователем
};

componentDidUpdate(prevProps, prevState) {
    if (prevState.messages.length < this.state.messages.length &&
    this.state.messages[this.state.messages.length - 1].sender !== 'bot') {// Если последний элемент в массиве равени имени автора, то запускаем ответ
        setTimeout(() =>
                this.setState({
                    messages: [ ...this.state.messages, {text: 'Не лезь ко мне, я занят', sender: 'bot'} ] }),
    1000);
    }
    }
    

//Отправка сообщений автора
// Передаем сообщение в качестве аргумента функции
    handleClick = (message) => {
        this.sendMessage(message)
    };
    //Регистрируем изменения в текстовом поле
        handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
     };
     //Обработчик отправки сообщений по enter
     handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
    };
    // Отправка сообщений
    sendMessage = (message) => {
        this.setState({messages: [ ...this.state.messages, {text: message, sender: 'me'} ],
            input: '',
        });
     };

//Рендер и запрос класса из Message
render() {
    const messageElements = this.state.messages.map((text, sender) =>      
     (<Message key={sender} text {...text}/>));
      
     return <div className="layout">
     <div className="message-field">
        { messageElements }
        </div>

        {/* Создаем текстовое поле для ввода сообщений и подключаем обработчик нажатия enter */}
                  <div style={ { width: '100%', display: 'flex' } }>
               <TextField
                   name="input"
                   fullWidth={ true }
                   hintText="Введите сообщение"
                   style={ { fontSize: '20px' } }
                   onChange={ this.handleChange }
                   value={ this.state.input }
                   onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
               />
               <FloatingActionButton 
                    onClick={ () => this.handleClick(this.state.input) }>
                   <SendIcon />
               </FloatingActionButton>
           </div>
       </div>

}
}

