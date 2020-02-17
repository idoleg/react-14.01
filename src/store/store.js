import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import chatReducer from './chatReducer';
import switchPageMiddleware from "./switchPageMiddleware";
import botMiddleware from './botMiddleware';
import chatMiddleware from './chatMiddleware';
import addMiddleware from './addMiddleware';
import loadMiddleware from "./loadMiddleware";
import deleteChatMiddleware from "./deleteChatMiddleware";
import {createLogger} from 'redux-logger';
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {apiMiddleware} from 'redux-api-middleware';
import thunk from 'redux-thunk';

const persisitConfig = {
    key: "olgazmessenger",
    storage,
    stateReconciler: autoMergeLevel2,
    whiteList: ['chatReducer'],
};

export const history = createBrowserHistory();

const reducer = combineReducers({
    chatReducer,
    router: connectRouter(history),
});
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
const logger = createLogger();

export const initStore =(preloadedState = {}) => {
    const innitialStore = {};

    const store = createStore(
        persistReducer(persisitConfig, reducer),
        innitialStore,
        compose(applyMiddleware(routerMiddleware(history), logger, loadMiddleware, addMiddleware, deleteChatMiddleware, switchPageMiddleware, chatMiddleware, botMiddleware, apiMiddleware, thunk), devTools),
    );

    const persistor = persistStore(store);

    return {store, persistor};
    //return createStore(reducer, preloadedState, compose(applyMiddleware(logger, botMiddleware), devTools));
    //return createStore(reducer, preloadedState, compose(applyMiddleware(routerMiddleware(history), logger, loadMiddleware, addMiddleware, switchPageMiddleware, chatMiddleware, botMiddleware), devTools));
};