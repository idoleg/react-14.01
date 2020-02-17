import {switchPage, setIsActive} from "./chatAction";
import {push} from 'connected-react-router';

export default store => next => action => {
    if (action.type === switchPage.toString()){
        next(action);
        const {id, linkStr} = action.payload;
        const chatsKeys = Object.keys(store.getState().chatReducer.chats);
        
        console.log("switchPageMiddleware ", chatsKeys[id], id);
        if (linkStr !=="") {
            let isActiveClass = "";
            let botAnswersClass = "";
            //  const chatsKeys = Object.keys(store.getState().chatReducer.chats);
            for (let i = 0; i < chatsKeys.length; i++) {
                if (i == id) {
                    isActiveClass = "isActive";
                    botAnswersClass = "";
                } else {
                    isActiveClass = ""
                    botAnswersClass = store.getState().chatReducer.chats[chatsKeys[i]].botAnswers;
                }
                store.dispatch(setIsActive(chatsKeys[i], isActiveClass, botAnswersClass));
            }
       }
        store.dispatch(push(linkStr));
        // store.dispatch(setIsActive(chatId, "isActive"));
    } else {
        next(action);
    };

};