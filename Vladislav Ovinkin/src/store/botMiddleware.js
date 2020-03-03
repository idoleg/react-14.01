import { addMessage } from './chatAction';

// export default function botMiddleware (store) {
//     return function (next) {
//         return function (action) {
//             console.log (action);
//             next (action);
//         }
//     }
// }

const BOT_NAME = 'chatBot';

const timer = {};

export default store => next => action => {
    if (action.type === addMessage.toString() && action.payload.name !== BOT_NAME) {
        const {id, name} = action.payload;
        const chatName = store.getState().chatReducer.chats[id].name;
        clearTimeout (timer[id]);
        timer[id] = setTimeout (() => store.dispatch (addMessage (id, BOT_NAME, `Hi, ${name}, I'm a robot in chat with ${chatName}!`)), 3000);
    }
    next (action);
};