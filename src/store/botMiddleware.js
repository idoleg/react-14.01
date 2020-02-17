import {addMessage, changeClass} from './chatAction';

const robotClass = 'robot';
const robotName = 'Робот';
const robotAnswers = ['Вот это да!', 'ЗдОрово!', 'Ишь ты!', 'Да ты молодец!', 'Очень интересно!'];

const getAnswerIndex=()=>{
    const min = 0;
    const max = robotAnswers.length - 1;
    return Math.round(min + Math.random() * (max - min));
};
const robotAnswer= () => robotAnswers[getAnswerIndex()];
const getCurrentTime = () => {
    const currDate=new Date();
    return currDate.toTimeString().slice(0,8);
};
let timers1 = {};
// let timers2 = {};

export default store => next => action => {

    if (action.type === addMessage.toString()){
        const {id, name} = action.payload;
        clearTimeout(timers1[id]);
        timers1[id] = setTimeout(()=>{
            const lastMessage = store.getState().chatReducer.chats[id].messages[store.getState().chatReducer.chats[id].messages.length -1];
            if (lastMessage.msgClass !== robotClass) {
                // clearTimeout(timers2[id]);
                store.dispatch(addMessage(id, robotClass, robotName, robotAnswer() + ` А я вот сижу разговариваю с ${name}`, getCurrentTime(), "switchedUp"));
                if (store.getState().chatReducer.chats[id].isActive === ""){
                    store.dispatch(changeClass(id, "switchedUp"))
                }
                //  timers2[id] = setTimeout(()=>{
                //     store.dispatch(changeClass(id, ""))
                //    }, 1000)
            }
        }, 3000);
    } ;
    next(action);
};

// export default function botMiddleware(store) {
//     return function (next) {
//         return function (action) {
//             console.log(action);
//             next(action);
//         }
//     }
// }

