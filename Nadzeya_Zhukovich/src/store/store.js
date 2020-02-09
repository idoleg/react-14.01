import {combineReducers, createStore} from "redux";
import chatReducer from "./chatReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
    chatReducer,
    userReducer
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export const initStore = (preloadedState = {}) => {
    return createStore(reducer, preloadedState, devTools)
}
