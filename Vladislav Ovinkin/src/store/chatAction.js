import {createActions} from 'redux-actions'; // необходима для более лаконичной и удобной записи actions
import {createAction} from 'redux-api-middleware';

export const {addChat, addMessage, fire, unfire, deleteChat, deleteMessage} = createActions ({
    // LOAD_CHATS: () => ({}),
    ADD_CHAT: (name) => ({name}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
    DELETE_CHAT: (id) => ({id}),
    DELETE_MESSAGE: (id, index) => ({id, index}),
});

export const chatsRequest = '@@chats/CHATS_REQUEST';
export const chatsSuccess = '@@chats/CHATS_SUCCESS';
export const chatsFailure = '@@chats/CHATS_FAILURE';

export const loadChats = () => createAction({
    endpoint: '/api/chats.json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
        chatsRequest,
        chatsSuccess,
        chatsFailure,
    ]
})