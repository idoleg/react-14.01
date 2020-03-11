import React from 'react';
// import Message from '../Message/Message';
import MessageContainer from '../../containers/MessageContainer';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { addMessage } from '../../store/chatAction';
import './MessageList.css';

export const MessageList = (props) => {
    const {id} = props;
    const {messages} = props.chats[id];
    const {onClearChat, onDeleteChat} = props;

    const handleDeleteMessages = () => {
        console.log ('Clear all messages from chat with id=' + id);
        onClearChat();
    }

    const handleDeleteChat = () => {
        console.log ('Clear whole chat with id=' + id);
        onDeleteChat();
    }

    return (<div className='messageList'>
        {<div className='clearAllMessages' onClick={handleDeleteChat}>
            Удалить чат
        </div>}
        {messages.map ((message, index) => <MessageContainer {...message} key = {index} index={index} id={id} />)}
        {messages.length ?  <div className='clearAllMessages' onClick={handleDeleteMessages}>
                                Очистить чат
                            </div> : ''}
    </div>);
};

// const mapStateToProps = ({chatReducer}) => ({
//     chats: chatReducer.chats,
// });

// // const mapDispatchToProps = (dispatch) => {
// //     return bindActionCreators({
// //         addMessage
// //     }, dispatch);
// // };

// export default connect (mapStateToProps) (MessageList);