import {createActions} from "redux-actions";

export const {loadChats, addMessage, loadChatList} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    LOAD_CHAT_LIST: () => ({}),
})
// ADD_MESSAGE: (id, name, content) => ({id:id, name:name, content:content})
// аналогичные записи только второй вариант более короткий,
