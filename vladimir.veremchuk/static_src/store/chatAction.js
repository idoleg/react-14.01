import {createActions} from 'redux-actions';
import {createAction} from 'redux-api-middleware';

export const {addChat, addMessage} = createActions({
    //LOAD_CHATS: () => ({}),loadChats
    ADD_CHAT: (name) => ({name}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
});

export const chatsRequest = '@@chats/CHATS_REQUEST'
export const chatsSuccess = '@@chats/CHATS_SUCCESS'
export const chatsFailure = '@@chats/CHATS_FAILURE'

export const loadChats = () => createAction({
  endpoint: '/api/chats.json',
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
  types: [
    chatsRequest,
    chatsSuccess,
    chatsFailure
  ]
})