import {createActions} from 'redux-actions';
import {createAction} from 'redux-api-middleware';

const getCurrentTime = () => {
    const currDate=new Date();
    return currDate.toTimeString().slice(0,8);
};

export const {addMessage, addChat, switchToAdd, changeClass, switchPage, setIsActive, deleteChat, deleteMessage, chatsRequest, chatsSuccess, chatsFailure} = createActions({
    //LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, msgClass, name, message, time) => ({id, msgClass, name, message, time}),
    ADD_CHAT: (name, messages, userAvatar) => ({name, messages, userAvatar}),
    SWITCH_TO_ADD: () => ({}),
    CHANGE_CLASS: (id, newClassName) =>({id, newClassName}),
    SWITCH_PAGE: (id, linkStr) => ({id, linkStr}),
    SET_IS_ACTIVE: (id, isActiveClass, botAnswersClass) => ({id, isActiveClass, botAnswersClass}),
    DELETE_CHAT: (id) => ({id}),
    DELETE_MESSAGE: (id, msgIdx) => ({id, msgIdx}),
    CHATS_REQUEST: () => ({}),
    CHATS_SUCCESS: (data) => (data),
    CHATS_FAILURE: (error) => ({error}),
});

// export const chatsRequest = '@@chats/CHATS_REQUEST'
// export const chatsSuccess = '@@chats/CHATS_SUCCESS'
// export const chatsFailure = '@@chats/CHATS_FAILURE'
 
// export const loadChats = () => createAction({
//   endpoint: '/api/chats.json',
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
//   types: [
//     chatsRequest,
//     chatsSuccess,
//     chatsFailure
//   ]
// })

export const loadChats = () => {
    return async (dispatch) => {
         try{
            dispatch(chatsRequest());
            const result = await fetch('/api/chats.json');
            const chats = await result.json();
            
            Object.keys(chats).forEach((chatName) => {
                //console.log(chatName);
                chats[chatName].messages.forEach((message) => {
                    //console.log(message);
                    message.time = getCurrentTime();
                    //message.time ? message.time : getCurrentTime()
                });
            });
            console.log("chats after", chats);
            //dispatch(chatsSuccess(await result.json()));
            dispatch(chatsSuccess(chats));
         }catch(e){
            dispatch(chatsFailure(e));
         }
    }
}