import {createActions} from "redux-actions";

export const {loadChats, addMessage, loadChatList, activeChat} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    LOAD_CHAT_LIST: () => ({}),
    ACTIVE_CHAT: (activeChatId) => ({activeChatId}),
})
// ADD_MESSAGE: (id, name, content) => ({id:id, name:name, content:content})
// аналогичные записи только второй вариант более короткий,
