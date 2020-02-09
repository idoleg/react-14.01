import React from "react";
import {bindActionCreators} from "redux";
import {loadChats} from "../store/chatAction";
import {userNameAction} from "../store/userAction"
import {connect} from "react-redux";
import {Header} from "../components/Header/Header"

const mapStateToProps = ({chatReducer, userReducer}) => {
    console.log("infoId:", chatReducer.activeChatId);
    return {
        messengerInfo: {
          userName: userReducer.userName,
          chatName: chatReducer.chats[1].name,
      }
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadChats, userNameAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
