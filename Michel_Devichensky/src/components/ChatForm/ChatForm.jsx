import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
/**
 * Component - отрисовка поля отправки нового сообщения
 * @param {function} onSendMessage - обработчик отправки нового сообщения.
 * @param {string} name - имя пользователя.
 * @param {string} message - сообщение пользователя.
 */
export class ChatForm extends Component {
    state = {
        name: 'User',
        content: 'Message'
    }
    textarea = React.createRef();
    componentDidMount() {
        this.textarea.current.focus();
    }
    /**
     * function - обработчик события onChange.
     * @param {string} currentTarget: - поле события event.
     * @param {string} value - назначение на изменение стейта.
     * @param {string} name - наименование инпута.
     * @method [<setState>] - меняенм стейт полученного сообщения и инени пользователя.
     */
    handleInput = ({currentTarget: {value, name}}) => {
        // console.log(value);
        this.setState(() => ({[name]: value}))
    }
    handleClick = () => {
        const {name, content} = this.state;
        this.props.onSendMessage({name, content});
    }
    render() {
        return(
            <div>
                <TextField name='name' 
                    label="Standard" 
                    label="Name" 
                    value={this.state.name} 
                    onChange={this.handleInput} 
                    type='text'/>
                <TextField name='content' 
                    label="Standard" 
                    label="Message" 
                    autoFocus value={this.state.content} 
                    onChange={this.handleInput} 
                    ref={this.textarea}/>
                <Button 
                    onClick={this.handleClick} 
                    variant="contained">
                    send a message
                </Button>
                {/* <TextField name='name' 
                    label="Standard" 
                    label="Name" 
                    value={this.state.name} 
                    onChange={this.handleInput} 
                    type='text'/>
                <Button 
                    onClick={this.handleClick} 
                    variant="contained">
                    send a chat
                </Button> */}
            </div>
        );        
    }
}

ChatForm.propTypes = {
    message: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onSendMessage: PropTypes.func.isRequired
};