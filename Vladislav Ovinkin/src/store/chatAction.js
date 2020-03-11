import {createActions} from 'redux-actions'; // необходима для более лаконичной и удобной записи actions
import {createAction} from 'redux-api-middleware';

export const {addChat, addMessage, fire, unfire, deleteMessage, clearChat, deleteChat, chatsRequest, chatsSuccess, chatsFailure} = createActions ({
    // LOAD_CHATS: () => ({}),
    ADD_CHAT: (name) => ({name}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
    DELETE_MESSAGE: (id, index) => ({id, index}),
    CLEAR_CHAT: (id) => ({id}),
    DELETE_CHAT: (id) => ({id}),
    CHATS_REQUEST: () => ({}),
    CHATS_SUCCESS: (data) => (data),
    CHATS_REQUEST: (error) => (error),
});

// export const chatsRequest = '@@chats/CHATS_REQUEST';
// export const chatsSuccess = '@@chats/CHATS_SUCCESS';
// export const chatsFailure = '@@chats/CHATS_FAILURE';

// export const loadChats = () => createAction({
//     endpoint: '/api/chats.json',
//     method: 'GET',
//     headers: { 'Content-Type': 'application/json' },
//     types: [
//         chatsRequest,
//         chatsSuccess,
//         chatsFailure,
//     ]
// })

export const loadChats = () => {
    return async (dispatch) => {
        try {
            dispatch (chatsRequest ());
            const result = await fetch ('/api/chats.json');
            dispatch (chatsSuccess (await result.json()));
        } catch (e) {
            dispatch (chatsFailure (e));
        }
    }
}