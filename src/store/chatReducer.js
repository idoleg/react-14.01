import {handleActions} from 'redux-actions';
import { addMessage, addChat, switchToAdd, changeClass, switchPage, setIsActive, deleteChat, deleteMessage, 
    chatsRequest, chatsSuccess} from './chatAction';

const defaultState={
    chats: {},
    isLoading: false,
};

const avatarsPath = '/src/components/ChatList/img/';
const robotClass = 'robot';

const getCurrentTime = () => {
    const currDate=new Date();
    return currDate.toTimeString().slice(0,8);
};

export default handleActions({
    [chatsRequest]:(state)=>{
        return {...state, 
            isLoading: true, 
            // chats: {
            //     'John': {
            //         name: 'John',
            //         messages: [{msgClass: robotClass, name:'Робот', message:'Привет, John! Как дела?', time: getCurrentTime()}],
            //         userAvatar: avatarsPath + 'chatList_icon1.png',
            //         botAnswers: '',
            //         isActive: ''
            //     },
            //     'David': {
            //         name: 'David',
            //         messages: [{msgClass: robotClass, name:'Робот', message:'Привет, David! Как дела?', time: getCurrentTime()}],
            //         userAvatar: avatarsPath + 'chatList_icon2.png',
            //         botAnswers: '',
            //         isActive: ''
            //     },
            //     'Cindy': {
            //         name: 'Cindy',
            //         messages: [{msgClass: robotClass, name:'Робот', message:'Привет, Cindy! Как дела?', time: getCurrentTime()}],
            //         userAvatar: avatarsPath + 'chatList_icon3.png',
            //         botAnswers: '',
            //         isActive: ''
            //     },
            //     'Julia': {
            //         name: 'Julia',
            //         messages: [{msgClass: robotClass, name:'Робот', message:'Привет, Julia! Как дела?', time: getCurrentTime()}],
            //         userAvatar: avatarsPath + 'chatList_icon4.png',
            //         botAnswers: '',
            //         isActive: ''
            //     },
            //     'Allan': {
            //         name: 'Allan',
            //         messages: [{msgClass: robotClass, name:'Робот', message:'Привет, Allan! Как дела?', time: getCurrentTime()}],
            //         userAvatar: avatarsPath + 'chatList_icon5.png',
            //         botAnswers: '',
            //         isActive: ''
            //     },
            // }
        };
    },
    [chatsSuccess]:(state, {payload})=>{
        //console.log(payload);
        return {...state, 
            isLoading: false, 
            chats: payload
        };
    },
    [addMessage]: (state, {payload: {id, msgClass, name, message, time, botAnswers}})=> {
        // const time = getCurrentTime();
        return {
            ...state,
            chats:
                {
                    ...state.chats,
                    [id]: {
                        name: state.chats[id].name,
                        messages: [...state.chats[id].messages, {msgClass, name, message, time}],
                        userAvatar: state.chats[id].userAvatar,
                        botAnswers: botAnswers,
                        isActive: state.chats[id].isActive
                    }
                }
        };
    },
    [addChat]: (state, {payload: { name, messages, userAvatar}})=> {
        return {
            ...state,
            chats:
                {
                    ...state.chats,
                    [name]: {
                        name,
                        messages,
                        userAvatar,
                        botAnswers: "",
                        isActive: ""
                    }
                }
        };
    },
    [switchToAdd]: (state) => {
        return {
            ...state
        }
    },
    [changeClass]: (state, {payload: {id, newClassName}}) => {
        return {
            ...state,
            chats:
                {
                    ...state.chats,
                    [id]: {
                        name: state.chats[id].name,
                        messages: [...state.chats[id].messages],
                        userAvatar: state.chats[id].userAvatar,
                        botAnswers: newClassName,
                        isActive: state.chats[id].isActive
                    }
                }
        };
    },
    [switchPage]: (state, {payload:{id, linkStr}}) => {
        return {
            ...state,
        }
    },
    [setIsActive]: (state, {payload:{id, isActiveClass, botAnswersClass}}) => {
        console.log("ChatReducer setIsActive", state, id);
        return {
            ...state,
            chats:
                {
                    ...state.chats,
                    [id]: {
                        name: state.chats[id].name,
                        messages: [...state.chats[id].messages],
                        userAvatar: state.chats[id].userAvatar,
                        botAnswers: botAnswersClass,
                        isActive: isActiveClass
                    }
                }
        }
    },
    [deleteChat]: (state, {payload:{id}}) => {
        //
        const chatKey = Object.keys(state.chats)[id];
        const newChats = {...state.chats};
        delete newChats[chatKey];
        return {
            ...state,
            chats: newChats,

        }
    },
    [deleteMessage]: (state, {payload:{id, msgIdx}}) => {

        const tmpMessages = [...state.chats[id].messages];
        tmpMessages.splice(msgIdx, 1);
        return {
            ...state,
            chats:
                {
                    ...state.chats,
                    [id]: {
                        name: state.chats[id].name,
                        messages: [...tmpMessages],
                        userAvatar: state.chats[id].userAvatar,
                        botAnswers: state.chats[id].botAnswers,
                        isActive: state.chats[id].isActive
                    }
                }
        };
    },
}, defaultState);