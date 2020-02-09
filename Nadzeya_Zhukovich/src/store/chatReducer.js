import {handleActions} from 'redux-actions';
import {loadChats, addMessage, loadChatList, userNameAction} from "./chatAction";

const defaultState = {
    chats: {},
    profile: {}
};

export default handleActions({
    [loadChats]: (state) => {
        return {
            ...state,
            chats: {
                1: {
                    id: 1,
                    name: 'Chat 1',
                    messages: [
                        {name: 'Ivan', content: 'Hello! It is chat 1'},
                        {name: 'Oleg', content: 'Hi!'},
                        {name: 'Ivan', content: 'Bye!'},
                    ],
                },
                2: {
                    id: 2,
                    name: 'Chat 2',
                    messages: [
                        {name: 'Den', content: 'Hi from chat 2!'},
                        {name: 'Ivan', content: 'MMMM!'},
                        {name: 'Den', content: 'Cool'},
                    ],
                },
                3: {
                    id: 3,
                    name: 'Chat 3',
                    messages: [],
                }
            }
        }
    },

    [addMessage]: (state, {payload: {id, name, content}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name, // name of chat
                    messages: [
                        ...state.chats[id].messages,
                        {name, content},
                    ]
                },
            }
        }
    },

    [loadChatList]: (state) => {
        return {
            ...state
        }
    },

    [userNameAction]: (state) => {
        return {
            ...state,
            profile: {
                userName: 'Nadzeya',
            }
        }
    }
}, defaultState)
