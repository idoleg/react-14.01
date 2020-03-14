import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import { Profile } from '../Profile/Profile';
import { ConnectedRouter} from 'connected-react-router';
import { history } from '../../store/store';

export const Router = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/chats/" exact component={Layout} />
                <Route path="/chats/:id" exact component={Layout} />
                <Route path="/about">
                    It&#39;s about
                </Route>
                <Route path="/home">
                    It&#39;s home
                </Route>
                <Route path="/profile" exact component={Profile} />
                <Route path="/">
                    It&#39;s 404
                </Route>
            </Switch>
        </ConnectedRouter>
    );
};