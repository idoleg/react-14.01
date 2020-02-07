import React from "react";
import {Chat} from "../components/Chat/Chat";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {loadChats, addMessage} from "../store/chatAction";
//
// const ROBOT_NAME = 'Robot';
// class ChatContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
        //     dictionary: [
        //         {userMessage: 'Hello', answer: 'Hi! How are you?'},
        //         {userMessage: 'Ok', answer: 'It is great!'},
        //         {userMessage: 'Bye', answer: 'Bye!'},
        //     ]
        // };
        // this.timeoutState;
    // };

    // вызов загрузки чатов реализован в Layout.jsx
    // componentDidMount() {
    //     this.props.loadChats();
    // }

    // componentDidUpdate() {

        // const {id} = this.props.match.params;
        // const {chats} = this.state;
        // if(id && chats[id]){
        //     this.timeoutState = setTimeout(() => {
        //         const messages = this.state.chats[id].messages;
        //         if(messages.length > 0) {
        //             const lastMessage = messages[messages.length -1];
        //             if(lastMessage.name !== ROBOT_NAME) {
        //                 const lastUserAnswer = lastMessage.content;
        //                 const robotAnswer = this.robotAnswer(lastUserAnswer, 'I do not understand you.');
        //                 this.handleSentMessage({name: ROBOT_NAME, content: robotAnswer})
        //             }
        //         }
        //     }, 2000);
        // }
    // }

    // componentWillUnmount() {
    //     clearTimeout(this.timeoutState);
    // }

    // handleSentMessage = (id) => (message) => {
    //     this.props.addMessage(id, message.name, message.content);
    // }

    // robotAnswer(userMessage, defaultMessage) {
    //     const robotAnswer = this.state.dictionary.filter(data => data.userMessage.toLowerCase() === userMessage.toLowerCase());
    //     return robotAnswer.length > 0 ? robotAnswer[0].answer : defaultMessage;
    // }

//     render() {
//         const {messages, id, addMessage} = this.props;
//         if(messages){
//             return <Chat {...{messages: messages, onSentMessage: addMessage}}/>
//         } else {
//             return <span> Chat does not exist </span>
//         }
//     }
// }

const mapStateToProps = ({chatReducer}, {match}) => {
    const id = match.params.id;
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadChats, addMessage
    }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, {match}) => {
    const id = match.params.id;
    return {
        ...stateProps,
        onSentMessage: ({name, content}) =>
            dispatchProps.addMessage(id, name, content),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);
