import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteMessage } from '../store/chatAction';
import { Message } from '../components/Message/Message';

const mapStateToProps = ({chatReducer}) => ({
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        deleteMessage
    }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, {id, name, content, index}) => {
    return {
        ...stateProps,
        onDeleteMessage: (index) => dispatchProps.deleteMessage (id, index),
        name, content, index,
    }
}

export default connect (mapStateToProps, mapDispatchToProps, mergeProps) (Message);