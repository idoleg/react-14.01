import {chatsRequest, chatsSuccess, chatsFailure} from './chatAction';


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
            dispatch(chatsSuccess(chats));
         }catch(e){
            dispatch(chatsFailure(e));
         }
    }
}