import {bindActionCreators} from "redux";
import {loadChatList, loadChats} from "../store/chatAction";
import {connect} from "react-redux";
import {ChatList} from "../components/ChatList/CharList";

const mapStateToProps = ({chatReducer}) => {
    return {
        chatsInfo: chatReducer.chats
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadChats, loadChatList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
