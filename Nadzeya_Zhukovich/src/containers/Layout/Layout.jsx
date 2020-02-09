import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {initStore} from "../../store/store";
import {Provider} from "react-redux";
import {loadChats} from "../../store/chatAction";
import {userNameAction} from "../../store/userAction"
import ChatContainer from '../ChatContainer';
import ProfileContainer from "../ProfileContainer";
import HeaderContainer from "../HeaderContainer";
import ChatListContainer from "../ChatListContainer"
import './Layout.scss';

const store = initStore();
store.dispatch(loadChats());
store.dispatch(userNameAction());
export class Layout extends React.Component {
    render() {
        return <Provider store={store}>
            <BrowserRouter>
                <div className={'layout-box'}>
                    <HeaderContainer/>
                    <div className={'chat-container row'}>
                        <ChatListContainer/>
                        <Switch>
                            <Route path={"/chats/"} exact component={ChatContainer}/>
                            <Route path={"/chats/:id"} exact component={ChatContainer}/>
                            <Route path={"/profile"} exact component={ProfileContainer}/>
                            <Route path={"/"}> It is index </Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    }
}
