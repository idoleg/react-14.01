import {switchToAdd} from "./chatAction";
import {push} from 'connected-react-router';

export default store => next => action => {
    //const {id, name} = action.payload;
    if (action.type === switchToAdd.toString()){
        next(action);
        store.dispatch(push('/chats/add'));
    } else {
        next(action);
    };

};