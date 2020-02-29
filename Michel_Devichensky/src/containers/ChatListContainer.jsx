import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addChat} from '../store/chatAction';
import {ChatList} from '../components/ChatList/ChatList'
/**
 * Специальная функция для получения из стора того что будем менять
 * возвращает нужную стркутуру обьекта {id, name}
 * @param {Object} store - состояние из стора.
 * @returns {Object} - возвращенный объект нужной структуры.
 * @example
 * mapStateToProps(store)
 * //=>{id, name}
 */
const mapStateToProps = (store) => {
    // console.log(store)
    const chats = Object.keys(store.chatReducer.chats).map((id) => (
    {
        id, 
        name: store.chatReducer.chats[id].name,
        unread: store.chatReducer.chats[id].unread,
    }));
    return {
       chats
    }
}
/**
 * Функция для проброса actions
 * @param {function} dispatch - отправитель actions
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addChat}, dispatch)
}
// const margeProps = () => {
// }
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
