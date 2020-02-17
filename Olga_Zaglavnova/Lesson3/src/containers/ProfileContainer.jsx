import React, {Component} from 'react';
import {Profile} from '../components/Profile/Profile';
//import {bindActionCreators} from 'redux';
//import {loadChats} from "../store/chatAction";
import {loadChats} from '../store/asyncChatAction';

import {connect} from 'react-redux';

//class ProfileContainer extends Component {}

const mapStateToProps=({chatReducer}, props)=>{
    const {id} = props;
    return {
        chat: id ? chatReducer.chats[id] : null,
    };
};

const mapDispatchToProps=(dispatch)=>{
    //   return bindActionCreators({loadChats}, dispatch)
    return {};
};

const mergeProps =(stateProps, dispatchProps, props) => {
    const {id} = props;
    return {
        ...stateProps
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Profile);