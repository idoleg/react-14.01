import {addMessage} from './chatAction';

const timers = {};
export default (store) => (next) => (action) => {
    // console.log(store)
    // console.log(action)
    if(action.type === addMessage.toString() && action.payload.name !== 'Robot') {
        const {id, name} = action.payload;
        clearTimeout(timers[id]);
        timers[id] = setTimeout(() => store.dispatch(addMessage(id, 'Robot', `Hello,${name}, i'm Robot'chat ${id}`)), 3000);
    }
    next(action);
};