import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import chatReducer from './chatReducer';
import botMiddleware from './botMiddleware';
import chatMiddleware from './chatMiddleware';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import {apiMiddleware} from 'redux-api-middleware';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key: 'reactmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chatReducer'],
}

export const history = createBrowserHistory ();

const reducer = combineReducers ({
    chatReducer,
    router: connectRouter (history),
});

const logger =  createLogger ();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

const preloadedState = {};
const store = createStore (persistReducer (persistConfig, reducer), preloadedState, compose (applyMiddleware (routerMiddleware (history), logger, chatMiddleware, botMiddleware, apiMiddleware, thunk), devTools));
const persistor = persistStore (store);

export const initStore = () => {
    return { store, persistor };
};