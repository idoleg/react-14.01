import React from 'react';
import PropTypes from "prop-types";
import MessageField from './MessageFiled';
import ChatList from './ChatList';
import Header from './Header';
import '../styles/layout.css';

export default class Layout extends React.Component {
   static propTypes = {
       chatId: PropTypes.number,
   };

   static defaultProps = {
       chatId: 1,
   };

   render() {
       return (
           <div className="layout-chat">
               <Header chatId={ this.props.chatId } />
               <div className="layout-canvas">
                   <div className="layout-left-side">
                       <ChatList />
                   </div>
                   <div className="layout-right-side">
                       <MessageField />
                   </div>
               </div>
           </div>
       )
   }
}
