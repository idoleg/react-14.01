import {deleteChat, switchPage} from "./chatAction";
import {push} from 'connected-react-router';

export default store => next => action => {
    if (action.type === deleteChat.toString()){
        const {id} = action.payload;

        const chatKey = Object.keys(store.getState().chatReducer.chats)[id];
        const chatIsActive = store.getState().chatReducer.chats[chatKey].isActive;
        next(action);
        if (chatIsActive !== ""){
            store.dispatch(push('/' ));
        }

    } else {
        next(action);
    };

};