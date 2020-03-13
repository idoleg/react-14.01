import React, { Component } from 'react';
import { Router } from '../components/Router/Router';
import { initStore } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { loadChats } from '../store/chatAction';

const {store, persistor} = initStore ();
store.dispatch (loadChats ());
export class App extends Component {
    
    componentWillUnmount () {
        console.log ('App unmount');
    }
    
    render () {
        return (
            <Provider store={store}>
                <PersistGate loading = { null } persistor = { persistor }>
                    <Router />
                </PersistGate>
            </Provider>
        );
    }  
}