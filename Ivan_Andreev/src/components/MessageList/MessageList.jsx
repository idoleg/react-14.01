import React from 'react';
import PropTypes from 'prop-types';
import {Message} from "../Message/Message"
import './MessageList.css'

export const MessageList = ({ messages }) => 
    (messages.map((message, index) => <Message {...message} key={index} />))