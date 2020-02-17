import {addChat, switchPage} from "./chatAction";
import {push} from 'connected-react-router';

export default store => next => action => {
    if (action.type === addChat.toString()){
        const {id, name} = action.payload;
        next(action);
        store.dispatch(push('/chats/' + name));

        const switchPageId = Object.keys(store.getState().chatReducer.chats).indexOf(name);
        console.log("chatMiddleware ",  name, " ", Object.keys(store.getState().chatReducer.chats).indexOf(name));
        store.dispatch(switchPage(switchPageId, '/chats/' + name));
    } else {
        next(action);
    };

};