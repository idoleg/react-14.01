import React, {Component} from 'react';
import {ChatContainer} from './ChatContainer';
import {ChatList} from '../components/ChatList/ChatList'

export class App extends Component {
    render() {
        return (
            <>
                <ChatList />
                <ChatContainer />
            </>
        ) 
    }
}