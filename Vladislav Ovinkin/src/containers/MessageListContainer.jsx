import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearChat, deleteChat } from '../store/chatAction';
import { MessageList } from '../components/MessageList/MessageList';

const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        clearChat,
        deleteChat,
    }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, {id}) => {
    return {
        ...stateProps,
        onClearChat: () => dispatchProps.clearChat (id),
        onDeleteChat: () => dispatchProps.deleteChat (id),
        id
    }
}

export default connect (mapStateToProps, mapDispatchToProps, mergeProps) (MessageList);