import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

/**
 * Компонент по отрисовке поля с формой отправки нового сообщения
 * @param {string} message Текст сообщения
 * @param {string} author Имя отправителя
 * @param {Function} onSendMessage Обработчик отправки сообщения
 */

/* используем классы */
// export class ChatForm extends React.Component {
//   state = {
//     author: 'User',
//     content: 'Text',
//   }

//   textarea = React.createRef();
//   componentDidMount() {
//     this.textarea.current.focus();
//   }
//   handleInput = ({ currentTarget: { value, name } }) => {  
//     // то же что и event.currentTarget.value
//     console.log(name);
//     this.setState(() => ({[name]: value}))
//   }
//   handleClick = () => {
//     const { author, content} = this.state;
//     this.props.onSendMessage({ author, content });
//   }

//   render() {
//     return (<div>
//       <input name="author" value={this.state.author} onChange={this.handleInput} type="text" />
//       <textarea name="content" value={this.state.content} onChange={this.handleInput} ref={this.textarea} />
//       <button onClick={this.handleClick}>Отправить</button>
//       </div>);
//   }
// }

/* используем хуки */
export const ChatForm = ({ onSendMessage }) => {
  const [author, setName] = useState('User');
  const [content, setContent] = useState('Text');
  // const textarea = useRef();

  // useEffect(() => {
  //   textarea.current.focus();
  // }, [])

  const handleClick = () => {
    onSendMessage({ author, content });
  }

  return (
    <div>
      <TextField
        value={author}
        onChange={({ currentTarget: { value } }) => setName(value)}
        type="text"
        label="Имя"
        variant="outlined"
      />
      <TextField
        value={content}
        onChange={({ currentTarget: { value } }) => setContent(value)}
        label="Сообщение"
        variant="outlined"
        multiline
        autoFocus
      />
      <Button 
        onClick={handleClick} 
        variant="contained" color="primary">
        Отправить
      </Button>
    </div>
  ); 
}

ChatForm.propTypes = {
  onSendMessage: PropTypes.func.isRequired,
}