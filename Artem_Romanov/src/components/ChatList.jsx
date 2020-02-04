import React from 'react';
import { List, ListItem } from 'material-ui/List';
import ContentSend from 'material-ui/svg-icons/content/send';
import "./Chatlist.css"

export default class ChatList extends React.Component {
    render() {
        return (
            <List className = "lists">
                <ListItem primaryText="Chat 1" leftIcon={<ContentSend />} />
                <ListItem primaryText="Chat 2" leftIcon={<ContentSend />} />
                <ListItem primaryText="Chat 3" leftIcon={<ContentSend />} />
            </List>
        )
    }
}
