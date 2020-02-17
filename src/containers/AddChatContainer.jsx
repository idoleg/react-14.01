import React from 'react';
import {AddChat} from '../components/AddChat/AddChat';
import {bindActionCreators} from 'redux';
import {addChat} from '../store/chatAction';
import {connect} from 'react-redux';

const getCurrentTime=()=>{
    const currDate=new Date();
    return currDate.toTimeString().slice(0,8);
};

const mapStateToProps=({chatReducer}, props)=>{
    const {id} = props;
    return {
        chatKeys: Object.keys(chatReducer.chats)
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({addChat}, dispatch);
};

const mergeProps =(stateProps, dispatchProps, props) => {
    const {id} = props;
    return {
        ...stateProps,
        addNewChat: ({name, messages, userAvatar}) => {
            messages[0].time = getCurrentTime();
            dispatchProps.addChat(name, messages, userAvatar)
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddChat);