/**
 * импортируем из библиотеки 'redux' специальные функции.
 * @function [<createStore>] создает состояние.
 * @function [<combineReducers>] создает количество reducers.
 * @function [<applyMiddleware>] создает .
 * @function [<compose>] создает .
 */
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
/**
 * Импортируем из пакета 'redux-logger'
 * @function [<createLogger>] отслеживает изменение state и выводит в консоль. 
 */
import {createLogger} from 'redux-logger';
/**
 * Интеграции роутинга в Redux
 * @function [<routerMiddleware>] - специальная фунуция "промежуточный маршрутизатор" 
 * принемает аргумент history
 * подключается в createStore
 * @function [<connectRouter>] - специальная фунуция "подключение маршрутизатора"
 * принемает аргумент history
 * подключается в комбайн редусер
 */
import {routerMiddleware, connectRouter} from 'connected-react-router';
/**
 * Хранения истории навигации внутри Redux.
 * 
 */
import {createBrowserHistory} from 'history';
/**
 * 1.0 вариант для работы с сервером
 * библиотека для работы с сервером:npm i redux-api-middleware
 * @function [<apiMiddleware>] 
 */
import {apiMiddleware} from 'redux-api-middleware';
/**
 * 2.0 вариант для работы с сервером.
 * бибилиотека: redux-thunk: npm install --save redux-thunk
 * 
 */
import thunk from 'redux-thunk';
//------------------------------------------------------------------------------------------------------------------
import chatMiddleware from './chatMiddleware';
import botMiddleware from './botMiddleware';
import chatReducer from './chatReducer';  
//combineReducers фунуция которая содержит в себе обьект который содержит список редьюсеров.

export const history = createBrowserHistory();
const reducer = combineReducers({
    chatReducer,
    router: connectRouter(history),
});

const logger = createLogger();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
/**
 * @function [<initStore>] возвращает результат работы функции createStore
 * @function [<createStore>] создает состояние. принимает два параметра
 * @param {object} preloadedState предварительно загруженное состояние, пустой обьект.
 * @param {object} reduser в нем комбайн редусер.специальная функция в которую можно передавать много редьюсеров делая из них дерево.
 */
export const initStore = (preloadedState = {}) => {
    return createStore(reducer, preloadedState, compose(applyMiddleware(routerMiddleware(history), logger, chatMiddleware, botMiddleware, apiMiddleware, thunk),devTools))
}