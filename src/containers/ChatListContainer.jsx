import React from 'react';
import {ChatList} from '../components/ChatList/ChatList';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {switchToAdd, switchPage, deleteChat} from "../store/chatAction";

//class ChatListContainer extends Component {}

const mapStateToProps=({chatReducer})=>{
    return {
        chats: chatReducer.chats,
    };
};

const mapDispatchToProps=(dispatch)=>{
    //return {}
    return bindActionCreators({switchToAdd, switchPage, deleteChat}, dispatch);
};

const mergeProps =(stateProps, dispatchProps) => {

    return {
        ...stateProps,
        switchToAdd: () => dispatchProps.switchToAdd(),
        handleSwitchPage:({id, linkPath}) => dispatchProps.switchPage(id, linkPath),
        handleDeleteChat: (id) => dispatchProps.deleteChat(id),
    }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);