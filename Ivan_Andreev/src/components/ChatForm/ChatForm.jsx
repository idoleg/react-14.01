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

    render() {
        return (
            <div className='ChatForm'>
                <span>{this.state.name}</span>
                <TextField variant='filled' autoFocus value={this.state.message} onChange={this.handleInput}/>
                <Button variant='outlined' onClick={this.handleClick}>Send</Button>
            </div>
        )
    }
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired
}