import {createStore} from 'redux';
import initReducers from '../reducers';

export const initStore = () => {
    const initialStore = {};

    return createStore(
        initReducers,
        initialStore,

        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
    );
}