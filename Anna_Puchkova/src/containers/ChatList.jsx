import React, { Component } from "react";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom';
import { TextField } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import PropTypes from "prop-types";
import '../styles/styles.css';
import {List, ListItem} from 'material-ui/List';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import cn from 'classnames';
import { addChat } from '../actions/chatActions';

class ChatList extends React.Component {
  static propTypes = {
    chats: PropTypes.object.isRequired,
    addChat: PropTypes.func.isRequired,
  };
  state = {
    input: '',
  };

  handleChange = (event) => {
     const value = event.target.value;
     const name = event.target.name;

     this.setState({
         [name]: value
     });
  };

  handleKeyUp = (event) => {
      if (event.keyCode === 13) { // Enter
          this.handleAddChat();
      }
  };

  handleAddChat = () => {
      if (this.state.input.length > 0) {
          this.props.addChat(this.state.input);
          this.setState({ input: '' });
      }
  };

    render () {
      const { chats } = this.props;
      const chatStyle = cn({
        'listLink': true,
       //'activeChat': ,
      });
      
      const chatElements = Object.keys(chats).map(chatId => (

          <Link key={ chatId } to={ `/chat/${chatId}` } className={chatStyle} >
              <ListItem 
                  primaryText={ chats[chatId].title }
                  leftIcon={<CommunicationChatBubble  />}                   
              />
      </Link>));

      return (
          <List>
              { chatElements }
              <ListItem
                  key="Add new chat"
                  leftIcon={ <AddIcon /> }
                  onClick={ this.handleAddChat }
                  style={ { height: '60px' } }
                  children= {<TextField
                      key="textField"
                      fullWidth
                      name="input"
                      hintText="Add new chat"
                      onChange={ this.handleChange }
                      value={ this.state.input }
                      onKeyUp={ this.handleKeyUp }
                  />}
              />

          </List>
      )
   }
}

const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);
 
 export default connect(mapStateToProps, mapDispatchToProps)(ChatList);