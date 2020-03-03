import React from 'react';
// import Message from '../Message/Message';
import MessageContainer from '../../containers/MessageContainer';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { addMessage } from '../../store/chatAction';
import './MessageList.css';

const MessageList = (props) => {
    const {id} = props;
    const {messages} = props.chats[id];

    return (<div className='messageList'>
        {messages.map ((message, index) => <MessageContainer {...message} key = {index} index={index} id={id} />)}
    </div>);
};

const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
});

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         addMessage
//     }, dispatch);
// };

export default connect (mapStateToProps) (MessageList);