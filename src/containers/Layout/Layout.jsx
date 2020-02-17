import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {CurrentChatFields} from "../CurrentChatFields/CurrentChatFields";
import {Profile} from "../../components/Profile/Profile";
import {Header} from "../../components/Header/Header";
import ChatListContainer from "../ChatListContainer";
import AddChatContainer from "../AddChatContainer";
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../../store/store';
//REDUX
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import {loadChats, addMessage} from "../../store/chatAction";
// import {addMessage} from "../../store/chatAction";
// import {loadChats} from "../../store/asyncChatAction";

import "./Layout.css";

const avatarsPath = "/src/components/ChatList/img/";

// const RobotClass = "robot";
// const robotAnswers = ["Вот это да!", "ЗдОрово!", "Ишь ты!", "Да ты молодец!", "Очень интересно!"];

//store.dispatch();

class Layout extends Component{

    addChat =(newUserName)=> {
        console.log(newUserName);
        
        const {chats} = this.state;

        const newChat = {name: newUserName, 
                          messages: [],
                          userAvatar: "/src/components/ChatList/img/chatList_icon.png"
                        };
        
        // this.setState((state) => ({chats: {...state.chats, 
        //     [newUserName]:newChat}
        // }));

        this.setState({chats: {...chats, 
                [newUserName]:newChat}
            });
        
        console.log(this.state.chats);
    };
    componentDidMount(){
        //this.props.loadChats();
    };
    render(){
        const {chats} = this.props;
        return (
            <ConnectedRouter history={history}>
                <div  className="Layout">
                    <ChatListContainer />
                    <Switch>
                        <Route exact path="/">
                            <Header />
                            <div className="Layout__index">
                                Welcome to my first ReactJS chat
                            </div>
                        </Route>
                        <Route exact path="/chats/add" render={(props) => (
                            <>
                                <Header id="Добавление нового чата"/>
                                <AddChatContainer />
                            </>
                        )} />
                        <Route path="/chats/:id" component={CurrentChatFields} />
                        <Route path="/">
                            Page is not found
                        </Route>
                    </Switch>
                </div>
        </ConnectedRouter>);
    }
};

const mapStateToProps=({chatReducer})=>{
    return {chats: chatReducer.chats}
};

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({loadChats, addMessage}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);