import {loadChats, switchPage, chatsSuccess} from "./chatAction";
import {push} from 'connected-react-router';

export default store => next => action => {
    //const {id, name} = action.payload;
    
    if (action.type === chatsSuccess.toString()){
        //if (action.type === loadChats.toString()){
        next(action);
        let path= store.getState().router.location.pathname;
        const name = path.substring(path.lastIndexOf("/")+1, path.length);
        let id =  Object.keys(store.getState().chatReducer.chats).indexOf(name);
        if (id && id >= 0){
            store.dispatch(switchPage(id, path));
        } else
        {
            store.dispatch(push('/'));
            console.log("Hi");
        }
    } else{
        next(action);
    };

};