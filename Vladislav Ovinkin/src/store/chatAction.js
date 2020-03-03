import {createActions} from 'redux-actions'; // необходима для более лаконичной и удобной записи actions

export const {loadChats, addChat, addMessage, fire, unfire, deleteChat, deleteMessage} = createActions ({
    LOAD_CHATS: () => ({}),
    ADD_CHAT: (name) => ({name}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
    DELETE_CHAT: (id) => ({id}),
    DELETE_MESSAGE: (id, index) => ({id, index}),
});