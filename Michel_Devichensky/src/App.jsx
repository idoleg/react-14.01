import './App.css';

import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
/**
 * подключаем Redux к React
 * Делает хранилище Redux доступным для вызовов connect ()() в иерархии компонентов ниже.
 */
import {Provider} from 'react-redux';
/**
 * Интеграции роутинга в Redux
 * @function [<ConnectedRoute>] - специальная фунуция "промежуточный маршрутизатор"
 */
import {ConnectedRouter} from 'connected-react-router';
//---------------------------------------------------------------------------------------------------------------------
//подключаем store.js(function initStore) к React.
import ChatContainer from './containers/ChatContainer';
import ChatListContainer from './containers/ChatListContainer';
/**
 * @function [<history>] export const history = createBrowserHistory();
 */
import {initStore, history} from './store/store';
import {loadChats} from './store/chatAction';
// import UsersListContainer from './containers/UsersListContainer'

const store = initStore();
store.dispatch(loadChats());
/**
 * @component {class} App - собираем все тут :)
 * @component {Component-dull} [<ChatList/>]
 * @component {Component-dull} [<ChatContainer/>] - пока такой но перепишем
 * @component {react-router-dom} [<BrowserRouter>]
 * @component {react-router-dom} [<Switch>]
 * @component {react-router-dom} [<Route>] атрибуты: [path=''] - пишем имя пути, пример: '/chats/'.[exact] - запустк всегда этого пути первым. [component={ChatContainer}] - помпактная запись компонента который подбрасываем(грузим первым)
 * @component {'react-redux} [<Provider>] атрибут: [store={}]
 */
 export class App extends Component {  
    render() {
        return (
            <div className='container'>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                {/* <BrowserRouter> при подключении 'connected-react-router' заменяем на <ConnectedRouter/>*/}
                   <ChatListContainer/>
                   {/* <ChatList/> */}
                   <Switch>
                        <Route path='/chats/' exact component={ChatContainer}/>
                        <Route path='/chats/:id' exact component={ChatContainer}/>
                        {/* <Route path='/chats/' exact><ChatContainer/></Route> - другой вариант записи*/}
                        <Route path='/about'>'/about'-work</Route>                      
                        <Route path='/home'>'/home'-work</Route>                      
                        <Route path='/'>' / 'нет такого пути 404 </Route>                      
                   </Switch>
                   {/* <UsersListContainer/> */}
                   </ConnectedRouter>  
            </Provider> 
          </div>    
        )
    }
}