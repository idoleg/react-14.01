import {createActions} from 'redux-actions'; // необходима для более лаконичной и удобной записи actions

export const {loadChats, addChat, addMessage, fire, unfire} = createActions ({
    LOAD_CHATS: () => ({}),
    ADD_CHAT: (name) => ({name}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
});