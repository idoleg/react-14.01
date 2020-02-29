/**
 * Устанавливаем библиотеку npm i redux-actions для удобной работы с actions.
 * @function [<createActions>] импортируем функцию из библиотеки 'redux-actions'.
 * создаем экшены LOAD_CHATS:, ADD_CHAT:, ADD_MESSAGE:
 */
import {createActions} from 'redux-actions';
/**
 * Импортируем из библиотеки функцию которая создаст action для обработки запросов.
 * @function [<createAction>]
 */
// import {createAction} from 'redux-api-middleware';

export const {addChat, addMessage, fire, unfire, chatsRequest, chatsSuccess, chatsFailure, usersList} = createActions({
    /**
     * Экшен иметирующий загрузку с сервера state приложения.
     *@function [<LOAD_CHATS:>] 
     *@param {object} {} - пустой обьект.
     */
    // LOAD_CHATS: () => ({}), loadChats
    /**
     * Экшен для добавления нового сообщения
     * @function [<ADD_CHAT:>] addChat
     * @param {string} name - имя чата.
     */
    ADD_CHAT: (name) => ({name}),
    /**
     * Экшен для добавления нового сообщения
     *@function [<ADD_MESSAGE:>] addMessage
     *@param {number} id - чата.
     *@param {string} name - имя отправителья.
     *@param {string} content - сообщение.
     */
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    /**
     * Action экшен добавляет делает unread: true.
     * @function [<FIRE>]
     * @param {number} id чата
     */
    FIRE: (id) => ({id}),
    /**
     * Action экшен добавляет делает unread: false.
     * @function [<UNFIRE>]
     * @param {number} id чата
     */
    UNFIRE: (id) => ({id}),
    /**
     * 
     */
    CHATS_REQUEST: () => ({}),
    /**
     * 
     */
    CHATS_SUCCESS: (data) => (data),
    /**
     * 
     */
    CHATS_FAILURE: (error) => (error),
    /**
     * 
     */
    USERS_LIST: (id, name) => ({id, name, content}),
});
// 1.0 Вариант для работе с серверном при помощи библиотеки 'redux-api-middleware'
// actions для работы с сервером.
// export const chatsRequest = '@@chats/CHATS_REQUEST'
// export const chatsSuccess = '@@chats/CHATS_SUCCESS'
// export const chatsFailure = '@@chats/CHATS_FAILURE'
// /**
//  * @function [<loadChats>] обертка 
//  * @function [<createAction>] создает обьект запроса на сервер
//  * endpoint: '/api/chats.json' - где спрашиваем.
//  * method: 'GET' - тип запроса.
//  * headers: { 'Content-Type': 'application/json' } - заголовки.
//  * 'Content-Type': - тип запроса.
//  * 'application/json' - формат ответа.
//  * types: [CHATS_REQUEST,CHATS_SUCCESS,CHATS_FAILURE] - запрос , успех , неудача.
//  */ 
// export const loadChats = () => createAction({
//   endpoint: '/api/chats.json',
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
//   types: [
//     chatsRequest,
//     chatsSuccess,
//     chatsFailure
//   ]
// })

// 2.0 Вариант для работы с сервером вроде популярный.
// redux-thunk: npm install --save redux-thunk
/**
 * 
 */
export const loadChats = () => {
    return async (dispatch) => {
        try {
            dispatch(chatsRequest())
            const result = await fetch('/api/chats.json');
            dispatch(chatsSuccess(await result.json()))
            // console.log(await result.json())
        }catch(e){
            dispatch(chatsFailure(e))
        }
    }
} 