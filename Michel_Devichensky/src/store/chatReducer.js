/**
 *@function [<handleActions>] - специалтня функция 
 */
import {handleActions} from 'redux-actions';
/**
 * import экшенов.
 * @function [<loadChats>] - LOAD_CHATS: () => ({}), 
 * @function [<addMessage>] - ADD_MESSAGE: (id, name, content) => ({id, name, content}), 
 */
import {chatsRequest, chatsSuccess, addChat, addMessage, fire, unfire, usersList} from './chatAction';
// состояние по умолчанию.
const defaultState = {
    chats: {},
    isLoading:false,
};
export default handleActions({
    /**
     *@function [<[loadChats]>] - экшен для отрисовки LOAD_CHATS: () => ({}),
     * приходит пустой в редусере получает стейт "заглушку ввиде обьекта"// теперь хрониться на api/chats.json
     * @param {object} - state - chats: {};
     */
    [chatsRequest]: (state) => {
        return {
          ...state,
          isLoading: true,
        }
    },
    [chatsSuccess]: (state, {payload}) => {
        return {
            ...state,
            isLoading: false,
            chats: payload,
        };
    },
    /**
     * Функция возвращает состояние с обновлёнными частями предыдущего стейта.
     *@function [<[addMessage]>] - экшен для добавления нового сообщения в чат.
     *@param {object} - state предыдущее состояние то есть уже загруженный с "заглушкой".
     * ...state, - раскрываем предыдущее состояние для обработки.
     * chats: { - в этом стейте есть чатЫ,входим.
     * ...state.chats, - раскрываем состояние этих чатов.
     * [id]: { - выделяем получаем обращаемся к нужному чат по id для внесения изменений
     * заменим с добавлением нового сообщения.
     * name: state.chats[id].name, - в этом чате получаем id-шное имя чата согласно стейту.
     * messages: [ - далее по стейту доходим до массива messages.
     * ...state.chats[id].messages, - раскрываем id-шный согласно предыдущему стейту 
     * {name, content}, - добавляем объект состоящий из имени и сообщения.
     */
    [addMessage]: (state, {payload: {id, name, content}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        {name, content},
                    ]
                }  
            }
        }
    },
    [addChat]: (state, {payload: {name}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [name]: {
                    name: name,
                    messages: []
                }  
            }
        }
    },
    [fire]: (state, {payload: {id}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: true,
                }  
            }
        }
    },
    [unfire]: (state, {payload: {id}}) => {
        if(!state.chats[id]) {
            return state;
        }
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: false,
                }  
            }
        }
    }, 
}, defaultState);