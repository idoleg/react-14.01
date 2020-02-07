import React, {Component} from "react";
import ChatContainer from '../ChatContainer';
import {Header} from '../../components/Header/Header';
import {ChatList} from "../../components/ChatList/CharList";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Profile} from "../../components/Profile/Profile";
import {initStore} from "../../store/store";
import {Provider} from "react-redux";
import {loadChats} from "../../store/chatAction";

import './Layout.scss';

const store = initStore();
store.dispatch(loadChats());

export class Layout extends React.Component {
    render() {
        return <Provider store={store}>
            <BrowserRouter>
                <div className={'layout-box'}>
                    <Header chatName={'Test-1'}/>
                    <div className={'chat-container row'}>
                        <ChatList/>
                        <Switch>
                            <Route path={"/chats/"} exact component={ChatContainer}/>
                            <Route path={"/chats/:id"} exact component={ChatContainer}/>
                            <Route path={"/profile"} exact component={Profile}/>
                            <Route path={"/"}> It is index </Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    }
}
