/**
 * Функция [<connect>] является особенной с помощью этой функции пробрасывается вся информация из Redux в пропсы контейнера-компонента.
 * @component {react-redux} [<connect()()>] - подключает Redux в этот контейнер, принемает аргументы.
 * @params {function} mapStateToProps - 
 * @params {function} mapDispatchToProps - 
 * @component {class} ChatContainer - 
 */
import {connect} from 'react-redux';
/**
 * @component {'redux'} [<bindActionCreators>]
 * @function [<bindActionCreators>] - эта функция получает диспатч?
 */
import {bindActionCreators} from 'redux';
//---------------------------------------------------------------------------------------------
import {addMessage} from '../store/chatAction';
import {Chat} from '../components/Chat/Chat';

const ROBOT_NAME = 'Robot';   
/**
 * @function [<mapStateToProps>] - передает значения стейта в пропсы
 * @param {chatReducer} 
 */
const mapStateToProps = ({chatReducer}, {match}) => {
    
    const id = match.params.id;
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
    }
}
/**
 * @function [<mapDispatchToProps>] - передает действия стейта в пропсы
 * @param {function} dispatch - функция пердает экшены(action) в reduce 
 * @function [<bindActionCreators>] - принемает аргументы ЭКШЕНЫ в обьекте ({loadChats, addMessage}) и dispatch.
 * loadChats, addMessage - заводим сюда по импорту
 */
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
       addMessage
    }, dispatch);
}
const margeProps = (stateProps, dispatchProps, {match}) => {
    const id = match.params.id;
    return {
        ...stateProps,
        onSendMessage: ({name, content}) => dispatchProps.addMessage(id, name, content),
    }
}
//подключаем компонент ChatContainer к Redux - connect()(ChatContainer);
export default connect(mapStateToProps, mapDispatchToProps, margeProps)(Chat);