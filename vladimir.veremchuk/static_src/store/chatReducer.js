import {handleActions} from 'redux-actions';
import {chatsRequest, chatsSuccess, addChat, addMessage} from './chatAction.js';

const defaultState = {
    chats: {},
    isLoading: false,
};

export default handleActions({
    [chatsRequest] : (state) => {
        return {
            ...state,
            isLoading: true,
        };
            // chats: {
            //     1: {
            //         name: 'Chat 1',
            //         messages: [
            //             { name: "ChatBot", content: "Hello! It's ChatBot of room#1!" },
            //         ]
            //     },
            //     2: {
            //         name: 'Chat 2',
            //         messages: [
            //             { name: "ChatBot", content: "Hello! It's ChatBot of room#2!" },
            //         ]
            //     },
            //     3: {
            //         name: 'Chat 3',
            //         messages: [
            //             { name: "ChatBot", content: "Hello! It's ChatBot of room#3!" },
            //         ]
            //     }

            // }
      
    },
    [chatsSuccess] : (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            chats: payload,
        };
    },
    [addMessage] : (state, {payload: {id, name, content}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        {name, content},
                    ]
                },
            }
        }
    },
    [addChat]: (state, {payload: {name}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [name]: {
                    name: name,
                    messages: []
                },
            }
        };
    }
}, defaultState);
