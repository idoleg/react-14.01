import {handleActions} from 'redux-actions';
import {addChat, addMessage, fire, unfire, deleteMessage, clearChat, deleteChat, chatsRequest, chatsSuccess} from './chatAction';

const defaultState = {
    chats: {},
    isLoading: false,
};

export default handleActions ({
    [chatsRequest]: (state) => {
        return { 
            ...state,
            isLoading: true,
            nextChatId: 1,
        };
    },
    [chatsSuccess]: (state, {payload}) => {
        return { 
            ...state,
            isLoading: false,
            chats: payload,
            nextChatId: 4,
        };
    },
    [addMessage]: (state, {payload: {id, name, content}}) => {
        return {
            ...state,
            chats: {...state.chats, 
                [id]: {
                    name: state.chats[id].name, 
                    unread: state.chats[id].unread,
                    messages: [...state.chats[id].messages, {name, content}],
                },
            }
        };
    },
    [addChat]: (state, {payload: {name}}) => {
        return {
            ...state,
            chats: {...state.chats, 
                [state.nextChatId]: { 
                    name: name,
                    unread: 0,
                    messages: [],
                },
            },
            nextChatId: state.nextChatId + 1,
        };
    },
    [fire]: (state, {payload: {id}}) => {
        return {
            ...state,
            chats: {...state.chats, 
                [id]: { 
                    name: state.chats[id].name,
                    messages: [...state.chats[id].messages],
                    unread: state.chats[id].unread + 1,
                },
            }
        };
    },
    [unfire]: (state, {payload: {id}}) => {
        if (!state.chats[id]) return state;
        return {
            ...state,
            chats: {...state.chats, 
                [id]: { 
                    name: state.chats[id].name,
                    messages: [...state.chats[id].messages],
                    unread: 0,
                },
            }
        };
    },
    [deleteMessage]: (state, {payload: {id, index}}) => {
        // console.log('CHAT REDUCER - DELETE MESSAGE!');
        return {
            ...state,
            chats: {...state.chats, 
                [id]: {
                    name: state.chats[id].name,
                    unread: state.chats[id].unread,
                    messages: state.chats[id].messages.slice (0,index).concat (state.chats[id].messages.slice (index + 1)),
                },
            }   
        };
    },
    [clearChat]: (state, {payload: {id}}) => {
        return {
            ...state,
            chats: {...state.chats, 
                [id]: {
                    name: state.chats[id].name,
                    unread: state.chats[id].unread,
                    messages: [],
                },
            }   
        };
    },
    [deleteChat]: (state, {payload: {id}}) => {
        const stateCopy = {...state};
        delete stateCopy.chats[id];
        return {
            ...stateCopy,
        };
    },
}, defaultState);