import {addChat, addMessage, fire, unfire} from './chatAction';
/**
 * Интеграции роутинга в Redux
 * @function [<push>] — переход по URL link, который заносится в историю навигации.
 */
import {push} from 'connected-react-router';

export default (store) => (next) => (action) => {
    // console.log(store)
    // console.log(action)
    if(action.type === addChat.toString()) {
        next(action);
        store.dispatch(push('/chats/' + action.payload.name))
    } else if(action.type == addMessage.toString()) {
        next(action);
        const {id, name} = action.payload;
        if(store.getState().router.location.pathname !== '/chats/' + id) {
            store.dispatch(fire(id))
        }
    } else if(action.type == '@@router/LOCATION_CHANGE') {
       next(action);
       const id = action.payload.location.pathname.split('/')[2]
       store.dispatch(unfire(id))
       console.log(id)
    } else {
        next(action);
    }
};

