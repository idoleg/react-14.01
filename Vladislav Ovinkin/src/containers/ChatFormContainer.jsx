import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMessage } from '../store/chatAction';
import { ChatForm } from '../components/ChatForm/ChatForm';

const mapStateToProps = ({chatReducer}) => ({
    // chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addMessage
    }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, {id}) => {
    return {
        ...stateProps,
        onSendMessage: ({name, content}) => dispatchProps.addMessage (id, name, content),
    }
}

export default connect (mapStateToProps, mapDispatchToProps, mergeProps) (ChatForm);