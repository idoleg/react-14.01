import { addChat, addMessage, fire, unfire } from './chatAction';
import { push } from 'connected-react-router';

export default store => next => action => {
    const newChatId = store.getState().chatReducer.nextChatId;
    next (action);
    if (action.type == addChat.toString ()) {
        store.dispatch (push('/chats/' + newChatId));
    } else if (action.type == addMessage.toString ()) {
        const {id} = action.payload;
        if (store.getState().router.location.pathname !== '/chats/' + id) {
            store.dispatch (fire(id));
        }
    } else if (action.type == '@@router/LOCATION_CHANGE') {
        const id = action.payload.location.pathname.split('/')[2];
        store.dispatch (unfire (id));
    }
}