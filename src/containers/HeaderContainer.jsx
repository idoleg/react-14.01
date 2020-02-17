import React, {Component} from 'react';
import {Header} from '../components/Header/Header';
import {bindActionCreators} from 'redux';
import {loadChats} from '../store/chatAction';
// import {loadChats} from '../store/asyncChatAction';

import {connect} from 'react-redux';

const RobotClass = 'robot';

class HeaderContainer extends Component {}

const mapStateToProps=({chatReducer}, props)=>{

    const {id} = props;
    return {
        id,
        chat: id ? chatReducer.chats[id] : null,
    };
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadChats}, dispatch);
};

const mergeProps =(stateProps, dispatchProps, props) => {
    const {id} = props;
    return {
        ...stateProps
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Header);