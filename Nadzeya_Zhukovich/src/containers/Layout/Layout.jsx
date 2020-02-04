import React, {Component} from "react";
import {ChatContainer} from '../ChatContainer';
import {Header} from '../../components/Header/Header';
import {ChatList} from "../../components/ChatList/CharList";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './Layout.scss';

export class Layout extends React.Component {
    render() {
        return <BrowserRouter>
            <div className={'layout-box'}>
                <Header chatName={'Test-1'}/>
                <div className={'chat-container row'}>
                    <ChatList/>
                    <Switch>
                        <Route path={"/chats/"} exact component={ChatContainer}/>
                        <Route path={"/chats/:id"} exact component={ChatContainer}/>
                        <Route path={"/home"}>
                            it is home
                        </Route>
                        <Route path={"/"}>
                            it is index
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    }
}
