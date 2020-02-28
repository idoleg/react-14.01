import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './ChatForm.css'

export class ChatForm extends Component {
    state = {
        name: 'userName',
        message: ''
    }

    handleInput = ({currentTarget: {value}}) => {
        this.setState({message: value});
    }

    handleClick = () => {
        const {name, message} = this.state;
        this.props.onSendMessage({name, message});
        this.setState({message: ''})
    }

    handleEnter = (event) => {
        if (event.key === 'Enter') {
            const {name, message} = this.state;
            this.props.onSendMessage({name, message});
            this.setState({message: ''})
        }
    }

    render() {
        return (
            <div className='ChatForm'>
                <span>{this.state.name}</span>
                <TextField variant='filled' autoFocus value={this.state.message} onChange={this.handleInput} onKeyPress={this.handleEnter}/>
                <Button variant='outlined' onClick={this.handleClick} id='sendMessageButton'>Send</Button>
            </div>
        )
    }
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired
}