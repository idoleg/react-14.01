import {createActions} from "redux-actions";

export const {loadChats, addMessage} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
})
// ADD_MESSAGE: (id, name, content) => ({id:id, name:name, content:content})
// аналогичные записи только второй вариант более короткий,
